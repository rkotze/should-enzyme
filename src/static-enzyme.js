import BaseEnzyme from './base-enzyme';
// import $ from 'cheerio';

export default class StaticEnzyme extends BaseEnzyme {
  constructor(enzymeWrapper) {
    super();
    this.enzyme = enzymeWrapper;
  }

  get element() {
    if(!this.__element) {
      if(this.enzyme.first()['0'].type === 'root') {
        this.__element = this.enzyme.children().first();
      } else {
        this.__element = this.enzyme.first();
      }
    }

    return this.__element;
  }

  name() {
    const node = this.element.get(0);
    return node ? node.name : false;
  }

  prop(name) {
    return this.element.prop(name);
  }

  classNames() {
    return this.element.prop('class');
  }

  hasClass(className) {
    return this.element.hasClass(className);
  }

  attr(name) {
    return this.element.attr(name);
  }

  checked() {
    return this.element.is(':checked');
  }

}
