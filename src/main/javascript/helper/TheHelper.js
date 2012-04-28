the.helper = {}

the.helper.isSet = function (theThing) {
	return the.helper.not(
				the.helper.isNull(theThing));
}

the.helper.isNull = function (theThing) {
	return typeof theThing === 'undefined' || theThing === null;
}

the.helper.not = function (booleanValue) {
	return !booleanValue;
}