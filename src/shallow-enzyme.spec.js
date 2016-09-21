import ShallowEnzyme from './shallow-enzyme';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

const Fixture = () => (
  <div>Content here</div>
);

describe('Shallow enzyme wrapper', () => {

  it('should have a public prop of enzyme and instance of WhallowWrapper', () => {
    let wrapper = shallow(<Fixture />);

    const shallowWrapper = new ShallowEnzyme(wrapper);
    shallowWrapper.should.have.property('enzyme');
    shallowWrapper.enzyme.should.be.instanceOf(ShallowWrapper);
  });

});
