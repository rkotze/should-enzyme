import './contain';
import { eachEnzymeMethod } from '../../test-setup/each-render-method';
import React from 'react';

const Banana = () => {
  return (<div>Banana</div>);
};

const Apple = (props) => {
  return (<div>Apple</div>);
};

const ContainNodesFixture = () => {
  return (<div>
      <Apple name="Jim" />
      <Apple name="Bob" />
    </div>);
};

describe('Contains a component inside of a parent', () => {
  const shouldEnzyme = should;
  let wrapper;

  it('should have new method contain', () => {
    shouldEnzyme.should.have.property('contain');
  });

  eachEnzymeMethod(['shallow', 'mount'], (renderMethod, methodName) => {
    context(methodName, () => {
      before(() => {
        wrapper = renderMethod(<ContainNodesFixture />);
      });

      it('should contain an Apple with name Bob', () => {
        wrapper.should.contain(<Apple name="Bob" />);
      });

      it('should NOT contain a Banana', () => {
        wrapper.should.not.be.contain(<Banana />);
      });

    });
  });
});
