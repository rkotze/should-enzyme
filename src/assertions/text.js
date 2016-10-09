import { boolAssertBuilder } from './assertion-builder';

boolAssertBuilder('containsText',
  (args, wrapper) => {
    return `expected '${wrapper.name()}' to contain text '${args[0]}' but found '${wrapper.text()}'`;
});
