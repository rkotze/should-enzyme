import assertKeyValue from './assert-key-value';

export default class BaseEnzyme {

  hasAttr(key, attrValue) {
    return assertKeyValue(this.attr(key), attrValue);
  }

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
