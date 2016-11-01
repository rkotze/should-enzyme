import { assertionBuilder } from './assertion-builder';

assertionBuilder(
  'present', 
  function () {
    return this.isPresent();
  },
  function () {
    return function(assertion){
      if(assertion.negate)
        return 'expected NOT to be present';

      return 'expected to be present';
    };
  }
);