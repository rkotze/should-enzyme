import should from 'should';

const Assertion = should.Assertion;

export function boolAssertBuilder(name, wrapperBuilder, assertMessageFn) {
  Assertion.add(name, function() {
    const wrapper = wrapperBuilder(this.obj);

    this.params = {
      obj: wrapper.type(), 
      operator: assertMessageFn(arguments[0], wrapper)
    };

    should(wrapper[name](arguments[0])).be.true(' ');
  });
}