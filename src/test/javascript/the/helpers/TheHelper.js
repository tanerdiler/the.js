describe('The Helpers',function(){
  
  it('should return boolean value to opposide',function(){
	  expect(the.helper.not(true)).toBe(false);
	  expect(the.helper.not(false)).toBe(true);
  })
  
  it('should check the value is null or undefined',function(){
	  var theValue = 'thejs';
	  var undefinedValue;
	  var nullValue = null;
	  expect(the.helper.isNull(undefinedValue)).toBe(true);
	  expect(the.helper.isNull(nullValue)).toBe(true);
	  expect(the.helper.isNull(theValue)).toBe(false);
  })
  
  it('should check the value is set',function(){
	  var theValue = 'thejs';
	  var undefinedValue;
	  var nullValue = null;
	  expect(the.helper.isSet(theValue)).toBe(true);
	  expect(the.helper.isSet(nullValue)).toBe(false);
	  expect(the.helper.isSet(undefinedValue)).toBe(false);
  })

 
});