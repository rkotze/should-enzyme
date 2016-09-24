import { ShallowWrapper, ReactWrapper } from 'enzyme';
import ShallowEnzyme from './shallow-enzyme';

function WrapperBuilder(wrapper) {
  if(wrapper instanceof ShallowWrapper)
    return new ShallowEnzyme(wrapper);

  if(wrapper instanceof ReactWrapper)
    return new ReactEnzyme(wrapper);

  throw new Error('Not a recognised Enzyme wrapper.');
}

function ReactEnzyme () { }

export {
  WrapperBuilder as default,
  ReactEnzyme
};