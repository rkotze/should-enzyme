import { findDOMNode } from 'enzyme/build/react-compat';
import BaseEnzyme from './base-enzyme';

export default class ReactEnzyme extends BaseEnzyme {
  constructor(enzymeWrapper) {
    super();
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

  get element() {
    if(!this.__element)
      this.__element = this.enzyme.single((n) => findDOMNode(n));
    
    return this.__element;
  }

}