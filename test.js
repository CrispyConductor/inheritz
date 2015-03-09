var inheritz = require('./inheritz');
var inherits = require('util').inherits;
var assert = require('assert');

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

testOne();
testTwo();
console.log('ok');

