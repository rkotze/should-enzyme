import { assertionBuilder } from './assertion-builder';

assertionBuilder(
  'present',
  function (expected) {
    // return this.hasClass(expected);
  },
  function () {
    return `expected '${this.name()}' to present but it doesn't`;
  }
);
