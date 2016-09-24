import should from 'should';
import sinon from 'sinon';
import 'should-sinon';
import { shallow } from 'enzyme';
import React from 'react';
import { boolAssertBuilder } from './assertion-builder';

const Fixture = () => (
  <div>Content here</div>
);

describe('Assertion builder', () => {
  let assertionAddSpy,
  wrapperBuilderSpy,
  renderDom,
  wrapperProps;

  before(() => {
    wrapperProps = { 
      awesome: sinon.stub().returns(true) 
    };
    assertionAddSpy = sinon.spy(should.Assertion, 'add');
    wrapperBuilderSpy = sinon.stub().returns(wrapperProps);
    
    boolAssertBuilder('awesome', wrapperBuilderSpy);
    renderDom = shallow(<Fixture />);
    renderDom.should.be.awesome('stuff');
  });

  after(() => {
    assertionAddSpy.restore();
  });

  it('call Assertion.add with "awesome"', () => {
    assertionAddSpy.calledOnce.should.be.true();
    assertionAddSpy.calledWith('awesome', sinon.match.func);
  });

  it('call WrapperBuilder with an object', () => {
    wrapperBuilderSpy.calledOnce.should.be.true();
    wrapperBuilderSpy.calledWith(sinon.match.object).should.be.true();
  });

  it('should call the awesome method on wrapper', () => {
    wrapperProps.awesome.should.be.calledOnce();
    wrapperProps.awesome.should.be.calledWith(sinon.match.string);
  });

});