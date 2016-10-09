import { boolAssertBuilder } from './assertion-builder';

boolAssertBuilder(
  'attr', 
  (args, wrapper) => {
    if(args.length === 2 && typeof wrapper.attr(args[0]) !== 'undefined')
      return `expected '${wrapper.name()}' attribute '${args[0]}' to have value '${args[1]}', instead found '${wrapper.attr(args[0])}'`;

    return `expected '${wrapper.name()}' to have attribute '${args[0]}'`;
  }, 
  'hasAttr'
);