import WrapperBuilder from '../wrapper';
import should from 'should';

const Assertion = should.Assertion;
const slice = Array.prototype.slice;

export function boolAssertBuilder(
  name, 
  assertMessageFn, 
  methodName, 
  wrapperBuilder = WrapperBuilder) {
  
  Assertion.add(name, function() {
    const wrapper = wrapperBuilder(this.obj),
    args = slice.call(arguments);

    this.params = {
      message: assertMessageFn(args, wrapper)
    };

    const wrapperMethod = methodName ? methodName : name;

    should(wrapper[wrapperMethod].apply(wrapper, args)).be.true(' ');
  });
}

/**
 * assertionBuilder .
 *
 * @param name  name of assertion
 * @param assertFn  return a boolen for assert - args from should passed through
 * @param failMessageFn - output fail message based on args.
 */

export function assertionBuilder(name, assertFn, failMessageFn, wrapperBuilder = WrapperBuilder) {
  Assertion.add(name, function() {
    const wrapper = wrapperBuilder(this.obj),
    args = slice.call(arguments);

    this.params = {
      message: failMessageFn.apply(wrapper, args)
    };

    should(assertFn.apply(wrapper, args)).be.true(' ');
  });
}