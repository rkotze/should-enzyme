import { assertionBuilder } from './assertion-builder';

assertionBuilder(
  'value',
  function(expected) {
    return String(this.value()) === expected;
  },
  function(expected) {
    if (typeof this.value() !== 'undefined')
      return `expected '${this.name()}' to have value '${expected}' but found '${this.value()}'`;

    return `element '${this.name()}' does not have a value`;
  }
);
