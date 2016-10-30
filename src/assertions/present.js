import { assertionBuilder } from './assertion-builder';

assertionBuilder(
  'present', 
  function () {
    return this.isPresent();
  },
  function () {
      return 'expected to be present';
  }
);