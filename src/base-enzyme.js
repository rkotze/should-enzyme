import assertKeyValue from './assert-key-value';

export default class BaseEnzyme {

  hasProp(key, propValue) {
    return assertKeyValue(this.prop(key), propValue);
  }

  prop(key) {
    return this.enzyme.prop(key);
  }

  name() {
    return this.enzyme.name();
  }

  text() {
    return this.enzyme.text();
  }
  
}