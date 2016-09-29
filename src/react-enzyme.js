import { findDOMNode } from 'enzyme/build/react-compat';
import BaseEnzyme from './base-enzyme';

export default class ReactEnzyme extends BaseEnzyme {
  constructor(enzymeWrapper) {
    super();
    this.enzyme = enzymeWrapper;
  }

  get element() {
    if(!this.__element)
      this.__element = this.enzyme.single((n) => findDOMNode(n));
    
    return this.__element;
  }

  classNames() {
    return this.element.className;
  }

  hasClass(className) {
    const classNameList = this.classNames().split(' ');
    return classNameList.indexOf(className) > -1;
  }

}