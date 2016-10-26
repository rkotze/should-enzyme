import { assertionBuilder } from './assertion-builder';

assertionBuilder(
  'value',
  function(expected) {
    return String(this.value()) === expected;
  },
  function(expected) {
    return `expected '${this.name()}' to have text '${expected}' but found '${this.value()}'`; 
  }
);
