import WrapperBuilder from '../wrapper';
import assertKeyValue from '../assert-key-value';
import should from 'should';

const Assertion = should.Assertion;

Assertion.add('data', function(expectedKey, expectedValue) {
  const wrapper = WrapperBuilder(this.obj),
    dataKey = `data-${expectedKey}`,
    wrapperData = wrapper.attr(dataKey);

  if (arguments.length > 1 && typeof wrapperData !== 'undefined') {
    this.params = {
      actual: wrapper.name(),
      operator: `attribute '${dataKey}' to have value '${expectedValue}', instead found '${wrapperData}'`
    };
    should(assertKeyValue(wrapperData, expectedValue)).be.true(' ');
  } else {
    this.params = {
      actual: wrapper.name(),
      operator: `to have attribute '${dataKey}'`
    };
    should(assertKeyValue(wrapperData)).be.true(' ');
  }
});
