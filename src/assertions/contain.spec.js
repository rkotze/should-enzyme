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
  let wrapper;

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

      it('should see useful error message when Banana is expected but not found', () => {
        (() => wrapper.should.be.contain(<Banana />))
          .should.throwError(/^expected '(div|ContainNodesFixture)' to contain a '<Banana \/>'/);
      });

      it('should see useful error message when Apple name Bob is not expected but found', () => {
        (() => wrapper.should.not.contain(<Apple name="Bob" />))
          .should.throwError(/^expected '(div|ContainNodesFixture)' not to contain a '<Apple name="Bob" \/>'/);
      });

    });
  });

  eachEnzymeMethod(['render'], (renderMethod, methodName) => {
    context(methodName, () => {
      before(() => {
        wrapper = renderMethod(<ContainNodesFixture />);
      });

      it('should throw an error when using contains', () => {
        (() => wrapper.should.contain(<Apple name="Bob" />))
          .should.throwError();
      });
    });
  });
});
