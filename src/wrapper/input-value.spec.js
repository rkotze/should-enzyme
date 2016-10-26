import WrapperBuilder from './index';
import React from 'react';
import { eachEnzymeMethod } from '../../test-setup/each-render-method';

// Info on forms elements in react:
// https://facebook.github.io/react/docs/forms.html
const InputsFixture = () => (
  <input type="text" name="mug" defaultValue="coffee" />
);

const SelectFixture = () => (
  <select value="pizza">
    <option value="coffee">More coffee</option>
    <option value="pizza">Pizza</option>
    <option value="salad">Salad</option>
  </select>
);

// In a world where we have value and defaultValue, 
// it is ambiguous what role children play. 
// For this reason, you should not use children when setting <textarea> value
const TextareaFixture = () => (
  <textarea name="fruit" value="Hands or bunch of bananas?" />
);

const NoInputFixture = () => (
  <div>I don't have a value.</div>
);

describe('Form inputs', () => {
  eachEnzymeMethod(['shallow', 'mount', 'render'], (renderMethod, methodName) => {
    let input, select, textarea;
    before(() => {
      input = WrapperBuilder(renderMethod(<InputsFixture />));
      select = WrapperBuilder(renderMethod(<SelectFixture />));
      textarea = WrapperBuilder(renderMethod(<TextareaFixture />));
    });

    context(methodName, () => {
      it('should get value of "coffee"', () => {
        input.value().should.equal('coffee');
      });

      it('should get selected value of "pizza" in select list', () => {
        select.value().should.equal('pizza');
      });

      it('should get textarea value "Hands or bunch of bananas?"', () => {
        textarea.value().should.equal('Hands or bunch of bananas?');
      });

      it('should return "undefined" if value attribute', () => {
        const noInput = WrapperBuilder(renderMethod(<NoInputFixture />));
        (noInput.value() === undefined).should.be.true();
      });
    });
  });
});
