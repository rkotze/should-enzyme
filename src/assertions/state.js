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
      operator: `state '${expectedKey}' property to have value '${expectedValue}', instead found '${wrapperState}'`
    };
    should(wrapperState === expectedValue).be.true(' ');
  }else{
    this.params = {
      actual: wrapper.name(),
      operator: `to have state '${expectedKey}' property`
    };
    should(assertKeyValue(wrapperState)).be.true(' ');
  }
});