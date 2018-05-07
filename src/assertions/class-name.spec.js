import './class-name';
import { eachEnzymeMethod } from '../../test-setup/each-render-method';
import React from 'react';

const ClassNameFixture = () => (
  <div className="special burger">Content here</div>
);

describe('Should enzyme add check hasClass', () => {

  eachEnzymeMethod(['shallow', 'mount', 'render'], (renderMethod, methodName) => {
    context(methodName, () => {
      let wrapper;

      before(() => {
        wrapper = renderMethod(<ClassNameFixture />);
      });

      it('should contain class name "special" in ClassNameFixture', () => {
        wrapper.should.have.className('special');
      });

      it('should NOT contain class name "pizza" in ClassNameFixture', () => {
        wrapper.should.not.have.className('pizza');
      });

      it('assert should fail to see useful error message', () => {
        (() => wrapper.should.have.className('pizza'))
          .should.throwError(/expected '(div|ClassNameFixture)' to have className 'pizza' but found 'special burger'/);
      });
    });
  });
});
