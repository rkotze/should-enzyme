import { boolAssertBuilder } from './assertion-builder';

boolAssertBuilder(
  'checked',
  (_, wrapper) => {
    return `type 'checkbox' to be 'checked' but got '${wrapper.checked()}'`;
  }
);