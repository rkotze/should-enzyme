import RenderEnzyme from './render-enzyme';
import { render } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import 'should-sinon';

const Fixture = () => (
  <div className="testCssClass newClass">Content here</div>
);

describe('Static rendering enzyme wrapper', () => {

  let wrapper, renderWrapper, childrenSpy, firstSpy;

  before(() => {
    wrapper = render(<Fixture />);
    childrenSpy = sinon.spy(wrapper, 'children');
    renderWrapper = new RenderEnzyme(wrapper);
  });

  afterEach(() => {
    childrenSpy.reset();
  });

  after(() => {
    childrenSpy.restore();
  });

  it('should have a public prop of enzyme and is a Cheerio object', () => {
    renderWrapper.should.have.property('enzyme');
    renderWrapper.enzyme.should.be.instanceOf(Object);
    renderWrapper.enzyme.first()[0].type.should.equal('root');
  });

  it('have "element" prop and should return a type "tag"', () => {
    renderWrapper.should.have.property('element');
    childrenSpy.should.be.calledOnce();
    renderWrapper.element[0].type.should.equal('tag');
  });

  it('using find should call the "first" function twice and return type "tag"', () => {
    const newWrapper = wrapper.find('div');
    firstSpy = sinon.spy(newWrapper, 'first');
    const newRender = new RenderEnzyme(newWrapper);

    newRender.element[0].type.should.equal('tag');
    firstSpy.should.be.calledTwice();

    firstSpy.restore();
  });

});
