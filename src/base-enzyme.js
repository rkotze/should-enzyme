
export default class BaseEnzyme {

  prop(key) {
    return this.enzyme.prop(key);
  }

  state(key) {
    if(typeof key !== 'undefined')
      return this.enzyme.state(key);
  }

  name() {
    return this.enzyme.name();
  }
  
  text() {
    return this.enzyme.text();
  }
}
