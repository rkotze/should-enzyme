import WrapperBuilder from './index';
import React from 'react';
import { eachEnzymeMethod } from '../../test-setup/each-render-method';

const InputsFixture = () => (
  <input type="text" name="mug" value="coffee" />
);

const SelectFixture = () => (
  <select value="pizza">
    <option value="coffee">More coffee</option>
    <option value="pizza">Pizza</option>
    <option value="salad">Salad</option>
  </select>
);

describe('Form inputs', () => {
  eachEnzymeMethod(['shallow', 'mount', 'render'], (renderMethod, methodName) => {
    let input, select;
    before(() => {
      input = WrapperBuilder(renderMethod(<InputsFixture />));
      select = WrapperBuilder(renderMethod(<SelectFixture />));
    });

    context(methodName, () => {
      it('should get value of "coffee"', () => {
        input.value().should.equal('coffee');
      });

      it('should get selected value of "pizza" in select list', () => {
        select.value().should.equal('pizza');
      });
    });
  });
});
