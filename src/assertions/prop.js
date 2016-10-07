import { boolAssertBuilder } from './assertion-builder';

boolAssertBuilder(
  'prop', 
  (args, wrapper) => {
    if(args.length === 2 && typeof wrapper.prop(args[0]) !== 'undefined')
      return `expected '${wrapper.name()}' prop '${args[0]}' to have value '${args[1]}', instead found '${wrapper.prop(args[0])}'`;

    return `expected '${wrapper.name()}' to have prop '${args[0]}'`;
  }, 
  'hasProp'
);