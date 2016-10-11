import { assertionBuilder } from './assertion-builder';
import assertKeyValue from '../assert-key-value';

assertionBuilder(
  'prop', 
  function (expectedKey, expectedValue) {
    return assertKeyValue(this.prop(expectedKey), expectedValue);
  },
  function (expectedKey, expectedValue) {
    if(arguments.length === 2 && typeof this.prop(expectedKey) !== 'undefined')
      return `expected '${this.name()}' prop '${expectedKey}' to have value '${expectedValue}', instead found '${this.prop(expectedKey)}'`;

    return `expected '${this.name()}' to have prop '${expectedKey}'`;
  }
);