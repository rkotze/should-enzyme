import ReactEnzyme from './react-enzyme';
import { mount, ReactWrapper } from 'enzyme';
import React from 'react';

const Fixture = () => (
  <div className="testCssClass newClass">Content here</div>
);

describe('React enzyme wrapper', () => {

  let wrapper, reactWrapper;

  before(() => {
    wrapper = mount(<Fixture />);
    reactWrapper = new ReactEnzyme(wrapper);
  });

  it('should have a public prop of enzyme and instance of ReactWrapper', () => {
    reactWrapper.should.have.property('enzyme');
    reactWrapper.enzyme.should.be.instanceOf(ReactWrapper);
  });

  // it('should return true when checking for "testCssClass"', () => {
  //   reactWrapper.should.have.property('hasClass');
  //   reactWrapper.hasClass('testCssClass').should.be.true();
  // });

  // it('should return false when checking for "cssClass"', () => {
  //   reactWrapper.should.have.property('hasClass');
  //   reactWrapper.hasClass('cssClass').should.be.false();
  // });

  // it('should return a string of classNames for the element', () => {
  //   reactWrapper.should.have.property('classNames');
  //   reactWrapper.classNames().should.equal('testCssClass newClass');
  // });

});
