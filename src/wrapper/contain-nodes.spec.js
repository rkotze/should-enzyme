import WrapperBuilder from './index';
import React from 'react';
import { eachEnzymeMethod } from '../../test-setup/each-render-method';

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

describe('When component is rendered', () => {
  eachEnzymeMethod(['shallow', 'mount'], (renderMethod, methodName) => {
    let containNodesWrapper;
    before(() => {
      containNodesWrapper = WrapperBuilder(renderMethod(<ContainNodesFixture />));
    });

    context(methodName, () => {
      it('should contain an Apple called Bob', () => {
        containNodesWrapper.containNodes(<Apple name="Bob" />).should.be.true();
      });

      it('should contain two apples called Jim and Bob', () => {
        containNodesWrapper.containNodes([
          <Apple name="Jim" key="1" />,
          <Apple name="Bob" key="2" />
        ]).should.be.true();
      });

      it('should not contain a Banana component', () => {
        containNodesWrapper.containNodes(<Banana />).should.be.false();
      });
      
    });
  });

  eachEnzymeMethod(['render'], (renderMethod, methodName) => {
    let containNodesWrapper;
    before(() => {
      containNodesWrapper = WrapperBuilder(renderMethod(<ContainNodesFixture />));
    });

    context(methodName, () => {
      it('should throw an error when checking for Apple', () => {
        (() => containNodesWrapper.containNodes(<Apple name="Bob" />))
        .should.throwError('Enzyme static render method (Cheerio) does not support "contain" check');
      });
    });
  });
});
