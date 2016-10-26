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
    <div id="failSelect">What value?</div>
  </form>
);

describe('Should enzyme have a way to assert input values', () => {
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

      it('should NOT have "pizza" in input text type value', () => {
        wrapper.find('input').should.not.have.value('pizza');
      });

      it('should NOT have "coffee" value from select', () => {
        wrapper.find('select').should.not.have.value('coffee');
      });

      it('should NOT have "bunch of mangos?" value from textarea', () => {
        wrapper.find('textarea').should.not.have.value('bunch of mangos?');
      });

      it(`assert should fail to see useful error message for select element`, () => {
        (() => wrapper.find('select').should.have.value('salad'))
        .should.throwError(/expected 'select' to have value 'salad' but found 'pizza'/);
      });

      it(`assert should fail to see useful error message for input element`, () => {
        (() => wrapper.find('input').should.have.value('pizza'))
        .should.throwError(/expected 'input' to have value 'pizza' but found 'coffee'/);
      });

      it(`assert should fail when trying to get value when no value attribute`, () => {
        (() => wrapper.find('#failSelect').should.have.value('pizza'))
        .should.throwError(/element 'div' does not have a value/);
      });

    });
  });
});
