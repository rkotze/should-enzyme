import {ShallowWrapper, ReactWrapper} from 'enzyme';

function WrapperBuilder(wrapper) {
  if(wrapper instanceof ShallowWrapper)
    return new ShallowEnzyme(wrapper);

  if(wrapper instanceof ReactWrapper)
    return new ReactEnzyme(wrapper);

  throw new Error('Not a recognised Enzyme wrapper.');
}

function ShallowEnzyme() { }

function ReactEnzyme () { }

export {
  WrapperBuilder as default,
  ShallowEnzyme,
  ReactEnzyme
};