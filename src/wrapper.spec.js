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
      wrapper = WrapperBuilder(renderMethod(<Fixture myData="free" />));
    });

    it(`${methodNames[i]} should return true when checking for "testCssClass"`, () => {
      wrapper.should.have.property('hasClass');
      wrapper.hasClass('testCssClass').should.be.true();
    });

    it(`${methodNames[i]} should return false when checking for "cssClass"`, () => {
      wrapper.should.have.property('hasClass');
      wrapper.hasClass('cssClass').should.be.false();
    });

    it(`${methodNames[i]} should return a string of classNames for the element`, () => {
      wrapper.should.have.property('classNames');
      wrapper.classNames().should.equal('testCssClass newClass');
    });

    it(`${methodNames[i]} should have type div`, () => {
      wrapper.should.have.property('type');
      wrapper.type().should.equal('div');
    });

    it(`${methodNames[i]} should check if prop "myData" exists`, () => {
      wrapper.should.have.property('prop');
      wrapper.prop('myData').should.be.true();
    });

    it(`${methodNames[i]} should be false "noData" does not exist`, () => {
      wrapper.should.have.property('prop');
      wrapper.prop('noData').should.be.false();
    });

    it(`${methodNames[i]} should check if prop "myData" value is "free"`, () => {
      wrapper.prop('myData', 'free').should.be.true();
    });

    it(`${methodNames[i]} should be false if prop "myData" value is "other"`, () => {
      wrapper.prop('myData', 'other').should.be.false();
    });
  });
});