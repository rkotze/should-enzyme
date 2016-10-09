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
  it('should have text TextFixture', () => {
    [shallow, mount].forEach(method => {
      const wrapper = method(<TextFixture />);
      wrapper.should.containsText('Content here');
    });
  });

  it('should NOT contain text "pizza" in TextFixture', () => {
    [shallow, mount].forEach(method => {
      const wrapper = method(<TextFixture />);
      wrapper.should.not.containsText('pizza');
    });
  });

  it('assert should fail to see useful error message', () => {
    [shallow, mount].forEach(method => {
      const wrapper = method(<TextFixture />);
      (() => wrapper.should.containsText('pizza'))
      .should.throwError(/expected '(div|TextFixture)' to have text 'pizza' but found 'Content here'/);
    });
  });
});
