var inheritz = require('./inheritz');
var inherits = require('util').inherits;
var assert = require('assert');

// Basic test
function testOne() {

	function SuperClassA() {}
	SuperClassA.prototype.methodA = function() {
		return 'A';
	};

	function SuperClassB() {}
	SuperClassB.prototype.methodB = function() {
		return 'B';
	};

	function SuperClassC() {}
	SuperClassC.prototype.methodC = function() {
		return 'C';
	};

	function MyClass() {
		SuperClassA.call(this);
		SuperClassB.call(this);
		SuperClassC.call(this);
	}

	inheritz(MyClass, SuperClassA, SuperClassB, SuperClassC);

	var myClass = new MyClass();

	assert(myClass instanceof SuperClassA);
	assert(myClass.methodA() === 'A');
	assert(myClass.methodB() === 'B');
	assert(myClass.methodC() === 'C');

}

// Test when class already inherits from something
function testTwo() {

	function SuperClassA() {}
	SuperClassA.prototype.methodA = function() {
		return 'A';
	};

	function SuperClassB() {}
	SuperClassB.prototype.methodB = function() {
		return 'B';
	};

	function SuperClassC() {}
	SuperClassC.prototype.methodC = function() {
		return 'C';
	};

	function MyClass() {
		SuperClassA.call(this);
		SuperClassB.call(this);
		SuperClassC.call(this);
	}
	inherits(MyClass, SuperClassA);
	inheritz(MyClass, SuperClassB, SuperClassC);

	var myClass = new MyClass();

	assert(myClass instanceof SuperClassA);
	assert(myClass.methodA() === 'A');
	assert(myClass.methodB() === 'B');
	assert(myClass.methodC() === 'C');
}

// Test yielding to existing methods
function testThree() {
	function SuperClassA() {}
	SuperClassA.prototype.method = function() {
		return 'A';
	};

	function SuperClassB() {}
	SuperClassB.prototype.method = function() {
		return 'B';
	};

	function SuperClassC() {}
	SuperClassC.prototype.method = function() {
		return 'C';
	};

	function MyClass() {
		SuperClassA.call(this);
		SuperClassB.call(this);
		SuperClassC.call(this);
	}
	inherits(MyClass, SuperClassA);
	inheritz(MyClass, SuperClassB, SuperClassC);

	var myClass = new MyClass();

	assert(myClass instanceof SuperClassA);
	assert(myClass.method() === 'A');
}

// Test overriding existing methods when first parameter is true
function testFour() {
	function SuperClassA() {}
	SuperClassA.prototype.method = function() {
		return 'A';
	};

	function SuperClassB() {}
	SuperClassB.prototype.method = function() {
		return 'B';
	};

	function SuperClassC() {}
	SuperClassC.prototype.method = function() {
		return 'C';
	};

	function MyClass() {
		SuperClassA.call(this);
		SuperClassB.call(this);
		SuperClassC.call(this);
	}
	inherits(MyClass, SuperClassA);
	inheritz(true, MyClass, SuperClassB, SuperClassC);

	var myClass = new MyClass();

	assert(myClass instanceof SuperClassA);
	assert(myClass.method() === 'C');
}

testOne();
testTwo();
testThree();
testFour();
console.log('ok');

