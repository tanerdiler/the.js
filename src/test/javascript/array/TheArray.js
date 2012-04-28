describe('The Array',function(){
  
  it('should return frequencies of the items',function(){
	  var frequencies = the.array([1,2,1,5,1,5,2,1,6]).frequencies();
	  expect(frequencies.values().length).toBe(4);
	  expect(frequencies.frequencyOf(1)).toBe(4);
	  expect(frequencies.frequencyOf(2)).toBe(2);
	  expect(frequencies.frequencyOf(5)).toBe(2);
	  expect(frequencies.frequencyOf(6)).toBe(1);
  });
  
  
  describe('on iteration',function(){
	  it('should continue unless the function returns false',function(){
		  var counter = 0;
		  the.array([1,2,3,4,5,6]).iterate(function (index, value) {
			  counter++;
		  })
		  expect(counter).toBe(6);
	  });
	  
	  it('should stop when the function returns false',function(){
		  var counter = 0;
		  the.array([1,2,3,4,5,6]).iterate(function (index, value) {
			  if (value === 4) {
				  return false;
			  }
			  counter++;
		  })
		  expect(counter).toBe(3);
	  });

  })
 
});