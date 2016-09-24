import should from 'should';

const Assertion = should.Assertion;

export function boolAssertBuilder(name, wrapperBuilder) {
  Assertion.add(name, function() {
    const wrapper = wrapperBuilder(this.obj);

    should(wrapper[name](arguments[0])).be.true(' ');
  });
}