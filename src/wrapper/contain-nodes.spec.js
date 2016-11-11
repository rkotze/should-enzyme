import WrapperBuilder from './index';
import React from 'react';
import { eachEnzymeMethod } from '../../test-setup/each-render-method';

const Apple = (props) => {
  return (<div>Apple</div>);
};

const ContainNodesFixture = () => {
  return (<div>
      <Apple name="Jim" />
      <Apple name="Bob" />
    </div>);
};

describe('When component is rendered', () => {
  eachEnzymeMethod(['shallow', 'mount'], (renderMethod, methodName) => {
    let containNodesWrapper;
    before(() => {
      containNodesWrapper = WrapperBuilder(renderMethod(<ContainNodesFixture />));
    });

    context(methodName, () => {
      it('should contain an Apple called Bob', () => {
        containNodesWrapper.containNodes(<Apple name="Jim" />).should.be.true();
      });
    });
  });
});
