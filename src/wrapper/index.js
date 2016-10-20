import { ShallowWrapper, ReactWrapper } from 'enzyme';
import ShallowEnzyme from '../shallow-enzyme';
import ReactEnzyme from '../react-enzyme';
import StaticEnzyme from '../static-enzyme';

function WrapperBuilder(wrapper) {
  if(wrapper instanceof ShallowWrapper)
    return new ShallowEnzyme(wrapper);

  if(wrapper instanceof ReactWrapper)
    return new ReactEnzyme(wrapper);

  if(wrapper.cheerio && (wrapper.cheerio === '[cheerio object]')) {
    return new StaticEnzyme(wrapper);
  }

  throw new Error('Not a recognised Enzyme wrapper.');
}

export {
  WrapperBuilder as default
};
