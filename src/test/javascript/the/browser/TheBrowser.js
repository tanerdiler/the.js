describe('The Browser',function(){
  
  it('should return dimension',function(){
	  expect(the.browser.dimension().width()).toBeGreaterThan(0);
	  expect(the.browser.dimension().height()).toBeGreaterThan(0);
  })
  
    it('should return scroll position',function(){
	  expect(the.browser.scrollPosition().left()).toBe(0);
	  expect(the.browser.scrollPosition().top()).toBe(0);
  })
 
});