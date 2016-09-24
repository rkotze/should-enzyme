import {findDOMNode} from 'enzyme/build/react-compat';

export default class ReactEnzyme {
  constructor(enzymeWrapper) {
    this.enzyme = enzymeWrapper;
    this.toReactWrapper = this.enzyme.wrap.bind(this.enzyme);
  }

  hasClass(className) {
    return this.toReactWrapper(
      this.enzyme.single((n) => findDOMNode(n))
    ).hasClass(className);
  }

  // classNames() {
  //   return this.enzyme.prop('className');
  // }
}