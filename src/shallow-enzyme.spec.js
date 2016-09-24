import ShallowEnzyme from './shallow-enzyme';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

const Fixture = () => (
  <div className="testCssClass newClass">Content here</div>
);

describe('Shallow enzyme wrapper', () => {

  let wrapper, shallowWrapper;

  before(() => {
    wrapper = shallow(<Fixture />);
    shallowWrapper = new ShallowEnzyme(wrapper);
  });

  it('should have a public prop of enzyme and instance of ShallowWrapper', () => {
    shallowWrapper.should.have.property('enzyme');
    shallowWrapper.enzyme.should.be.instanceOf(ShallowWrapper);
  });

  it('should return true when checking for "testCssClass"', () => {
    shallowWrapper.should.have.property('hasClass');
    shallowWrapper.hasClass('testCssClass').should.be.true();
  });

  it('should return false when checking for "cssClass"', () => {
    shallowWrapper.should.have.property('hasClass');
    shallowWrapper.hasClass('cssClass').should.be.false();
  });

  it('should return a string of classNames for the element', () => {
    shallowWrapper.should.have.property('classNames');
    shallowWrapper.classNames().should.equal('testCssClass newClass');
  });

  it('should have type div', () => {
    shallowWrapper.should.have.property('type');
    shallowWrapper.type().should.equal('div');
  });

});
