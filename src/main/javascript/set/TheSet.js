the.set = function () {
	return new TheSet();
}

var TheSet = function () {
	
	var set = {};
	
	this.push = function (item) {
		if (the.helper.isNull(set[item])) {
			set[item] = 1;
		} else {
			set[item] += 1;
		}
	}
	
	this.frequencyOf = function (item) {
		return set[item];
	}
	
	this.values = function () {
		return the.object(set).keys();
	}
}