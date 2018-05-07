export default class BaseEnzyme {
  prop(key) {
    return this.enzyme.prop(key);
  }

  props(keys) {
    const props = this.enzyme.props();

    if (Array.isArray(keys)) {
      return keys.reduce(function(acc, key) {
        if (key in props) acc[key] = props[key];
        return acc;
      }, {});
    }

    return props;
  }

  state(key) {
    if (typeof key !== 'undefined') return this.enzyme.state(key);
  }

  name() {
    return this.enzyme.name();
  }

  text() {
    return this.enzyme.text();
  }

  value() {
    if (['select', 'textarea'].indexOf(this.name()) > -1)
      return this.element.val();

    return this.element.attr('value');
  }

  isPresent() {
    return this.enzyme.length > 0;
  }

  containNodes(node) {
    return this.enzyme.contains(node);
  }
}
