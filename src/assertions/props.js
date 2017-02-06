import WrapperBuilder from '../wrapper';
// import assertKeyValue from '../assert-key-value';
import should from 'should';

const Assertion = should.Assertion;

Assertion.add('props', function(expectedKeyValues){
  const wrapper = WrapperBuilder(this.obj),
  props = wrapper.props(Object.keys(expectedKeyValues));

  expectedKeyValues.should.deepEqual(props);

  // if(arguments.length > 1 && typeof wrapper.prop(expectedKey) !== 'undefined') {
  //   this.params = {
  //     actual: wrapper.name(),
  //     operator: `prop '${expectedKey}' to have value '${expectedValue}', instead found '${wrapper.prop(expectedKey)}'`
  //   };
  //   should(assertKeyValue(wrapper.prop(expectedKey), expectedValue)).be.true(' ');
  // }else{
  //   this.params = {
  //     actual: wrapper.name(),
  //     operator: `to have prop '${expectedKey}'`
  //   };
  //   should(assertKeyValue(wrapper.prop(expectedKey))).be.true(' ');
  // }
}); 