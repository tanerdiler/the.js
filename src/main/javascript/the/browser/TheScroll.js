the.scroll = (function () {
	
	var chooseRightValue = function (windowScrollPosition, documentScrollPosition, bodyScrollPosition) {
		var position = windowScrollPosition ? windowScrollPosition : 0;
		position = documentScrollPosition && (!position || (position > documentScrollPosition)) 
						? documentScrollPosition: position;
		position = bodyScrollPosition && (!position || (position > bodyScrollPosition)) 
						? bodyScrollPosition : position;
		return position;
	}
	
	var topPosition = chooseRightValue (
		window.pageYOffset ? window.pageYOffset : 0,
		document.documentElement ? document.documentElement.scrollTop : 0,
		document.body ? document.body.scrollTop : 0
	);
	
	var leftPosition = chooseRightValue (
		window.pageXOffset ? window.pageXOffset : 0,
		document.documentElement ? document.documentElement.scrollLeft : 0,
		document.body ? document.body.scrollLeft : 0
	);
	
	return {
		position : function () {
			return new the.position(leftPosition, topPosition);
		}
	}
})()