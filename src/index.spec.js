import './index';
import { shallow, mount } from 'enzyme';
import React from 'react';

const ClassNameFixture = () => (
  <div className="special burger">Content here</div>
);

describe('Should enzyme add check hasClass', () => {
  const shouldEnzyme = should;

  context('using ShallowWrapper', () => {
    let wrapper;

    before(() => {
      wrapper = shallow(<ClassNameFixture />);
    });

    it('should have new method className', () => {
      shouldEnzyme.should.have.property('className');
    });

    it('should contain class name "special" in ClassNameFixture', () => {
      wrapper.should.have.className('special');
    });

    it('should NOT contain class name "pizza" in ClassNameFixture', () => {
      wrapper.should.not.have.className('pizza');
    });

    it('assert should fail to see useful error message', () => {
      (() => wrapper.should.have.className('pizza'))
      .should.throwError(/expected 'div' to have className 'pizza' but found 'special burger'/);
    });
  });

  context('using ReactWrapper', () => {
    let wrapper;

    before(() => {
      wrapper = mount(<ClassNameFixture />);
    });

    it('should contain class name "special" in ClassNameFixture wrapping div', () => {
      wrapper.find('div').should.have.className('special');
    });
  });

});
