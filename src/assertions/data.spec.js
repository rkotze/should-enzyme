import './data';
import { eachEnzymeMethod } from '../../test-setup/each-render-method';
import React from 'react';
import PropTypes from 'prop-types';

const DataFixture = ({ children, tr }) => (
  <div data-tr={tr} data-id="special-id">content</div>
);

DataFixture.propTypes = {
  children: PropTypes.node,
  tr: PropTypes.string
};

describe('Should enzyme add data feature', () => {
  const shouldEnzyme = should;
  let wrapper;

  it('should have new method data', () => {
    shouldEnzyme.should.have.property('data');
  });

  eachEnzymeMethod(['shallow', 'mount', 'render'], (renderMethod, methodName) => {
    context(methodName, () => {
      before(() => {
        wrapper = renderMethod(<DataFixture tr="enzyme" />);
      });

      it('should have data attribute "data-tr"', () => {
        wrapper.should.have.data('tr');
      });

      it('should have data attribute "data-tr" with value "enzyme"', () => {
        wrapper.should.have.data('tr', 'enzyme');
      });

      it('should NOT have data attribute "pizza"', () => {
        wrapper.should.not.have.data('pizza');
      });

      it('should have data attribute "data-tr" but NOT with value "stuff"', () => {
        wrapper.should.not.have.data('tr', 'stuff');
      });

      it('should see useful error message for missing pizza data attribute', () => {
        (() => wrapper.should.have.data('pizza'))
        .should.throwError(/expected '(div|DataFixture)' to have attribute 'data-pizza'/);
      });

      it('should see useful error message for incorrect expected data attribute value', () => {
        (() => wrapper.should.have.data('tr', 'stuff'))
        .should.throwError(/expected '(div|DataFixture)' attribute 'data-tr' to have value 'stuff', instead found 'enzyme'/);
      });

      it('should see useful error message for incorrect data attribute', () => {
        (() => wrapper.should.have.data('pizza', 'stuff'))
        .should.throwError(/expected '(div|DataFixture)' to have attribute 'data-pizza'/);
      });
    });
  });
});
