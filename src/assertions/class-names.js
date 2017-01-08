import WrapperBuilder from '../wrapper';
import should from 'should';

const Assertion = should.Assertion;

Assertion.add('classNames', function(expected){
  const wrapper = WrapperBuilder(this.obj),
  actualClasses = wrapper.classNames(),
  expectedClasses = expected.split(' ');

  this.params = {
    actual: wrapper.name(),
    operator: `to contain classNames '${expected}' but found '${actualClasses}'`
  };

  should(expectedClasses.every(containsClassNames(actualClasses))).be.true(' ');
});

let containsClassNames = (actualClasses) => {
  const splitClasses = actualClasses.split(' ');
  return (className) => {
    return splitClasses.indexOf(className) > -1;
  };
};