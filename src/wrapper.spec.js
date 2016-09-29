import WrapperBuilder from './wrapper';
import ShallowEnzyme from './shallow-enzyme';
import ReactEnzyme from './react-enzyme';
import { shallow, mount } from 'enzyme';
import React from 'react';

const Fixture = (props) => (
  <div {...props} className="testCssClass newClass">
  Content here
  </div>
);

describe('Need a custom test wrapper based on Enzyme wrapper type', () => {

  it('should return a ShallowEnzyme', () => {
    const wrapper = shallow(<Fixture />);

    WrapperBuilder(wrapper).should.be.instanceOf(ShallowEnzyme);
  });

  it('should return a ReactEnzyme', () => {
    const wrapper = mount(<Fixture />);

    WrapperBuilder(wrapper).should.be.instanceOf(ReactEnzyme);
  });

  it('anything else should throw an error', () => {
    (() => {
      WrapperBuilder(Fixture);
    }).should.throwError(/Not a recognised Enzyme wrapper\./);
  });

});

describe('Different enzyme render method', () => {
  const methodNames = ['shallow', 'mount'];
  [shallow, mount].forEach((renderMethod, i) => {
    let wrapper;
    before(() => {
      wrapper = WrapperBuilder(renderMethod(<Fixture id="free" />));
    });

    context(methodNames[i], () => {

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

      it(`should get prop "id" value of "free"`, () => {
        wrapper.should.have.property('prop');
        wrapper.prop('id').should.equal('free');
      });

      it(`should check if prop "id" exists`, () => {
        wrapper.should.have.property('hasProp');
        wrapper.hasProp('id').should.be.true();
      });

      it(`should be false "noData" does not exist`, () => {
        wrapper.should.have.property('hasProp');
        wrapper.hasProp('noData').should.be.false();
      });

      it(`should check if prop "id" value is "free"`, () => {
        wrapper.hasProp('id', 'free').should.be.true();
      });

      it(`should be false if prop "id" value is "other"`, () => {
        wrapper.hasProp('id', 'other').should.be.false();
      });
    });
  });
});