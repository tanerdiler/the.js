the.event = function (eventName) {
	var nameIncludes_On_Prefix = function () {
		return eventName.indexOf("on") === 0;
	}
	
	if (the.helper.not(nameIncludes_On_Prefix())) {
		eventName = "on" + eventName;
	}
	
	var event = the.events.get(eventName);
	if (the.helper.isNull(event)) {
		event = new TheEvent(eventName);
		the.events.push(eventName, event);
	}
	
	return event;
}


var TheEvent = function (_name) {
	
	var listeners = the.array();
	
	this.name = function () {
		return _name;
	}

	this.fire = function (source) {
		listeners.iterate(function (index, listener) {
			if (the.helper.isNull(listener.providesCondition) 
					|| listener.providesCondition(source))
			{
				listener.trigger(source);
			}
		});
		return this;
	}
	
	this.addListener = function (listener) {
		listeners.push(listener);
		return this;
	}
}

//the.event('onMouseClick').fire();

//the.listener(self).listen('onMouseClick').when(function () {
//});