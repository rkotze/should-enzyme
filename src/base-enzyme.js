
export default class BaseEnzyme {

  prop(key) {
    return this.enzyme.prop(key);
  }

  name() {
    return this.enzyme.name();
  }
  containsText(string) {
    return this.enzyme.text().includes(string);
  }
  text() {
    return this.enzyme.text();
  }
}
