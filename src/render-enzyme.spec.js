import RenderEnzyme from './render-enzyme';
import { render } from 'enzyme';
import React from 'react';

const Fixture = () => (
  <div className="testCssClass newClass">Content here</div>
);

describe('Static rendering enzyme wrapper', () => {

  let wrapper, renderWrapper;

  before(() => {
    wrapper = render(<Fixture />);
    renderWrapper = new RenderEnzyme(wrapper);
  });

  it('should have a public prop of enzyme and is a Cheerio object', () => {
    renderWrapper.should.have.property('enzyme');
    renderWrapper.enzyme.should.be.instanceOf(Object);
    renderWrapper.enzyme.first()[0].type.should.equal('root');
  });

});
