// import should from 'should';
import WrapperBuilder from './wrapper';
import { boolAssertBuilder } from './assertions/assertion-builder';

boolAssertBuilder('className', WrapperBuilder, (expected, wrapper) => {
  return `to have className '${expected}' but found '${wrapper.classNames()}'`;
}, 'hasClass');