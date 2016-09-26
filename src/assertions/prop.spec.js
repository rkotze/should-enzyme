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

  it('should have new method prop', () => {
    shouldEnzyme.should.have.property('prop');
  });

  context('using ShallowWrapper', () => {
    let wrapper;

    before(() => {
      wrapper = shallow(<PropFixture id="content" />);
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
      .should.throwError(/expected 'div' to have prop 'pizza'/);
    });

    it('should fail to see useful error message for incorrect expected prop value', () => {
      (() => wrapper.should.have.prop('id', 'stuff'))
      .should.throwError(/expected 'div' prop 'id' to have value 'stuff', instead found 'content'/);
    });

    it('should fail to see useful error message for incorrect prop', () => {
      (() => wrapper.should.have.prop('pizza', 'stuff'))
      .should.throwError(/expected 'div' prop 'pizza' to have value 'stuff', instead found 'undefined'/);
    });
  });

  context('using ReactWrapper', () => {
    let wrapper;

    before(() => {
      wrapper = mount(<PropFixture someThing="content" />);
    });

    it('should have prop "someThing" in PropFixture', () => {
      wrapper.should.have.prop('someThing');
    });

  });

});
