// import { assertionBuilder } from './assertion-builder';
// import assertKeyValue from '../assert-key-value';

// assertionBuilder(
//   'state', 
//   function (expectedKey, expectedValue) {
//     return assertKeyValue(this.state(expectedKey), expectedValue);
//   },
//   function (expectedKey, expectedValue) {
//     if(arguments.length === 2 && typeof this.state(expectedKey) !== 'undefined')
//       return `expected '${this.name()}' state '${expectedKey}' property to have value '${expectedValue}', instead found '${this.state(expectedKey)}'`;

//     return `expected '${this.name()}' to have state '${expectedKey}' property`;
//   }
// );

import WrapperBuilder from '../wrapper';
import assertKeyValue from '../assert-key-value';
import should from 'should';

const Assertion = should.Assertion;

Assertion.add('state', function(expectedKey, expectedValue){
  const wrapper = WrapperBuilder(this.obj),
  wrapperState = wrapper.state(expectedKey);

  if(arguments.length > 1 && typeof wrapperState !== 'undefined') {
    this.params = {
      actual: wrapper.name(),
      operator: `expected '${wrapper.name()}' state '${expectedKey}' property to have value '${expectedValue}', instead found '${wrapperState}'`
    };
    should(wrapperState === expectedValue).be.true(' ');
  }else{
    this.params = {
      actual: wrapper.name(),
      operator: `expected '${wrapper.name()}' to have state '${expectedKey}' property`
    };
    should(assertKeyValue(wrapperState)).be.true(' ');
  }
});