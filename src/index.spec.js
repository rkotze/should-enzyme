import './index';
import { shallow } from 'enzyme';
import React from 'react';

const ClassNameFixture = () => (
  <div className="special">Content here</div>
);

describe('Should enzyme', () => {
  const shouldEnzyme = should;

  it('should have new method className', () => {
    shouldEnzyme.should.have.property('className');
  });

  it('should contain class name "special" in ClassNameFixture', () => {
    const wrapper = shallow(<ClassNameFixture />);
    wrapper.should.have.className('special');
  });

  it('should NOT contain class name "pizza" in ClassNameFixture', () => {
    const wrapper = shallow(<ClassNameFixture />);
    wrapper.should.not.have.className('pizza');
  });

  it('assert should fail to see useful error message', () => {
    const wrapper = shallow(<ClassNameFixture />);
    (() => wrapper.should.have.className('pizza'))
    .should.throwError(/expected 'div' to have className 'pizza' but got 'special'/);
  });
  
});
