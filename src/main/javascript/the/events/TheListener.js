the.listener = function (object) {
	return new TheListener( object );
}

var TheListener = function (object) {
	var self = this;
	
	var conditionToTriggerListener = null;
	
	this.listen = function (eventName) {
		var event = the.events.get(eventName);
		event.addListener(self);
		return self;
	}
	
	this.when = function (condition) {
		conditionToTriggerListener = condition;
		return self;
	}
	
	this.providesCondition = function () {
		if (the.helper.isNull(conditionToTriggerListener)) {
			return true;
		}
		return conditionToTriggerListener();
	}
}