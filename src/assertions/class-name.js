import { boolAssertBuilder } from './assertion-builder';

boolAssertBuilder('className', (expected, wrapper) => {
  return `to have className '${expected[0]}' but found '${wrapper.classNames()}'`;
}, 'hasClass');