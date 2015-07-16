# inheritz

Node.JS 'inherits' replacement that supports mixins.

Call it like the normal Node.JS 'inherits' and optionally supply additional arguments
to add as mixins.  All prototype methods of mixin constructors are added to the prototype
of the class.

If inheritz is called on a constructor that already inherits from something (ie, it already
has prototype methods), then all parameters are added as mixins.  This makes it useful for
adding mixins to ES6 classes.

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

By default, if a method on a mixin conflicts with an existing method already belonging
to the prototype, the mixin will yield to the existing method.

```javascript
var inherits = require('inheritz');

function SuperClassA() {}
SuperClassA.prototype.method = function() {
	return 'A';
};

function SuperClassB() {}
SuperClassB.prototype.method = function() {
	return 'B';
};

function MyClass() {
	SuperClassA.call(this);
	SuperClassB.call(this);
}

inherits(MyClass, SuperClassA);
inherits(MyClass, SuperClassB);

var myClass = new MyClass();

console.log(myClass.method()); // prints 'A'
```

However, if you supply a boolean `true` as the first parameter to inheritz, this behavior
is reversed:

```javascript
var inherits = require('inheritz');

function SuperClassA() {}
SuperClassA.prototype.method = function() {
	return 'A';
};

function SuperClassB() {}
SuperClassB.prototype.method = function() {
	return 'B';
};

function MyClass() {
	SuperClassA.call(this);
	SuperClassB.call(this);
}

inherits(MyClass, SuperClassA);
inherits(true, MyClass, SuperClassB);

var myClass = new MyClass();

console.log(myClass.method()); // prints 'B'
```

