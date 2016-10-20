import { assertionBuilder } from './assertion-builder';
import assertKeyValue from '../assert-key-value';

assertionBuilder(
  'state', 
  function (expectedKey, expectedValue) {
    return assertKeyValue(this.state(expectedKey), expectedValue);
  },
  function (expectedKey, expectedValue) {
    if(arguments.length === 2 && typeof this.state(expectedKey) !== 'undefined')
      return `expected '${this.name()}' state '${expectedKey}' property to have value '${expectedValue}', instead found '${this.state(expectedKey)}'`;

    return `expected '${this.name()}' to have state '${expectedKey}' property`;
  }
);