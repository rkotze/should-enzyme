import WrapperBuilder from '../wrapper';
import should from 'should';

const Assertion = should.Assertion;

Assertion.add('present', function() {
  const wrapper = WrapperBuilder(this.obj);

  this.params = {
    actual: 'component',
    operator: 'to be present'
  };

  should(wrapper.isPresent()).be.true(' ');
});
