import './props';
import { eachEnzymeMethod } from '../../test-setup/each-render-method';
import React, { PropTypes } from 'react';

const PropsFixture = ({ children, id,  }) => (
  <div id={id}>content</div>
);

PropsFixture.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  title: PropTypes.string,
  sum: PropTypes.number
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
        wrapper = renderMethod(<PropsFixture id="content" />);
      });

      it('should have prop "id" with value "content" in PropsFixture', () => {
        wrapper.should.have.props({'id': 'content'});
      });

      // it('should NOT have prop "pizza" in PropsFixture', () => {
      //   wrapper.should.not.have.prop('pizza');
      // });

      // it('should have prop "id" but NOT with value "stuff" in PropsFixture', () => {
      //   wrapper.should.not.have.prop('id', 'stuff');
      // });

      // it('should error with a useful error message for missing pizza prop', () => {
      //   (() => wrapper.should.have.prop('pizza'))
      //   .should.throwError(/expected '(div|PropsFixture)' to have prop 'pizza'/);
      // });

      // it('should error with a useful error message for incorrect expected prop value', () => {
      //   (() => wrapper.should.have.prop('id', 'stuff'))
      //   .should.throwError(/expected '(div|PropsFixture)' prop 'id' to have value 'stuff', instead found 'content'/);
      // });

      // it('should error with a useful error message for incorrect prop', () => {
      //   (() => wrapper.should.have.prop('pizza', 'stuff'))
      //   .should.throwError(/expected '(div|PropsFixture)' to have prop 'pizza'/);
      // });
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
