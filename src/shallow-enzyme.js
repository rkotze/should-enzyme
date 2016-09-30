import BaseEnzyme from './base-enzyme';
import $ from 'cheerio';

export default class ShallowEnzyme extends BaseEnzyme {
  constructor(enzymeWrapper) {
    super();
    this.enzyme = enzymeWrapper;
  }

  get element() {
    if(!this.__element)
      this.__element = $(this.enzyme.html());
    
    return this.__element;
  }

  classNames() {
    return this.enzyme.prop('className');
  }

  hasClass(className) {
    return this.enzyme.hasClass(className);
  }

  attr(name) {
    return this.element.attr(name);
  }

}