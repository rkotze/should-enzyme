import './checked';
import { shallow, mount } from 'enzyme';
import React from 'react';

const CheckedFixture = () => (
  <div>
    <input id="checked" type="checkbox" defaultChecked value="coffee" />
    <input id="not-checked" type="checkbox" value="coffee" />
  </div>
);

describe('Should enzyme add checked feature', () => {
  const shouldEnzyme = should;
  let wrapper, checked, notChecked;

  it('should have new method checked', () => {
    shouldEnzyme.should.have.property('checked');
  });

  const renderName = ['shallow', 'mount'];
  [shallow, mount].forEach((renderMethod, i) => {

    context(renderName[i], () => {
      before(() => {
        wrapper = renderMethod(<CheckedFixture />);
        checked = wrapper.find('#checked');
        notChecked = wrapper.find('#not-checked');
      });

      it('should be "checked"', () => {
        checked.should.checked();
      });

      it('should NOT have attribute "pizza"', () => {
        notChecked.should.not.be.checked();
      });

      it('should see useful error message for checkbox not checked', () => {
        (() => notChecked.should.be.checked())
        .should.throwError(/expected 'input' type 'checkbox' to be 'checked' but got 'false'/);
      });

    });
  });
});