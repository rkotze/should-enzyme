import { findDOMNode } from 'enzyme/build/react-compat';

export default class ReactEnzyme {
  constructor(enzymeWrapper) {
    this.enzyme = enzymeWrapper;
    this.toReactWrapper = this.enzyme.wrap.bind(this.enzyme);
  }

  get wrapper () {
    if(!this.__wrapper)
      this.__wrapper = this.toReactWrapper(
        this.enzyme.single((n) => findDOMNode(n))
      );

    return this.__wrapper;
  }

  hasClass(className) {
    return this.wrapper.hasClass(className);
  }

  classNames() {
    return this.wrapper.prop('className');
  }
}