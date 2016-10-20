import './text';
import { shallow, mount, render } from 'enzyme';
import React from 'react';

let wrapper;
const TextFixture = () => (
  <div className="special burger">Content here. More content</div>
);

describe('Should enzyme add containsText', () => {
  const shouldEnzyme = should;
  it('should have new method containText', () => {
    shouldEnzyme.should.have.property('containsText');
  });

  [shallow, mount, render].forEach(method => {
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

describe('Should enzyme add text', () => {
  const shouldEnzyme = should;
  it('should have new method text', () => {
    shouldEnzyme.should.have.property('text');
  });

  [shallow, mount, render].forEach(method => {
    context(method.name, () => {
      before(() => {
        wrapper = method(<TextFixture />);
      });

      it(`should contain text "Content here. More content" in TextFixture`, () => {
        wrapper.should.text('Content here. More content');
      });

      it(`should NOT have text "pizza" in TextFixture`, () => {
        wrapper.should.not.text('pizza');
      });

      it(`assert should fail when no exact text and show error message`, () => {
        (() => wrapper.should.text('pizza'))
        .should.throwError(/expected '(div|TextFixture)' to have exact text of 'pizza' but found 'Content here. More content'/);
      });

    });
  });
});
