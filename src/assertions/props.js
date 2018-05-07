import WrapperBuilder from '../wrapper';
import should from 'should';

const Assertion = should.Assertion;

Assertion.add('props', function(expectedKeyValues) {
  if (expectedKeyValues == null || typeof expectedKeyValues != 'object')
    throw new Error('An object needs to be passed in to assert props');

  const wrapper = WrapperBuilder(this.obj),
    props = wrapper.props(Object.keys(expectedKeyValues));

  this.params = {
    actual: wrapper.name(),
    operator: `to have ${formatProps(
      expectedKeyValues
    )} but found ${formatProps(props)}`
  };

  should(expectedKeyValues).deepEqual(props, ' ');
});

function formatProps(props) {
  return should.format(props).replace('Object', 'props');
}
