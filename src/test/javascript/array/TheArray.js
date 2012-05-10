describe('The Array',function(){
  
  it('should return frequencies of the items',function(){
	  var frequencies = the.array([1,2,1,5,1,5,2,1,6]).frequencies();
	  expect(frequencies.values().length()).toBe(4);
	  expect(frequencies.frequencyOf(1)).toBe(4);
	  expect(frequencies.frequencyOf(2)).toBe(2);
	  expect(frequencies.frequencyOf(5)).toBe(2);
	  expect(frequencies.frequencyOf(6)).toBe(1);
  });
  
  it('should filter by criterian provided',function(){
	  var result = the.array([1,2,1,5,1,5,2,1,6]).filter(function(index, value){return value % 2 == 0;});
	  expect(result.length()).toBe(3);
  });
  
  it('should return intersections with other array',function(){
	  var result = the.array([1,2,1,5,1,5,2,1,6]).intersections([1,2]);
	  expect(result.values().length()).toBe(2);
	  expect(result.frequencyOf(1)).toBe(4);
	  expect(result.frequencyOf(2)).toBe(2);
  });
  
  it('should search for the item',function(){
	  var result = the.array([1,2,1,5,1,5,2,1,6]).contains(5);
	  expect(result).toBe(true);
	  
	  result = the.array([1,2,1,5,1,5,2,1,6]).contains(7);
	  expect(result).toBe(false);
  });
  
  it('should search for any item of the other array',function(){
	  var result = the.array([1,2,1,5,1,5,2,1,6]).containsAny([8,6]);
	  expect(result).toBe(true);
	  
	  result = the.array([1,2,1,5,1,5,2,1,6]).containsAny([16,9]);
	  expect(result).toBe(false);
  });
  
  it('should search for all items of the other array',function(){
	  var result = the.array([1,2,1,5,1,5,2,1,6]).containsAll([1,6]);
	  expect(result).toBe(true);
	  
	  result = the.array([1,2,1,5,1,5,2,1,6]).containsAll([1,6,7]);
	  expect(result).toBe(false);
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