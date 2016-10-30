
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

  value() {
    if(['select', 'textarea'].indexOf(this.name()) > -1)
      return this.element.val();
    
    return this.element.attr('value');
  }

  isPresent() {
    return this.enzyme.length > 0;
  }
}
