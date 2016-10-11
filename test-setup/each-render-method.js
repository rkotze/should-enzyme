import { shallow, mount } from 'enzyme';

export function eachRenderMethod(fn) {
  const methodNames = ['shallow', 'mount'];
  [shallow, mount].forEach((renderMethod, i) => {
    fn(renderMethod, methodNames[i]);
  });
}