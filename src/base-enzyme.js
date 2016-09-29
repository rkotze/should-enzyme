
export default class BaseEnzyme {

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