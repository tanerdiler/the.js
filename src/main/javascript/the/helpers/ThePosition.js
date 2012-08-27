the.position = function (left, top) {

	var ThePosition = function (left, top)
	{
		this.left = function () {
			return left;
		}
		
		this.top = function () {
			return top;
		}
	}
	
	return new ThePosition(left, top);
}