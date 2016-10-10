import { assertionBuilder } from './assertion-builder';

assertionBuilder(
  'className', 
  function (expected) {
    return this.hasClass(expected);
  },
  function (expected) {
    return `expected '${this.name()}' to have className '${expected}' but found '${this.classNames()}'`;
  }
);