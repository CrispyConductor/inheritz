var inherits = require('inherits');

function alreadyInherits(ctor) {
	var hasPrototypeProperties = false;
	var key;
	for (key in ctor.prototype) {
		hasPrototypeProperties = true;
		break;
	}
	return !!hasPrototypeProperties;
}

function inheritz(ctor, superCtor/*, mixinCtor, ... */) {
	var i, key, ctor, superCtor, override;
	if (arguments[0] === true) {
		i = 3;
		ctor = arguments[1];
		superCtor = arguments[2];
		override = true;
	} else {
		i = 2;
		ctor = arguments[0];
		superCtor = arguments[1];
		override = false;
	}
	i = 2;
	if(alreadyInherits(ctor)) {
		i--;
	} else {
		inherits(ctor, superCtor);
	}
	for (; i < arguments.length; i++) {
		for (key in arguments[i].prototype) {
			if (override || ctor.prototype[key] === undefined) {
				ctor.prototype[key] = arguments[i].prototype[key];
			}
		}
	}
}

module.exports = inheritz;

