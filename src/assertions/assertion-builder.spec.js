import should from 'should';
import sinon from 'sinon';
import 'should-sinon';
import { shallow } from 'enzyme';
import React from 'react';
import { boolAssertBuilder } from './assertion-builder';

const Fixture = () => (
  <div>Content here</div>
);

describe('Boolean assertion builder', () => {
  let assertionAddSpy,
  wrapperBuilderSpy,
  renderDom,
  wrapperProps,
  assertMessageFnSpy,
  assertMessageFn = function(expected, wrapper) {
    return `to have ${expected} but got ${wrapper.classNames()}`;
  };

  before(() => {
    wrapperProps = { 
      type: sinon.stub().returns('div'),
      awesome: sinon.stub().returns(true),
      classNames: sinon.stub().returns('css classes')
    };
    assertionAddSpy = sinon.spy(should.Assertion, 'add');
    wrapperBuilderSpy = sinon.stub().returns(wrapperProps);
    assertMessageFnSpy = sinon.spy(assertMessageFn);

    boolAssertBuilder('awesome', wrapperBuilderSpy, assertMessageFnSpy);
    renderDom = shallow(<Fixture />);
    renderDom.should.be.awesome('stuff');
  });

  afterEach(() => {
    assertionAddSpy.reset();
  });

  after(() => {
    assertionAddSpy.restore();
  });

  it('call Assertion.add with "awesome"', () => {
    assertionAddSpy.should.be.calledOnce();
    assertionAddSpy.should.be.calledWith('awesome', sinon.match.func);
  });

  it('call WrapperBuilder with an object', () => {
    wrapperBuilderSpy.should.be.calledOnce();
    wrapperBuilderSpy.should.be.calledWith(sinon.match.object);
  });

  it('should call the awesome method on wrapper', () => {
    wrapperProps.awesome.should.be.calledOnce();
    wrapperProps.awesome.should.be.calledWith(sinon.match.string);
  });

  it('callback should be called to set error message', () => {
    assertMessageFnSpy.should.be.calledWith('stuff', sinon.match.object);
  });

  it('on callback wrapper method type and classNames should be called', () => {
    wrapperProps.type.should.be.calledOnce();
    wrapperProps.classNames.should.be.calledOnce();
  });

  it('override the name with a name that matches the wrapper', () => {
    boolAssertBuilder('awesome', wrapperBuilderSpy, assertMessageFnSpy, 'moreAwesome');
    assertionAddSpy.should.be.calledOnce();
    assertionAddSpy.should.be.calledWith('moreAwesome', sinon.match.func);
  });

});