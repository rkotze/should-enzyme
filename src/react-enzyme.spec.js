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

  it('should have prop that gets the parent node as react wrapper', () => {
    reactWrapper.should.have.property('wrapper');
    reactWrapper.wrapper.should.be.instanceOf(ReactWrapper);
  });

  it('should have prop that gets the parent node as ReactDOM wrapper', () => {
    reactWrapper.should.have.property('element');
    // reactWrapper.element.type.should.be.instanceOf(ReactWrapper);
  });

});
