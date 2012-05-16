describe('The Set',function(){
  
  it('should hold values as unique',function(){
	  var numbers = the.set().push(1).push(4).push(1).push(6).push(5).push(7);
	  expect(numbers.values().length()).toBe(5);
  })
  
  it('should hold values with frequencies',function(){
	  var numbers = the.set().push(1).push(4).push(1).push(6).push(4).push(5).push(7);
	  expect(numbers.frequencyOf(4)).toBe(2);
	  expect(numbers.frequencyOf(5)).toBe(1);
  })
 
});