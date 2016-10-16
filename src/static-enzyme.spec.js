import StaticEnzyme from './static-enzyme';
import { render } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import 'should-sinon';

const Fixture = () => (
  <div className="testCssClass newClass">Content here</div>
);

describe('Static enzyme wrapper', () => {

  let wrapper, staticWrapper, childrenSpy, firstSpy;

  before(() => {
    wrapper = render(<Fixture />);
    childrenSpy = sinon.spy(wrapper, 'children');
    staticWrapper = new StaticEnzyme(wrapper);
  });

  after(() => {
    childrenSpy.restore();
  });

  it('should have a public prop enzyme that is a cheerio DOM wrapper', () => {
    staticWrapper.should.have.property('enzyme');
    staticWrapper.enzyme.cheerio.should.equal('[cheerio object]');
    staticWrapper.enzyme.first()[0].type.should.equal('root');
  });

  it('should have prop "element" that is a cheerio DOM wrapper', () => {
    staticWrapper.should.have.property('element');
    staticWrapper.element.cheerio.should.equal('[cheerio object]');
  });

  it('should call "children()" on cheerio and return a type "tag"', () => {
    staticWrapper.element[0].type.should.equal('tag');
    staticWrapper.element[0].name.should.equal('div');
    childrenSpy.should.be.calledOnce();
  });

  it('using find should call the "first" function twice and return type "tag"', () => {
    const newWrapper = wrapper.find('div');
    firstSpy = sinon.spy(newWrapper, 'first');
    const newRender = new StaticEnzyme(newWrapper);

    newRender.element[0].type.should.equal('tag');
    firstSpy.should.be.calledTwice();

    firstSpy.restore();
  });

});
