import {ShallowWrapper, ReactWrapper} from 'enzyme';

function WrapperBuilder(wrapper) {
  if(wrapper instanceof ShallowWrapper)
    return new ShallowEnzyme(wrapper);

  if(wrapper instanceof ReactWrapper)
    return new ReactEnzyme(wrapper);
}

function ShallowEnzyme() { }

function ReactEnzyme () { }

export {
  WrapperBuilder as default,
  ShallowEnzyme,
  ReactEnzyme
};