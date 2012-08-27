the.browser = (function () {
	
	var elementSize = function (element, side) {
		if (the.helper.isNull(element)) {
			return 0;
		}
		
		return Math.max(
				the.helper.isSet(element.documentElement) ? element.documentElement["client" + side] : 0, 
				the.helper.isSet(element.body) ? element.body["scroll" + side] : 0,
				the.helper.isSet(element.documentElement) ? element.documentElement["scroll" + side] : 0,
				the.helper.isSet(element.body) ? element.body["offset" + side] : 0, 
				the.helper.isSet(element.documentElement) ? element.documentElement["offset" + side] : 0
	    );
	}
	
	var dimension = the.dimension(elementSize(document, "Width"), elementSize(document, "Height"));
		
	return {
		dimension : function () {
			return dimension;
		},
		
		scrollPosition : function () {
			return the.scroll.position();
		},
		
		resizeTo : function (dimension) {
			window.resizeTo(dimension.width(), dimension.height());
		}
	}
})() 