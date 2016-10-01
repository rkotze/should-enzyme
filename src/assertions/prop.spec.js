import './prop';
import { shallow, mount } from 'enzyme';
import React, { PropTypes } from 'react';

const PropFixture = ({ children, id }) => (
  <div id={id}>content</div>
);

PropFixture.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string
};

describe('Should enzyme add prop', () => {
  const shouldEnzyme = should;
  let wrapper;

  it('should have new method prop', () => {
    shouldEnzyme.should.have.property('prop');
  });

  const renderName = ['shallow', 'mount'];
  [shallow, mount].forEach((renderMethod, i) => {
    context(renderName[i], () => {
      before(() => {
        wrapper = renderMethod(<PropFixture id="content" />);
      });

      it('should have prop "id" in PropFixture', () => {
        wrapper.should.have.prop('id');
      });

      it('should have prop "id" with value "content" in PropFixture', () => {
        wrapper.should.have.prop('id', 'content');
      });

      it('should NOT have prop "pizza" in PropFixture', () => {
        wrapper.should.not.have.prop('pizza');
      });

      it('should have prop "id" but NOT with value "stuff" in PropFixture', () => {
        wrapper.should.not.have.prop('id', 'stuff');
      });

      it('should fail to see useful error message for missing pizza prop', () => {
        (() => wrapper.should.have.prop('pizza'))
        .should.throwError(/expected '(div|PropFixture)' to have prop 'pizza'/);
      });

      it('should fail to see useful error message for incorrect expected prop value', () => {
        (() => wrapper.should.have.prop('id', 'stuff'))
        .should.throwError(/expected '(div|PropFixture)' prop 'id' to have value 'stuff', instead found 'content'/);
      });

      it('should fail to see useful error message for incorrect prop', () => {
        (() => wrapper.should.have.prop('pizza', 'stuff'))
        .should.throwError(/expected '(div|PropFixture)' prop 'pizza' to have value 'stuff', instead found 'undefined'/);
      });
    });
  });
});
