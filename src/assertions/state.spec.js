import './state';
import { eachEnzymeMethod } from '../../test-setup/each-render-method';
import React, { Component } from 'react';

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

describe('Should enzyme add state', () => {
  const shouldEnzyme = should;
  let wrapper;

  it('should have new method state', () => {
    shouldEnzyme.should.have.property('state');
  });

  eachEnzymeMethod(['shallow', 'mount'], (renderMethod, methodName) => {
    context(methodName, () => {
      before(() => {
        wrapper = renderMethod(<StateFixture />);
      });

      it('should have state "bestFruit" in StateFixture', () => {
        wrapper.should.have.state('bestFruit');
      });

      it('should have state "bestFruit" with value "mango" in StateFixture', () => {
        wrapper.should.have.state('bestFruit', 'mango');
      });

      it('should NOT have state "pizza" property in StateFixture', () => {
        wrapper.should.not.have.state('pizza');
      });

      it('should have state "mango" but NOT with value "banana" in StateFixture', () => {
        wrapper.should.not.have.state('mango', 'banana');
      });

      it('should give a useful error message for missing salad state', () => {
        (() => wrapper.should.have.state('salad'))
        .should.throwError(/expected '(div|StateFixture)' to have state 'salad' property/);
      });

      it('should give a useful error message for "undefined" state value', () => {
        (() => wrapper.should.have.state('bestFruit', undefined))
        .should.throwError(/expected '(div|StateFixture)' state 'bestFruit' property to have value 'undefined', instead found 'mango'/);
      });

      it('should give a useful error message for incorrect expected state value', () => {
        (() => wrapper.should.have.state('bestFruit', 'banana'))
        .should.throwError(/expected '(div|StateFixture)' state 'bestFruit' property to have value 'banana', instead found 'mango'/);
      });

      it('should give a useful error message for incorrect state', () => {
        (() => wrapper.should.have.state('salad', 'stuff'))
        .should.throwError(/expected '(div|StateFixture)' to have state 'salad' property/);
      });

    });
  });

  eachEnzymeMethod(['render'], (renderMethod, methodName) => {
    context(methodName, () => {
      before(() => {
        wrapper = renderMethod(<StateFixture id="content" />);
      });

      it('should throw error when using state on enzyme render method', () => {
        (() => wrapper.should.have.state('bestFruit'))
        .should.throwError('Enzyme static render method (Cheerio) does not support React state.');
      });
    });
  });
});
