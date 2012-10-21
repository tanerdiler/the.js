describe('The Flash',function(){
  
  it('should create object element with embed element',function(){
	  var flashObject = the.flash('the.flash.object', 'http://www.tanerdiler.com').asNode();
	  
	  var body = document.getElementsByTagName('body')[0];
	  body.appendChild(flashObject);
	  expect(flashObject).toNotBe(null);
	  
	  var flashNode = document.getElementById('the.flash.object');
	  expect(flashNode).toNotBe(null);

	  var embedNode = document.getElementById('embed-the.flash.object');
	  expect(embedNode).toNotBe(null);
  })
  
  it('should create object element with sized',function(){
	  var flashObject = the.flash('the.flash.object', 'http://www.tanerdiler.com').sizeWith(the.dimension(300,250));
	  expect(flashObject.asCode()).toContain("width=\"300\" height=\"250\"");
  })
  
  it('should create object element with styled',function(){
	  var flashObject = the.flash('the.flash.object', 'http://www.tanerdiler.com').styleWith(the.object({'position':'absolute'}));
	  expect(flashObject.asCode()).toContain("style=\"position:absolute;\"");
  })
  
});
