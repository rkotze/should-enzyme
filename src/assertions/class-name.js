import { boolAssertBuilder } from './assertion-builder';

boolAssertBuilder('className', (expected, wrapper) => {
  return `to have className '${expected}' but found '${wrapper.classNames()}'`;
}, 'hasClass');