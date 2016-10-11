import { assertionBuilder } from './assertion-builder';
import assertKeyValue from '../assert-key-value';

assertionBuilder(
  'attr', 
  function (expectedKey, expectedValue) {
    return assertKeyValue(this.attr(expectedKey), expectedValue);
  },
  function (expectedKey, expectedValue) {
    if(arguments.length === 2 && typeof this.attr(expectedKey) !== 'undefined')
      return `expected '${this.name()}' attribute '${expectedKey}' to have value '${expectedValue}', instead found '${this.attr(expectedKey)}'`;

    return `expected '${this.name()}' to have attribute '${expectedKey}'`;
  }
);