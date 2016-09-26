
export default class BaseEnzyme {

  classNames() {
    return this.wrapper.prop('className');
  }

  hasClass(className) {
    return this.wrapper.hasClass(className);
  }

  hasProp(key, propValue) {
    if(propValue)
      return this.enzyme.prop(key) === propValue;

    return typeof this.enzyme.prop(key) !== 'undefined';
  }

  prop(key) {
    return this.enzyme.prop(key);
  }

  type() {
    return this.wrapper.type();
  }
}