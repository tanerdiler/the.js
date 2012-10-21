the.element = function(id) {
	var styles = null;
	var node = null;
	var html = null;
	var dimension = the.dimension(0,0);

	this.styleWith = function(theStyleObject) {
		styles = theStyleObject;
		return this;
	}

	this.sizeWith = function(theDimension) {
		dimension = theDimension;
		return this;
	}

	this.dimension = function() {
		return dimension;
	}

	this.style = function() {
		if (the.helper.isSet(styles)) {
			return ' style="' + styles.join(':', ';') + '" ';
		}
		return '';
	}

	this.append = function(theElement) {
		this.asNode().appendChild(theElement.asNode());
		return this;
	}

	this.moveTo = function(position) {
		this.asNode().style.top = position.top() + "px";
		this.asNode().style.left = position.left() + "px";
	}

	this.resize = function(dimension) {
		this.asNode().style.width = dimension.width() + "px";
		this.asNode().style.height = dimension.height() + "px";
	}

	this.hide = function() {
		this.asNode().style.display = "none";
	}

	this.visible = function() {
		this.asNode().style.display = "";
	}

	this.remove = function() {
		document.body.removeChild(node);
	}

	this.asNode = function() {
		if (the.helper.isSet(node)) {
			return node;
		}

		var code = this.asCode();
		var nodeExtractorFromHTML = document.createElement("div");
		nodeExtractorFromHTML.innerHTML = code;

		var mediaNode = nodeExtractorFromHTML.firstChild;
		nodeExtractorFromHTML.removeChild(mediaNode);

		node = mediaNode;

		return node;

	}

	this.asCode = function() {
		if (the.helper.isSet(html)) {
			return html;
		}

		html = this.code(id, this.style());

		return html;
	}
}