import './prop';
import { eachEnzymeMethod } from '../../test-setup/each-render-method';
import React from 'react';
import PropTypes from 'prop-types';

const PropFixture = ({ children, id, myObj }) => (
  <div id={id} myObj={myObj}>content</div>
);

PropFixture.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  myObj: PropTypes.object
};

const fooMagic = {
  foo: 'bar',
  baz: { f: 'uzz' }
};

const expectedFooMagic = {
  foo: 'bar',
  baz: { f: 'uzz' }
};

describe('Should enzyme add prop', () => {
  const shouldEnzyme = should;
  let wrapper;

  it('should have new method prop', () => {
    shouldEnzyme.should.have.property('prop');
  });

  eachEnzymeMethod(['shallow', 'mount'], (renderMethod, methodName) => {
    context(methodName, () => {
      before(() => {
        wrapper = renderMethod(<PropFixture id="content" myObj={fooMagic} />);
      });

      it('should have prop "id" in PropFixture', () => {
        wrapper.should.have.prop('id');
      });

      it('should have prop "id" with value "content" in PropFixture', () => {
        wrapper.should.have.prop('id', 'content');
      });

      it('should have prop "myObj" with different instance but with same props of fooMagic object', () => {
        wrapper.should.have.prop('myObj', expectedFooMagic);
      });

      it('should NOT have prop "pizza" in PropFixture', () => {
        wrapper.should.not.have.prop('pizza');
      });

      it('should have prop "id" but NOT with value "stuff" in PropFixture', () => {
        wrapper.should.not.have.prop('id', 'stuff');
      });

      it('should give a useful error message for missing pizza prop', () => {
        (() => wrapper.should.have.prop('pizza'))
        .should.throwError(/expected '(div|PropFixture)' to have prop 'pizza'/);
      });

      it('should give a useful error message for "undefined" prop value', () => {
        (() => wrapper.should.have.prop('id', undefined))
        .should.throwError(/expected '(div|PropFixture)' prop 'id' to have value undefined, instead found 'content'/);
      });

      it('should give a useful error message for incorrect expected prop value', () => {
        (() => wrapper.should.have.prop('id', 'stuff'))
        .should.throwError(/expected '(div|PropFixture)' prop 'id' to have value 'stuff', instead found 'content'/);
      });

      it('should give a useful error message for incorrect expected prop object value', () => {
        (() => wrapper.should.have.prop('myObj', { foo: 'bazz' }))
        .should.throwError(/expected '(div|PropFixture)' prop 'myObj' to have value Object { foo: 'bazz' }, instead found Object { foo: 'bar', baz: Object { f: 'uzz' } }/);
      });

      it('should give a useful error message for incorrect prop', () => {
        (() => wrapper.should.have.prop('pizza', 'stuff'))
        .should.throwError(/expected '(div|PropFixture)' to have prop 'pizza'/);
      });
    });
  });

  eachEnzymeMethod(['render'], (renderMethod, methodName) => {
    context(methodName, () => {
      before(() => {
        wrapper = renderMethod(<PropFixture id="content" />);
      });

      it('should throw error when using prop on enzyme render method', () => {
        (() => wrapper.should.have.prop('id'))
        .should.throwError('Enzyme static render method (Cheerio) does not support React props.');
      });
    });
  });
});
