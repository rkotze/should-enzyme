
export default class BaseEnzyme {

  classNames() {
    return this.wrapper.prop('className');
  }

  hasClass(className) {
    return this.wrapper.hasClass(className);
  }

  prop(propName, propValue) {
    if(propValue)
      return this.enzyme.prop(propName) === propValue;

    return typeof this.enzyme.prop(propName) !== 'undefined';
  }

  type() {
    return this.wrapper.type();
  }
}