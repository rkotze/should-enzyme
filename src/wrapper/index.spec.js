import WrapperBuilder from './index';
import ShallowEnzyme from '../shallow-enzyme';
import ReactEnzyme from '../react-enzyme';
import StaticEnzyme from '../static-enzyme';
import { shallow, mount, render } from 'enzyme';
import { eachEnzymeMethod } from '../../test-setup/each-render-method';
import React from 'react';

const Fixture = props => (
  <div {...props} className="testCssClass newClass">
    Content here
  </div>
);

describe('Need a custom test wrapper based on Enzyme wrapper type', () => {
  it('should return an instance of ShallowEnzyme', () => {
    const wrapper = shallow(<Fixture />);

    WrapperBuilder(wrapper).should.be.instanceOf(ShallowEnzyme);
  });

  it('should return an instance of ReactEnzyme', () => {
    const wrapper = mount(<Fixture />);

    WrapperBuilder(wrapper).should.be.instanceOf(ReactEnzyme);
  });

  it('should return an instance of StaticEnzyme', () => {
    const wrapper = render(<Fixture />);

    WrapperBuilder(wrapper).should.be.instanceOf(StaticEnzyme);
  });

  it('anything else should throw an error', () => {
    (() => {
      WrapperBuilder(Fixture);
    }).should.throwError(/Not a recognised Enzyme wrapper\./);
  });
});

describe('Different enzyme render method', () => {
  eachEnzymeMethod(
    ['shallow', 'mount', 'render'],
    (renderMethod, methodName) => {
      let wrapper;
      before(() => {
        wrapper = WrapperBuilder(
          renderMethod(<Fixture id="free" title="amazing" />)
        );
      });

      context(methodName, () => {
        it(`should return true when checking for "testCssClass"`, () => {
          wrapper.should.have.property('hasClass');
          wrapper.hasClass('testCssClass').should.be.true();
        });

        it(`should return false when checking for "cssClass"`, () => {
          wrapper.should.have.property('hasClass');
          wrapper.hasClass('cssClass').should.be.false();
        });

        it(`should return a string of classNames for the element`, () => {
          wrapper.should.have.property('classNames');
          wrapper.classNames().should.equal('testCssClass newClass');
        });

        it(`should have name div or Fixture`, () => {
          wrapper.should.have.property('name');
          wrapper.name().should.be.oneOf('div', 'Fixture');
        });

        it(`should get prop "title" value of "amazing"`, () => {
          wrapper.should.have.property('attr');
          wrapper.attr('title').should.equal('amazing');
        });

        it(`should get "undefined" if the prop does not exist`, () => {
          (wrapper.attr('bla') === undefined).should.be.true();
        });

        it(`should get "Content here" text`, () => {
          wrapper.text().should.equal('Content here');
        });
      });
    }
  );

  eachEnzymeMethod(['shallow', 'mount'], (renderMethod, methodName) => {
    let wrapper;
    before(() => {
      wrapper = WrapperBuilder(
        renderMethod(<Fixture id="free" title="amazing" />)
      );
    });

    context(methodName, () => {
      it(`should get prop "id" value of "free"`, () => {
        wrapper.should.have.property('prop');
        wrapper.prop('id').should.equal('free');
      });

      it('should get both props "id" and "title"', () => {
        wrapper.should.have.property('props');
        wrapper.props().should.containDeep({ id: 'free', title: 'amazing' });
      });

      it('providing property names in array should return only those props', () => {
        wrapper
          .props(['id', 'title'])
          .should.deepEqual({ id: 'free', title: 'amazing' });
      });

      it('providing property name that does not exist should return only props that exist', () => {
        wrapper
          .props(['id', 'title', 'alt'])
          .should.deepEqual({ id: 'free', title: 'amazing' });
      });
    });
  });

  eachEnzymeMethod(['render'], (renderMethod, methodName) => {
    let wrapper;
    before(() => {
      wrapper = WrapperBuilder(
        renderMethod(<Fixture id="free" title="amazing" />)
      );
    });

    context(methodName, () => {
      it(`should throw error using prop method and Enzyme render`, () => {
        wrapper.should.have.property('prop');
        (() => wrapper.prop('id')).should.throwError(
          'Enzyme static render method (Cheerio) does not support React props.'
        );
      });

      it(`should throw error using props method and Enzyme render`, () => {
        wrapper.should.have.property('props');
        (() => wrapper.props()).should.throwError(
          'Enzyme static render method (Cheerio) does not support React props.'
        );
      });
    });
  });
});
