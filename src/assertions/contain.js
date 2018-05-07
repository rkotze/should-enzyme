import WrapperBuilder from '../wrapper';
import should from 'should';
import jsxString from 'react-element-to-jsx-string';

const Assertion = should.Assertion;

Assertion.add('contain', function(node) {
  const wrapper = WrapperBuilder(this.obj);

  this.params = {
    actual: wrapper.name(),
    operator: `to contain a '${jsxString(node)}'`
  };

  should(wrapper.containNodes(node)).be.true(' ');
});
