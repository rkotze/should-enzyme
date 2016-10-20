import { assertionBuilder } from './assertion-builder';

assertionBuilder(
  'containsText',
  function(expected) {
    return this.text().includes(expected);
  },
  function(expected) {
    return `expected '${this.name()}' to contain text '${expected}' but found '${this.text()}'`;
  }
);

assertionBuilder(
  'text',
  function(expected) {
    return String(this.text()) === expected;
  },
  function(expected) {
    return `expected '${this.name()}' to have exact text of '${expected}' but found '${this.text()}'`;
  }
);
