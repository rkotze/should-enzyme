import BaseEnzyme from "./base-enzyme";

export default class ReactEnzyme extends BaseEnzyme {
  constructor(enzymeWrapper) {
    super();
    this.enzyme = enzymeWrapper;
  }

  get element() {
    if (!this.__element) this.__element = this.enzyme.getDOMNode();

    return this.__element;
  }

  classNames() {
    return this.element.className;
  }

  hasClass(className) {
    const classNameList = this.classNames().split(" ");
    return classNameList.indexOf(className) > -1;
  }

  attr(name) {
    return this.element.getAttribute(name) || undefined;
  }

  checked() {
    return this.element.checked;
  }

  value() {
    return this.element.value;
  }

  isDisabled() {
    return this.element.disabled;
  }
}
