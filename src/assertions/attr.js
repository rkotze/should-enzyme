import { boolAssertBuilder } from './assertion-builder';

boolAssertBuilder(
  'attr', 
  (args, wrapper) => {
    if(args.length === 2)
      return `attribute '${args[0]}' to have value '${args[1]}', instead found '${wrapper.prop(args[0])}'`;

    return `to have attribute '${args[0]}'`;
  }, 
  'hasAttr'
);