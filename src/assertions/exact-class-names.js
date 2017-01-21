import WrapperBuilder from '../wrapper';
import should from 'should';

const Assertion = should.Assertion;

Assertion.add('exactClassNames', function(expected){
  const wrapper = WrapperBuilder(this.obj),
  actualClasses = wrapper.classNames();

  this.params = {
    actual: wrapper.name(),
    operator: `to have classNames '${expected}' but found '${actualClasses}'`
  };

  should(expected).be.exactly(actualClasses);
});