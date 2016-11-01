import { assertionBuilder1 } from './assertion-builder';
import should from 'should';

assertionBuilder1(
  'attr',
  function (wrapper, key, value) {
    this.params = {
      obj: wrapper.name(),
      operator: `to have attribute '${key}'`
    };
    this.obj = wrapper.attr(key);//TODO
    should(this.obj).be.not.undefined();
    if(value !== void(0)) {
      this.params.operator += ` with value '${should.format(value)}' (found '${should.format(this.obj)}')`;
      should(this.obj).be.equal(value);
    }
  }
);
