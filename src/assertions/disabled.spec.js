import './disabled';
import { eachEnzymeMethod } from '../../test-setup/each-render-method';
import React from 'react';

const DisabledFixture = () => (
  <div>
    <input id="disabled" type="text" disabled value="coffee" />
    <input id="not-disabled" type="text" value="tea" />
  </div>
);

describe('Should enzyme add disabled feature', () => {
  let wrapper, disabled, notDisabled;

  eachEnzymeMethod(
    ['shallow', 'mount', 'render'],
    (renderMethod, methodName) => {
      context(methodName, () => {
        before(() => {
          wrapper = renderMethod(<DisabledFixture />);
          disabled = wrapper.find('#disabled');
          notDisabled = wrapper.find('#not-disabled');
        });

        it('should be disabled', () => {
          disabled.should.disabled();
        });

        it('should NOT be disabled', () => {
          notDisabled.should.not.be.disabled();
        });

        it('should see useful error message for input expected to be disabled', () => {
          (() => notDisabled.should.be.disabled()).should.throwError(
            /expected 'input' type 'text' to be 'disabled' but is 'enabled'/
          );
        });

        it('should see useful error message for input not expected to be disabled.', () => {
          (() => disabled.should.not.be.disabled()).should.throwError(
            /expected 'input' type 'text' to be 'endabled' but is 'disabled'/
          );
        });
      });
    }
  );
});
