
export default class BaseEnzyme {

  classNames() {
    return this.wrapper.prop('className');
  }

  hasClass(className) {
    return this.wrapper.hasClass(className);
  }

  prop(propName, propValue) {
    if(propValue)
      return this.wrapper.prop(propName) === propValue;
    
    return typeof this.wrapper.prop(propName) !== 'undefined';
  }

  type() {
    return this.wrapper.type();
  }
}