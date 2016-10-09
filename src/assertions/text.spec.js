/* eslint-env mocha */
/* eslint-disable padded-blocks, no-unused-expressions, max-len, no-console */

import './text';
import { shallow, mount } from 'enzyme';
import React from 'react';

let wrapper;
const TextFixture = () => (
  <div className="special burger">Content here. More content</div>
);

describe('Should enzyme add check text', () => {
  const shouldEnzyme = should;
  it('should have new method text', () => {
    shouldEnzyme.should.have.property('containsText');
  });
  [shallow, mount].forEach(method => {
    context(method.name, () => {
      before(() => {
        wrapper = method(<TextFixture />);

      });
      it(`should contain text TextFixture`, () => {
        wrapper.should.containsText('Content here');
      });

      it(`should NOT contain text "pizza" in TextFixture`, () => {
        wrapper.should.not.containsText('pizza');
      });

      it(`assert should fail to see useful error message`, () => {
        (() => wrapper.should.containsText('pizza'))
        .should.throwError(/expected '(div|TextFixture)' to contain text 'pizza' but found 'Content here. More content'/);
      });

    });
  });
});
