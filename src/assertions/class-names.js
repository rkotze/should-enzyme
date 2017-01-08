import WrapperBuilder from '../wrapper';
import should from 'should';

const Assertion = should.Assertion;

Assertion.add('classNames', function(expected){
  const wrapper = WrapperBuilder(this.obj),
  actualClasses = wrapper.classNames().split(' '),
  expectedClasses = expected.split(' ');

  // this.params = {
  //   actual: 'component',
  //   operator: 'to be present'
  // };

  should(expectedClasses.every(containsClassNames(actualClasses))).be.true(' ');
});

let containsClassNames = (actualClasses) => {
  return (className) => {
    return actualClasses.indexOf(className) > -1;
  };
};