var inheritz = require('./inheritz');
var assert = require('assert');

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

console.log('ok');

