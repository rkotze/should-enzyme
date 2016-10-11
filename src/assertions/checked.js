import { assertionBuilder } from './assertion-builder';

assertionBuilder(
  'checked', 
  function () {
    return this.checked();
  },
  function (expected) {
    const checked = this.checked();
    if(checked)
      return `expected '${this.name()}' type 'checkbox' to not be 'checked' but got '${checked}'`;
      
    return `expected '${this.name()}' type 'checkbox' to be 'checked' but got '${checked}'`;
  }
);