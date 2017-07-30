import WrapperBuilder from '../wrapper';
import should from 'should';

const Assertion = should.Assertion;

Assertion.add('disabled', function(){
  const wrapper = WrapperBuilder(this.obj),
  disabled = wrapper.isDisabled();

  if(disabled){
    this.params = {
      message: `expected '${wrapper.name()}' type '${wrapper.attr('type')}' to be 'endabled' but is 'disabled'`
    };
    should(disabled).be.true(' ');
  }else{
    this.params = {
      actual: wrapper.name(),
      operator: `type '${wrapper.attr('type')}' to be 'disabled' but is 'enabled'`
    };
    should(disabled).be.true(' ');
  }
});