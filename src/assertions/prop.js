import WrapperBuilder from '../wrapper';
import should from 'should';

const Assertion = should.Assertion;

Assertion.add('prop', function(expectedKey, expectedValue){
  const wrapper = WrapperBuilder(this.obj),
  wrapperProp = wrapper.prop(expectedKey);

  if(arguments.length > 1 && typeof wrapperProp !== 'undefined') {
    this.params = {
      actual: wrapper.name(),
      operator: `prop '${expectedKey}' to have value ${should.format(expectedValue)}, instead found ${should.format(wrapperProp)}`
    };
    should(wrapperProp).be.eql(expectedValue, ' ');
  }else{
    this.params = {
      actual: wrapper.name(),
      operator: `to have prop '${expectedKey}'`
    };
    should(wrapperProp).not.be.undefined(' ');
  }
}); 