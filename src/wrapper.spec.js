import WrapperBuilder, { ShallowEnzyme, ReactEnzyme } from './wrapper';
import { shallow, mount } from 'enzyme';
import React from 'react';

const Fixture = () => (
  <div>Content here</div>
);

describe('Need a custom test wrapper based on Enzyme wrapper type', () => {

  it('should return a ShallowEnzyme', () => {
    let wrapper;
    wrapper = shallow(<Fixture />);

    WrapperBuilder(wrapper).should.be.instanceOf(ShallowEnzyme);
  });

  it('should return a ReactEnzyme', () => {
    let wrapper;
    wrapper = mount(<Fixture />);

    WrapperBuilder(wrapper).should.be.instanceOf(ReactEnzyme);
  });
});
