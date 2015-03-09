var inherits = require('inherits');

function alreadyInherits(ctor) {
	var hasPrototypeProperties = false;
	var key;
	for(key in ctor.prototype) {
		hasPrototypeProperties = true;
		break;
	}
	return !!hasPrototypeProperties;
}

function inheritz(ctor, superCtor/*, mixinCtor, ... */) {
	var i, key;
	i = 2;
	if(alreadyInherits(ctor)) {
		i = 1;
	} else {
		inherits(ctor, superCtor);
	}
	for(; i < arguments.length; i++) {
		for(key in arguments[i].prototype) {
			if(ctor.prototype[key] === undefined) {
				ctor.prototype[key] = arguments[i].prototype[key];
			}
		}
	}
}

module.exports = inheritz;

