import BaseEnzyme from './base-enzyme';
import $ from 'cheerio';

export default class ShallowEnzyme extends BaseEnzyme {
  constructor(enzymeWrapper) {
    super();
    this.enzyme = enzymeWrapper;
  }

  get wrapper () {
    return this.enzyme;
  }

  get element() {
    if(!this.__element)
      this.__element = $(this.enzyme.html());

    console.log(this.__element);
    return this.__element;
  }

}