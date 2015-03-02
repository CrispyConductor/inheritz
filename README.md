# inheritz

Node.JS 'inherits' replacement that supports mixins.

Call it like the normal Node.JS 'inherits' and optionally supply additional arguments
to add as mixins.  All prototype methods of mixin constructors are added to the prototype
of the class.

```javascript
var inherits = require('inheritz');

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

inherits(MyClass, SuperClassA, SuperClassB, SuperClassC);

var myClass = new MyClass();

myClass.methodA();
myClass.methodB();
myClass.methodC();
```
