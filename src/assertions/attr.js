import WrapperBuilder from '../wrapper';
import assertKeyValue from '../assert-key-value';
import should from 'should';

const Assertion = should.Assertion;

Assertion.add('attr', function(expectedKey, expectedValue) {
  const wrapper = WrapperBuilder(this.obj),
    wrapperAttr = wrapper.attr(expectedKey);

  if (arguments.length > 1 && typeof wrapperAttr !== 'undefined') {
    this.params = {
      actual: wrapper.name(),
      operator: `attribute '${expectedKey}' to have value '${expectedValue}', instead found '${wrapperAttr}'`
    };
    should(assertKeyValue(wrapperAttr, expectedValue)).be.true(' ');
  } else {
    this.params = {
      actual: wrapper.name(),
      operator: `to have attribute '${expectedKey}'`
    };
    should(assertKeyValue(wrapperAttr)).be.true(' ');
  }
});
