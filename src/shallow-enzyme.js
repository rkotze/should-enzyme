export default class ShallowEnzyme {
  constructor(enzymeWrapper) {
    this.enzyme = enzymeWrapper;
  }

  hasClass(className){
    return this.enzyme.hasClass(className);
  }
}