import { boolAssertBuilder } from './assertion-builder';

boolAssertBuilder(
  'checked',
  (_, wrapper) => {
    var checked = wrapper.checked();
    if(checked)
      return `expected '${wrapper.name()}' type 'checkbox' to not be 'checked' but got '${wrapper.checked()}'`;
      
    return `expected '${wrapper.name()}' type 'checkbox' to be 'checked' but got '${wrapper.checked()}'`;

  }
);