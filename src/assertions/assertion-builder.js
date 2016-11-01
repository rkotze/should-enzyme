import WrapperBuilder from '../wrapper';
import should from 'should';

const Assertion = should.Assertion,
slice = Array.prototype.slice;

/**
 * assertionBuilder: extend shouldjs api and access ShouldEnzyme wrapper to assert with.
 *
 * @param name            name of assertion
 * @param assertFn        callback return a boolean for assert, args passed through, this is BaseEnzyme
 * @param failMessageFn   callback return fail message, args passed through, this is BaseEnzyme.
 */

export function assertionBuilder(
  name,
  assertFn,
  failMessageFn,
  wrapperBuilder = WrapperBuilder) {

  Assertion.add(name, function() {
    const wrapper = wrapperBuilder(this.obj),
    args = slice.call(arguments);

    this.params = {
      message: failMessageFn.apply(wrapper, args)
    };

    should(assertFn.apply(wrapper, args)).be.true(' ');
  });
}


export function assertionBuilder1(name, assertFn, wrapperBuilder = WrapperBuilder) {
  Assertion.add(name, function() {
    const wrapper = wrapperBuilder(this.obj),
      args = slice.call(arguments);

    args.unshift(wrapper);

    assertFn.apply(this, args);
  });
}
