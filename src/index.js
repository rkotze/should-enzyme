import should from 'should';

const Assertion = should.Assertion;

Assertion.add('className', function () { 
	const wrapper = this.obj;

	this.params = { 
		obj: wrapper.prop('className'), 
		operator: `to have className`, 
		expected: arguments[0] 
	};

	should(wrapper.hasClass(arguments[0])).be.exactly(true);
});