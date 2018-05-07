import './checked';
import { eachEnzymeMethod } from '../../test-setup/each-render-method';
import React from 'react';

const CheckedFixture = () => (
  <div>
    <input id="checked" type="checkbox" defaultChecked value="coffee" />
    <input id="not-checked" type="checkbox" value="coffee" />
  </div>
);

describe('Should enzyme add checked feature', () => {
  let wrapper, checked, notChecked;

  eachEnzymeMethod(['shallow', 'mount', 'render'], (renderMethod, methodName) => {
    context(methodName, () => {
      before(() => {
        wrapper = renderMethod(<CheckedFixture />);
        checked = wrapper.find('#checked');
        notChecked = wrapper.find('#not-checked');
      });

      it('should be "checked"', () => {
        checked.should.checked();
      });

      it('should NOT be checked', () => {
        notChecked.should.not.be.checked();
      });

      it('should see useful error message for checkbox expected to be checked', () => {
        (() => notChecked.should.be.checked())
          .should.throwError(/expected 'input' type 'checkbox' to be 'checked' but got 'false'/);
      });

      it('should see useful error message for checkbox not expected to be checked.', () => {
        (() => checked.should.not.be.checked())
          .should.throwError(/expected 'input' type 'checkbox' to not be 'checked' but got 'true'/);
      });
    });
  });
});
