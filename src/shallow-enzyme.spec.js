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

  it('should have prop that gets the parent node as shallow wrapper', () => {
    shallowWrapper.should.have.property('wrapper');
    shallowWrapper.wrapper.should.be.instanceOf(ShallowWrapper);
  });

  it('should have prop that generates a cheerio DOM wrapper', () => {
    shallowWrapper.should.have.property('element');
    shallowWrapper.element.should.have.property('options', { 
      withDomLvl1: true,
      normalizeWhitespace: false,
      xmlMode: false,
      decodeEntities: true });
  });

});
