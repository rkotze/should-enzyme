import WrapperBuilder from '../wrapper';
import should from 'should';

let Assertion = should.Assertion,
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
      shouldEnzymeMessage: failMessageFn.apply(wrapper, args)
    };

    should(assertFn.apply(wrapper, args)).be.true(' ');
  });
  
}

/**
  override generateMessage in should
 */
const copyGenerateMessage = should.AssertionError.prototype.generateMessage;

should.AssertionError.prototype = Object.create(should.AssertionError.prototype, {
  generateMessage: {
    value: function() {
      if(typeof this.shouldEnzymeMessage === 'function')
        return this.shouldEnzymeMessage(this);

      if(typeof this.shouldEnzymeMessage === 'string')
        return this.shouldEnzymeMessage;

      return copyGenerateMessage();
    }
  }
});
