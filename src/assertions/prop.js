import { boolAssertBuilder } from './assertion-builder';

boolAssertBuilder(
  'prop', 
  (args, wrapper) => {
    if(args.length === 2)
      return `prop '${args[0]}' to have value '${args[1]}', instead found '${wrapper.prop(args[0])}'`;

    return `to have prop '${args[0]}'`;
  }, 
  'hasProp'
);