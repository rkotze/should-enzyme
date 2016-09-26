import { boolAssertBuilder } from './assertion-builder';

boolAssertBuilder('className', (args, wrapper) => {
  return `to have className '${args[0]}' but found '${wrapper.classNames()}'`;
}, 'hasClass');