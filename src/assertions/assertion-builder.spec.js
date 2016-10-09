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
    return `expected '${wrapper.name()}' to have ${expected} but got ${wrapper.classNames()}`;
  };

  before(() => {
    wrapperProps = { 
      name: sinon.stub().returns('div'),
      awesome: sinon.stub().returns(true),
      classNames: sinon.stub().returns('css classes'),
      moreAwesome: sinon.stub().returns(true)
    };
    assertionAddSpy = sinon.spy(should.Assertion, 'add');
    wrapperBuilderSpy = sinon.stub().returns(wrapperProps);
    assertMessageFnSpy = sinon.spy(assertMessageFn);

    boolAssertBuilder('awesome', assertMessageFnSpy, null, wrapperBuilderSpy);
    renderDom = shallow(<Fixture />);
  });

  afterEach(() => {
    assertionAddSpy.reset();
    wrapperBuilderSpy.reset();
    wrapperProps.awesome.reset();
    wrapperProps.name.reset();
    wrapperProps.classNames.reset();
  });

  after(() => {
    assertionAddSpy.restore();
  });

  it('call Assertion.add with "awesome"', () => {
    renderDom.should.be.awesome('stuff');
    assertionAddSpy.should.be.calledOnce();
    assertionAddSpy.should.be.calledWith('awesome', sinon.match.func);
  });

  it('call WrapperBuilder with an object', () => {
    renderDom.should.be.awesome('stuff');
    wrapperBuilderSpy.should.be.calledOnce();
    wrapperBuilderSpy.should.be.calledWith(sinon.match.object);
  });

  it('should call the awesome method on wrapper', () => {
    renderDom.should.be.awesome('stuff');
    wrapperProps.awesome.should.be.calledOnce();
    wrapperProps.awesome.should.be.calledWith(sinon.match.string);
  });

  it('should call the awesome method with two string params', () => {
    renderDom.should.be.awesome('stuffA', 'stuffB');
    wrapperProps.awesome.should.be.calledOnce();
    wrapperProps.awesome.should.be.calledWith('stuffA', 'stuffB');
  });

  it('callback should be called to set error message', () => {
    renderDom.should.be.awesome('stuff');
    assertMessageFnSpy.should.be.calledWith(['stuff'], sinon.match.object);
  });

  it('on callback wrapper method name and classNames should be called', () => {
    renderDom.should.be.awesome('stuff');
    wrapperProps.name.should.be.calledOnce();
    wrapperProps.classNames.should.be.calledOnce();
  });

  it('map assert name to wrapper method name', () => {
    renderDom.should.be.awesome('stuff');
    boolAssertBuilder('awesome', assertMessageFnSpy, 'moreAwesome', wrapperBuilderSpy);
    
    renderDom.should.be.awesome('stuff');

    wrapperProps.moreAwesome.should.be.calledOnce();
    wrapperProps.moreAwesome.should.be.calledWith('stuff');
  });

});