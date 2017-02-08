import WrapperBuilder from '../wrapper';
import assertKeyValue from '../assert-key-value';
import should from 'should';

const Assertion = should.Assertion;

Assertion.add('prop', function(expectedKey, expectedValue){
  const wrapper = WrapperBuilder(this.obj),
  wrapperProp = wrapper.prop(expectedKey);

  if(arguments.length > 1 && typeof wrapperProp !== 'undefined') {
    this.params = {
      actual: wrapper.name(),
      operator: `prop '${expectedKey}' to have value '${expectedValue}', instead found '${wrapperProp}'`
    };
    should(assertKeyValue(wrapperProp, expectedValue)).be.true(' ');
  }else{
    this.params = {
      actual: wrapper.name(),
      operator: `to have prop '${expectedKey}'`
    };
    should(assertKeyValue(wrapperProp)).be.true(' ');
  }
}); 