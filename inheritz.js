var inherits = require('inherits');

function inheritz(ctor, superCtor/*, mixinCtor, ... */) {
	var i, key;
	inherits(ctor, superCtor);
	for(i = 2; i < arguments.length; i++) {
		for(key in arguments[i].prototype) {
			ctor.prototype[key] = arguments[i].prototype[key];
		}
	}
}

module.exports = inheritz;

