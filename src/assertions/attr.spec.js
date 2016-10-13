import './attr';
import { eachEnzymeMethod } from '../../test-setup/each-render-method';
import React, { PropTypes } from 'react';

const AttrFixture = ({ children, title }) => (
  <div title={title}>content</div>
);

AttrFixture.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

describe('Should enzyme add attr feature', () => {
  const shouldEnzyme = should;
  let wrapper;

  it('should have new method attr', () => {
    shouldEnzyme.should.have.property('attr');
  });

  eachEnzymeMethod(['shallow', 'mount'], (renderMethod, methodName) => {
    context(methodName, () => {
      before(() => {
        wrapper = renderMethod(<AttrFixture title="enzyme" />);
      });

      it('should have attribute "title"', () => {
        wrapper.should.have.attr('title');
      });

      it('should have attribute "title" with value "enzyme"', () => {
        wrapper.should.have.attr('title', 'enzyme');
      });

      it('should NOT have attribute "pizza"', () => {
        wrapper.should.not.have.attr('pizza');
      });

      it('should have attribute "title" but NOT with value "stuff"', () => {
        wrapper.should.not.have.attr('title', 'stuff');
      });

      it('should see useful error message for missing pizza attribute', () => {
        (() => wrapper.should.have.attr('pizza'))
        .should.throwError(/expected '(div|AttrFixture)' to have attribute 'pizza'/);
      });

      it('should see useful error message for incorrect expected attribute value', () => {
        (() => wrapper.should.have.attr('title', 'stuff'))
        .should.throwError(/expected '(div|AttrFixture)' attribute 'title' to have value 'stuff', instead found 'enzyme'/);
      });

      it('should see useful error message for incorrect attribute', () => {
        (() => wrapper.should.have.attr('pizza', 'stuff'))
        .should.throwError(/expected '(div|AttrFixture)' to have attribute 'pizza'/);
      });
    });
  });
});
