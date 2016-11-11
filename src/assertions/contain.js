import WrapperBuilder from '../wrapper';
import should from 'should';

const Assertion = should.Assertion;

Assertion.add('contain', function(node){
  const wrapper = WrapperBuilder(this.obj);

  should(wrapper.containNodes(node)).be.true(' ');
});
