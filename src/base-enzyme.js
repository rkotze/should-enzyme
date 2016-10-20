
export default class BaseEnzyme {

  prop(key) {
    return this.enzyme.prop(key);
  }

  state(key) {
    return this.enzyme.state(key);
  }

  name() {
    return this.enzyme.name();
  }
  
  text() {
    return this.enzyme.text();
  }
}
