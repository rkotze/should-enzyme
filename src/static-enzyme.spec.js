import StaticEnzyme from './static-enzyme';
import { render } from 'enzyme';
import React from 'react';

const Fixture = () => (
  <div className="testCssClass newClass">Content here</div>
);

describe('Static enzyme wrapper', () => {

  let wrapper, staticWrapper;

  before(() => {
    wrapper = render(<Fixture />);
    staticWrapper = new StaticEnzyme(wrapper);
  });

  it('should have a public prop enzyme that is a cheerio DOM wrapper', () => {
    staticWrapper.should.have.property('enzyme');
    staticWrapper.enzyme.cheerio.should.equal('[cheerio object]');
  });

  it('should have prop element that is a cheerio DOM wrapper', () => {
    staticWrapper.should.have.property('enzyme');
    staticWrapper.enzyme.cheerio.should.equal('[cheerio object]');
  });

});
