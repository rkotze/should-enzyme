import WrapperBuilder from './index';
import React from 'react';
import { eachEnzymeMethod } from '../../test-setup/each-render-method';

const InputFixture = () => <input type="input" disabled value="coffee" />;

describe('Input', () => {
  eachEnzymeMethod(
    ['shallow', 'mount', 'render'],
    (renderMethod, methodName) => {
      let disabledInput;
      before(() => {
        disabledInput = WrapperBuilder(renderMethod(<InputFixture />));
      });

      context(methodName, () => {
        it('should be disabled', () => {
          disabledInput.isDisabled().should.be.true();
        });
      });
    }
  );
});
