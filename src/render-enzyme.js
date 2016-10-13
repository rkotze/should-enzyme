import BaseEnzyme from './base-enzyme';

export default class RenderEnzyme extends BaseEnzyme {
  constructor(enzymeWrapper) {
    super();
    this.enzyme = enzymeWrapper;
  }
  
}