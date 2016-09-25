import BaseEnzyme from './base-enzyme';

export default class ShallowEnzyme extends BaseEnzyme {
  constructor(enzymeWrapper) {
    super();
    this.enzyme = enzymeWrapper;
  }

  get wrapper () {
    return this.enzyme;
  }

}