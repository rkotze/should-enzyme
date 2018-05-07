import StaticEnzyme from './static-enzyme';
import React from 'react';

const Fixture = () => <div className="testCssClass newClass">Content here</div>;

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

  it('should have prop "element" that is a cheerio DOM wrapper', () => {
    staticWrapper.should.have.property('element');
    staticWrapper.element.cheerio.should.equal('[cheerio object]');
  });

  it('should call "children()" on cheerio and return a type "tag"', () => {
    staticWrapper.element[0].type.should.equal('tag');
    staticWrapper.element[0].name.should.equal('div');
  });
});
