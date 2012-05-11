the.event = function (eventName) {
	var nameIncludes_On_Prefix = function () {
		return eventName.indexOf("on") === 0;
	}
	
	
	if (the.helper.not(nameIncludes_On_Prefix())) {
		eventName = "on" + eventName;
	}
	
	var theEvent = the.events.get(eventName);
	if (the.helper.isNull(theEvent)) {
		theEvent = new TheEvent(eventName);
		the.events.push(theEvent);
	}
	
	return theEvent;
}


var TheEvent = function (name) {
	
	var listeners = the.array();

	this.fire = function () {
		listeners.iterate(function (index, listener) {
			if (listener.providesCondition()) {
				listener[name]();
			}
		}); 
	}
	
	this.addListener = function (listener) {
		listeners.push(listener);
		return this;
	}
}

the.event('onMouseClick').fire();

the.listener(self).listen('onMouseClick').when(function () {
	
});