the.dimension = function (width, height) {
	
	var TheDimension = function (width, height) {
		this.width = function () {
			return width;
		}
		
		this.height = function () {
			return height;
		}
	}
	
	return new TheDimension(width, height);
}

