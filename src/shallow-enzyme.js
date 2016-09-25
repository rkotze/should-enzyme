export default class ShallowEnzyme {
  constructor(enzymeWrapper) {
    this.enzyme = enzymeWrapper;
  }

  get wrapper () {
    return this.enzyme;
  }

  hasClass(className) {
    return this.enzyme.hasClass(className);
  }

  classNames() {
    return this.enzyme.prop('className');
  }

  type() {
    return this.enzyme.type();
  }
}