import './props';
import { eachEnzymeMethod } from '../../test-setup/each-render-method';
import React, { PropTypes } from 'react';

const PropsFixture = ({ children, id, title, total }) => (
  <div id={id} title={title} total={total}>content</div>
);

PropsFixture.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  title: PropTypes.string,
  total: PropTypes.number
};

describe('Should enzyme add props', () => {
  const shouldEnzyme = should;
  let wrapper;

  it('should have new method props', () => {
    shouldEnzyme.should.have.property('props');
  });

  eachEnzymeMethod(['shallow', 'mount'], (renderMethod, methodName) => {
    context(methodName, () => {
      before(() => {
        wrapper = renderMethod(<PropsFixture id="content" title="superfood" total={24} />);
      });

      it('should have prop "id" with value "content" in PropsFixture', () => {
        wrapper.should.have.props({'id': 'content'});
      });

      it('should have multiple props "id", "title" and "total" in PropsFixture', () => {
        wrapper.should.have.props({'id': 'content', 'title': 'superfood', total: 24});
      });

      it('should NOT have prop "food = pizza" in PropsFixture', () => {
        wrapper.should.not.have.props({food: 'pizza'});
      });

      it('should have prop "id" but NOT with value "stuff" in PropsFixture', () => {
        wrapper.should.not.have.props({'id': 'stuff'});
      });

      it('should error with a useful error message for missing "food = pizza" prop', () => {
        (() => wrapper.should.have.props({food: 'pizza'}))
        .should.throwError(/expected '(div|PropsFixture)' to have props { food: 'pizza' } but found props {}/);
      });

      it('should error with a useful error message for partial missing props of "food = pizza"', () => {
        (() => wrapper.should.have.props({ food: 'pizza', id: 'content' }))
        .should.throwError(/expected '(div|PropsFixture)' to have props { food: 'pizza', id: 'content' } but found props { id: 'content' }/);
      });

      it('should error with a useful error message for incorrect prop value "no content"', () => {
        (() => wrapper.should.have.props({ 'id': 'no content' }))
        .should.throwError(/expected '(div|PropsFixture)' to have props { id: 'no content' } but found props { id: 'content' }/);
      });

      it('should error if no key value object is passed in', () => {
        (() => wrapper.should.have.props())
        .should.throwError(/An object needs to be passed in to assert props/);
      });
    });
  });

  eachEnzymeMethod(['render'], (renderMethod, methodName) => {
    context(methodName, () => {
      before(() => {
        wrapper = renderMethod(<PropsFixture id="content" />);
      });

      it('should throw error when using props on enzyme render method', () => {
        (() => wrapper.should.have.props({'id': 'content'}))
        .should.throwError('Enzyme static render method (Cheerio) does not support React props.');
      });
    });
  });
});
