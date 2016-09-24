import should from 'should';
import { boolAssertBuilder } from './assertion-builder';
import sinon from 'sinon';

describe('Get assert', () => {
  let assertionAddSpy;

  before(() => {
    assertionAddSpy = sinon.spy(should.Assertion, 'add');
  });

  it('call Assertion.add with "awesome"', () => {
    boolAssertBuilder('awesome');
    assertionAddSpy.calledOnce.should.be.true();
    assertionAddSpy.calledWith('awesome', sinon.match.func);
  });

});