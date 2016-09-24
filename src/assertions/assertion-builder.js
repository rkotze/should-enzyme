import should from 'should';
// import WrapperBuilder from './wrapper';

const Assertion = should.Assertion;

export function boolAssertBuilder(name) {
  Assertion.add(name, function() {

  });
}