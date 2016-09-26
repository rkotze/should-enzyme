import { boolAssertBuilder } from './assertion-builder';

boolAssertBuilder('prop', (expected) => {
  return `to have prop '${expected}'`;
});