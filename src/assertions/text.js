import { assertionBuilder } from './assertion-builder';

assertionBuilder(
  'containsText',
  function(expectedString) {
    return this.text().includes(expectedString);
  },
  function(expected) {
    return `expected '${this.name()}' to contain text '${expected}' but found '${this.text()}'`;
  }
);
