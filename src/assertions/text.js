
import should from 'should';

const Assertion = should.Assertion;
Assertion.add('text', function(string) {
  const text = this.obj.text();
  this.params = {
    obj: this.obj.name(),
    operator: `to have text '${string}' but found '${text}'`,
  };
  should(text.includes(string)).be.true(' ');
});
