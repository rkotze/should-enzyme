import './class-names';
import { eachEnzymeMethod } from '../../test-setup/each-render-method';
import React from 'react';

const ClassNamesFixture = () => (
  <div className="special buffalo chicken burger">Content here</div>
);

describe('Should enzyme add check multiple class names', () => {
  const shouldEnzyme = should;

  it('should have new method classNames', () => {
    shouldEnzyme.should.have.property('classNames');
  });

  eachEnzymeMethod(['shallow', 'mount', 'render'], (renderMethod, methodName) => {
    context(methodName, () => {
      let wrapper;

      before(() => {
        wrapper = renderMethod(<ClassNamesFixture />);
      });

      it('should contain class names "special chicken" in ClassNamesFixture', () => {
        wrapper.should.have.classNames('special chicken');
      });

      it('should NOT contain class name "pizza" in ClassNamesFixture', () => {
        wrapper.should.not.have.classNames('special pizza');
      });

      it('assert should fail to see error message showing missing classes', () => {
        (() => wrapper.should.have.classNames('buffalo pizza'))
        .should.throwError(/expected '(div|ClassNamesFixture)' to contain classNames 'buffalo pizza' but found 'special buffalo chicken burger'/);
      });
    });
  });
});
