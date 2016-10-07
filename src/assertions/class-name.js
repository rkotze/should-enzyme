import { boolAssertBuilder } from './assertion-builder';

boolAssertBuilder(
  'className', 
  (args, wrapper) => {
    return `expected '${wrapper.name()}' to have className '${args[0]}' but found '${wrapper.classNames()}'`;
  }, 
  'hasClass'
);