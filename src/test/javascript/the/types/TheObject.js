describe('The Object',function(){
  
  it('should return value of property',function(){
	  var object = the.object({name: 'the.js'});
	  expect(object.get('name')).toBe('the.js');
  })
  
  it('should add new property with value',function(){
	  var object = the.object({name: 'the'});
	  object.push('lastname', 'js');
	  expect(object.get('lastname')).toBe('js');
  })

  it('should iterate over key/value pairs',function(){
	  var times = 0;
	  var object = the.object({name: 'the', lastname: 'js'});
	  object.iterate(function(key, value) {
		  expect('lastname').toContain(key);
		  expect('thejs').toContain(value);
		  times++;
	  });
	  expect(times).toBe(2);
  })
  
  it('should return size of key/value pairs',function(){
	  var object = the.object({name: 'the', lastname: 'js'});
	  expect(object.size()).toBe(2);
  })
  
  it('should return keys',function(){
	  var object = the.object({name: 'the', lastname: 'js'});
	  expect(object.keys().containsAll(['name', 'lastname'])).toBe(true);
  })
  
  it('should return values',function(){
	  var object = the.object({name: 'the', lastname: 'js'});
	  expect(object.values().containsAll(['the', 'js'])).toBe(true);
  })
});