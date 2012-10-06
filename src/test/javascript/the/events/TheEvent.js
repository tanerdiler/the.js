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
	  var listener = the.listener({onMouseClick:function () {listenerCallingTimes++;}}).listen('onMouseClick');
	  the.event('MouseClick').fire();
	  expect(listenerCallingTimes).toBe(1);
  })
  
  it('should call two listeners if no condition specified',function(){
	  var listenerCallingTimes = 0;
	  the.listener({onMouseClick:function () {listenerCallingTimes++;}}).listen('onMouseClick');
	  the.listener({onMouseClick:function () {listenerCallingTimes = listenerCallingTimes + 2;}}).listen('onMouseClick');
	  the.event('MouseClick').fire();
	  expect(listenerCallingTimes).toBe(3);
  })

  it('should call listener once with condition',function(){
	  var listenerCallingTimes = 0;
	  var listener = the.listener(
			  					{onMouseClick: function () {
			  						listenerCallingTimes++;
			  						}
			  					})
	  					.listen('onMouseClick')
	  					.when(
	  							function(source){
	  								return listenerCallingTimes < 1;
	  							});
	  the.event('MouseClick').fire();
	  the.event('MouseClick').fire();
	  expect(listenerCallingTimes).toBe(1);
  })
  
  it('should stop triggering next listeners', function(){
          var listenerCallingTimes = 0;
          the.listener({onMouseClick:function () {listenerCallingTimes++; return false;}}).listen('onMouseClick');
          the.listener({onMouseClick:function () {listenerCallingTimes = listenerCallingTimes + 2; return false;}}).listen('onMouseClick');
          the.event('MouseClick').fire();
          expect(listenerCallingTimes).toBe(1); 
  })
   
});
