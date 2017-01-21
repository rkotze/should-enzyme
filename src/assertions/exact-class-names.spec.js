import './exact-class-names';
import { eachEnzymeMethod } from '../../test-setup/each-render-method';
import React from 'react';

const ClassNamesFixture = () => (
  <div className="special buffalo chicken burger">Content here</div>
);

describe('Should enzyme add check multiple class names', () => {
  const shouldEnzyme = should;

  it('should have new method classNames', () => {
    shouldEnzyme.should.have.property('exactClassNames');
  });

  eachEnzymeMethod(['shallow', 'mount', 'render'], (renderMethod, methodName) => {
    context(methodName, () => {
      let wrapper;

      before(() => {
        wrapper = renderMethod(<ClassNamesFixture />);
      });

      it('should have class names "special buffalo chicken burger" in ClassNamesFixture', () => {
        wrapper.should.have.exactClassNames('special buffalo chicken burger');
      });

      it('should NOT have class names "carrot pizza" in ClassNamesFixture', () => {
        wrapper.should.not.have.exactClassNames('carrot pizza');
      });

      it('assert should fail as "pizza" is not in the list of CSS classes', () => {
        (() => wrapper.should.have.exactClassNames('special buffalo chicken'))
        .should.throwError(/expected '(div|ClassNamesFixture)' to have classNames 'special buffalo chicken' but found 'special buffalo chicken burger'/);
      });

      it('assert should fail as "buffalo" is in the list of CSS classes', () => {
        (() => wrapper.should.not.have.exactClassNames('special buffalo chicken burger'))
        .should.throwError(/expected '(div|ClassNamesFixture)' not to have classNames 'special buffalo chicken burger' but found 'special buffalo chicken burger'/);
      });
    });
  });
});
