describe('The Event',function(){
  
  it('should put on prefix if needed',function(){
	  var event = the.event('MouseClick');
	  expect(event.name()).toBe("onMouseClick");
  })
  
  it('should must be created once',function(){
	  var event_1 = the.event('MouseClick');
	  var event_2 = the.event('MouseClick');
	  expect(event_1).toBe(event_2);
  })
  
  it('should call listener if no condition specified',function(){
	  var listenerCallingTimes = 0;
	  var listener = {onMouseClick:function () {listenerCallingTimes++;}};
	  var event_1 = the.event('MouseClick');
	  event_1.addListener(listener);
	  event_1.fire();
	  expect(listenerCallingTimes).toBe(1);
  })
 
});