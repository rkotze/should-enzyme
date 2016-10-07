import WrapperBuilder from './wrapper';
import { shallow, mount } from 'enzyme';
import React from 'react';

const CheckedFixture = () => (
  <input type="checkbox" defaultChecked value="coffee" />
);

const NotCheckedFixture = () => (
  <input type="checkbox" value="coffee" />
);

describe('Checkbox', () => {
  const methodNames = ['shallow', 'mount'];
  [shallow, mount].forEach((renderMethod, i) => {
    let checkedInput, notCheckedInput;
    before(() => {
      checkedInput = WrapperBuilder(renderMethod(<CheckedFixture />));
      notCheckedInput = WrapperBuilder(renderMethod(<NotCheckedFixture />));
    });

    context(methodNames[i], () => {
      it(`should be checked`, () => {
        checkedInput.checked().should.be.true();
      });

      it(`should NOT be checked`, () => {
        notCheckedInput.checked().should.be.false();
      });
    });

  });
});