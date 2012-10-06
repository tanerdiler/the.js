the.listener = function (object) {
	return new TheListener( object );
}

var TheListener = function (object) {
	var self = this;
	var eventName = null;
	
	var conditionToTriggerListener = null;
	
	this.listen = function (eventNameParameter) {
		eventName = eventNameParameter;
		var event = the.events.get(eventName);
		event.addListener(self);
		return self;
	}
	
	this.when = function (condition) {
		conditionToTriggerListener = condition;
		return self;
	}
	
	this.providesCondition = function (source) {
		if (the.helper.isNull(conditionToTriggerListener)) {
			return true;
		}
		return conditionToTriggerListener(source);
	}
	
	this.trigger = function (source) {
		return object[eventName](source);
	}
}
