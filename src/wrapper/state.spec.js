import WrapperBuilder from './index';
import React, { Component } from 'react';
import { eachEnzymeMethod } from '../../test-setup/each-render-method';

class StateFixture extends Component {
  constructor(){
    super();
    this.state = {
      bestFruit: 'mango'
    };
  }

  render(){
    return (
        <div id="best-mangos">
          {this.state.bestFruit}
        </div>
      );
  }
}

describe('Get state from component', () => {
  eachEnzymeMethod(['shallow', 'mount'], (renderMethod, methodName) => {
    let stateWrapper;
    before(() => {
      stateWrapper = WrapperBuilder(renderMethod(<StateFixture />));
    });

    context(methodName, () => {
      it('should get the state of "bestFruit"', () => {
        stateWrapper.state('bestFruit').should.equal('mango');
      });
    });
  });

  eachEnzymeMethod(['render'], (renderMethod, methodName) => {
    let stateWrapper;
    before(() => {
      stateWrapper = WrapperBuilder(renderMethod(<StateFixture />));
    });

    context(methodName, () => {
      it(`should throw error using state method and Enzyme render`, () => {
        stateWrapper.should.have.property('state');
        (() => stateWrapper.state('bestFruit'))
        .should.throwError('Enzyme static render method (Cheerio) does not support React state.');
      });
    });
  });

});
