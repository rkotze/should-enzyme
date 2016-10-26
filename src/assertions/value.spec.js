import './value';
import { eachEnzymeMethod } from '../../test-setup/each-render-method';
import React from 'react';

const FormInputsFixture = () => (
  <form>
    <input type="text" name="mug" defaultValue="coffee" />
    <select defaultValue="pizza">
      <option value="coffee">More coffee</option>
      <option value="pizza">Pizza</option>
      <option value="salad">Salad</option>
    </select>
    <textarea name="fruit" value="Hands or bunch of bananas?" />
  </form>
);

describe('Should enzyme have a way to extract input values', () => {
  const shouldEnzyme = should;
  it('should have new method value', () => {
    shouldEnzyme.should.have.property('value');
  });

  eachEnzymeMethod(['shallow', 'mount', 'render'], (renderMethod, methodName) => {
    context(methodName, () => {
      let wrapper;

      before(() => {
        wrapper = renderMethod(<FormInputsFixture />);
      });

      it('should have "coffee" in input text type value', () => {
        wrapper.find('input').should.have.value('coffee');
      });

      it('should have "pizza" value from select', () => {
        wrapper.find('select').should.have.value('pizza');
      });

      it('should have "Hands or bunch of bananas?" value from textarea', () => {
        wrapper.find('textarea').should.have.value('Hands or bunch of bananas?');
      });

      it(`assert should fail to see useful error message`, () => {
        (() => wrapper.find('select').should.have.value('salad'))
        .should.throwError(/expected 'select' to have text 'salad' but found 'pizza'/);
      });
    });
  });
});