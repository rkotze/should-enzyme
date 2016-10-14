import BaseEnzyme from './base-enzyme';

export default class RenderEnzyme extends BaseEnzyme {
  constructor(enzymeWrapper) {
    super();
    this.enzyme = enzymeWrapper;
  }

  get element (){
  	if(!this.__element) {
  		if(this.enzyme.first()['0'].type === 'root') {
  			this.__element = this.enzyme.children().first();
  		} else {
  			this.__element = this.enzyme.first();
  		}
  	}

  	return this.__element;
  }
  
}