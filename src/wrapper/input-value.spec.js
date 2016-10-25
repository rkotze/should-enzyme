import WrapperBuilder from './index';
import React from 'react';
import { eachEnzymeMethod } from '../../test-setup/each-render-method';

const InputsFixture = () => (
  <input type="text" name="mug" value="coffee" />
);

describe('Form inputs', () => {
  eachEnzymeMethod(['shallow', 'mount', 'render'], (renderMethod, methodName) => {
    let input;
    before(() => {
      input = WrapperBuilder(renderMethod(<InputsFixture />));
    });

    context(methodName, () => {
      it('should get value of "coffee"', () => {
        input.value().should.equal('coffee');
      });
    });
  });
});
