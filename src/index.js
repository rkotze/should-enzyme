import should from 'should';
import WrapperBuilder from './wrapper';

const Assertion = should.Assertion;

Assertion.add('className', function () { 
	const wrapper = WrapperBuilder(this.obj);
	this.params = { 
		obj: wrapper.type(), 
		operator: `to have className '${arguments[0]}' but found '${wrapper.classNames()}'`
	};

	should(wrapper.hasClass(arguments[0])).be.exactly(true, ' ');
});