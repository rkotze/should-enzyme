import should from 'should';

const Assertion = should.Assertion;

Assertion.add('className', function () { 
	const wrapper = this.obj;

	this.params = { 
		obj: wrapper.type(), 
		operator: `to have className '${arguments[0]}' but got '${wrapper.prop('className')}'`
	};

	should(wrapper.hasClass(arguments[0])).be.exactly(true, ' ');
});