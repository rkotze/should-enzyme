
export default class BaseEnzyme {

  hasAttr(key, attrValue) {
    if(attrValue)
      return this.attr(key) === attrValue;

    return typeof this.attr(key) !== 'undefined';
  }

  hasProp(key, propValue) {
    if(propValue)
      return this.enzyme.prop(key) === propValue;

    return typeof this.enzyme.prop(key) !== 'undefined';
  }

  prop(key) {
    return this.enzyme.prop(key);
  }

  name() {
    return this.enzyme.name();
  }
  
}