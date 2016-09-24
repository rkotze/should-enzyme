import should from 'should';

const Assertion = should.Assertion;

export function boolAssertBuilder(name, wrapperBuilder, assertMessageFn, overrideName) {
  const assertName = overrideName ? overrideName : name;
  Assertion.add(assertName, function() {
    const wrapper = wrapperBuilder(this.obj);

    this.params = {
      obj: wrapper.type(), 
      operator: assertMessageFn(arguments[0], wrapper)
    };

    should(wrapper[assertName](arguments[0])).be.true(' ');
  });
}