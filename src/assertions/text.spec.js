/* eslint-env mocha */
/* eslint-disable padded-blocks, no-unused-expressions, max-len, no-console */

import './text';
import { shallow, mount } from 'enzyme';
import React from 'react';

const TextFixture = () => (
  <div className="special burger">Content here</div>
);

describe('Should enzyme add check text', () => {
  const shouldEnzyme = should;
  it('should have new method text', () => {
    shouldEnzyme.should.have.property('containsText');
  });
  [shallow, mount].forEach(method => {
    it(`should have text TextFixture using ${method.name}`, () => {
      const wrapper = method(<TextFixture />);
      wrapper.should.containsText('Content here');
    });
  });

  [shallow, mount].forEach(method => {
    it(`should NOT contain text "pizza" in TextFixture using ${method.name}`, () => {
      const wrapper = method(<TextFixture />);
      wrapper.should.not.containsText('pizza');
    });
  });

  [shallow, mount].forEach(method => {
    it(`assert should fail to see useful error message using ${method.name}`, () => {
      const wrapper = method(<TextFixture />);
      (() => wrapper.should.containsText('pizza'))
      .should.throwError(/expected '(div|TextFixture)' to have text 'pizza' but found 'Content here'/);
    });
  });
});
