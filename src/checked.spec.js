import WrapperBuilder from './wrapper';
import React from 'react';
import { eachEnzymeMethod } from '../test-setup/each-render-method';

const CheckedFixture = () => (
  <input type="checkbox" defaultChecked value="coffee" />
);

const NotCheckedFixture = () => (
  <input type="checkbox" value="coffee" />
);

describe('Checkbox', () => {
  eachEnzymeMethod(['shallow', 'mount', 'render'], (renderMethod, methodName) => {
    let checkedInput, notCheckedInput;
    before(() => {
      checkedInput = WrapperBuilder(renderMethod(<CheckedFixture />));
      notCheckedInput = WrapperBuilder(renderMethod(<NotCheckedFixture />));
    });

    context(methodName, () => {
      it('should be checked', () => {
        checkedInput.checked().should.be.true();
      });

      it('should NOT be checked', () => {
        notCheckedInput.checked().should.be.false();
      });
    });
  });
});
