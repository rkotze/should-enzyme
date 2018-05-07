import should from 'should';
import sinon from 'sinon';
import 'should-sinon';
import { shallow } from 'enzyme';
import React from 'react';
import { assertionBuilder } from './assertion-builder';

const Fixture = () => <div>Content here</div>;

describe('Assertion builder', () => {
  let assertionAddSpy,
    wrapperBuilderSpy,
    wrapperProps,
    assertFnSpy,
    assertMessageFnSpy,
    renderDom;

  let assertFn = function() {
      return this.muse.apply(this, arguments);
    },
    assertMessageFn = function(expected) {
      return `expected '${this.name()}' to have ${expected} but got ${this.classNames()}`;
    };

  before(() => {
    wrapperProps = {
      name: sinon.stub().returns('div'),
      muse: sinon.stub().returns(true),
      classNames: sinon.stub().returns('css classes')
    };
    assertionAddSpy = sinon.spy(should.Assertion, 'add');
    wrapperBuilderSpy = sinon.stub().returns(wrapperProps);
    assertFnSpy = sinon.spy(assertFn);
    assertMessageFnSpy = sinon.spy(assertMessageFn);

    assertionBuilder(
      'muse',
      assertFnSpy,
      assertMessageFnSpy,
      wrapperBuilderSpy
    );
    renderDom = shallow(<Fixture />);
  });

  afterEach(() => {
    assertionAddSpy.reset();
    wrapperBuilderSpy.reset();
    wrapperProps.muse.reset();
    wrapperProps.classNames.reset();
    wrapperProps.name.reset();
    assertFnSpy.reset();
    assertMessageFnSpy.reset();
  });

  after(() => {
    assertionAddSpy.restore();
  });

  it('call Assertion.add with "muse"', () => {
    renderDom.should.be.muse('stuff');
    assertionAddSpy.should.be.calledOnce();
    assertionAddSpy.should.be.calledWith('muse', sinon.match.func);
  });

  it('call WrapperBuilder with an object', () => {
    renderDom.should.be.muse('stuff');
    wrapperBuilderSpy.should.be.calledOnce();
    wrapperBuilderSpy.should.be.calledWith(sinon.match.object);
  });

  it('should call the "muse" method on wrapper', () => {
    renderDom.should.be.muse('stuff');
    wrapperProps.muse.should.be.calledOnce();
    wrapperProps.muse.should.be.calledWith(sinon.match.string);
  });

  it('should call the "muse" method with two string params', () => {
    renderDom.should.be.muse('stuffA', 'stuffB');
    wrapperProps.muse.should.be.calledOnce();
    wrapperProps.muse.should.be.calledWith('stuffA', 'stuffB');
  });

  it('assertMessageFn should be called to set error message', () => {
    renderDom.should.be.muse('stuff');
    assertMessageFnSpy.should.be.calledOnce();
    assertMessageFnSpy.should.be.calledWith('stuff');
  });

  it('in assertMessageFn wrapper method "name" and "classNames" should be called', () => {
    renderDom.should.be.muse('stuff');
    wrapperProps.name.should.be.calledOnce();
    wrapperProps.classNames.should.be.calledOnce();
  });
});
