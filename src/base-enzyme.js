
export default class BaseEnzyme {

  hasClass(className) {
    return this.wrapper.hasClass(className);
  }

  classNames() {
    return this.wrapper.prop('className');
  }

  type() {
    return this.wrapper.type();
  }
}