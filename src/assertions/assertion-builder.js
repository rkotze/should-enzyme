import WrapperBuilder from '../wrapper';
import should from 'should';

const Assertion = should.Assertion;

export function boolAssertBuilder(
  name, 
  assertMessageFn, 
  methodName, 
  wrapperBuilder = WrapperBuilder) {
  
  Assertion.add(name, function() {
    const wrapper = wrapperBuilder(this.obj);

    this.params = {
      obj: wrapper.type(), 
      operator: assertMessageFn(arguments[0], wrapper)
    };

    const wrapperMethod = methodName ? methodName : name;

    should(wrapper[wrapperMethod](arguments[0])).be.true(' ');
  });
}