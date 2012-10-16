var the.json = (function() {
	return {
		str : function(item) {
			var separator = "";
			var json = "";
			if (this.isArray(item)) {
				json += this.fromArray(item);
			} else 	if (this.isObject(item)) {
				json += this.fromObject(item);
			} else if (this.isString(item)) {
				json += '"'+item+'"';
			} else if (this.isNumber(item)) {
				json += item;
			}
			separator = ',';
			return json;
		},

		fromObject : function(theObject) {
			var json = '{';
			var separator = "";
			theObject.iterate(function(key, value) {
				if (the.helper.isNull(value)) {return true;}
				json += separator;
				json += the.json.str(key)+":";
				json += the.json.str(value);
				separator = ',';
			});
			json += '}';
			return json;
		},

		fromArray : function(theArray) {
			var json = '[';
			var separator = "";
			theArray.iterate(function(index, index) {
				json += separator;
				json += the.json.str(item);
				separator = ',';
			});
			json += ']'
			return json;
		},
		
		isObject : function (item) {
			return Object.prototype.toString.apply(item) === "[object Object]";
		},
		
		isArray : function (item) {
			return Object.prototype.toString.apply(item) === "[object Array]";
		},
		
		isNumber : function (item) {
			return Object.prototype.toString.apply(item) === "[object Number]";
		},
		
		isString : function (item) {
			return Object.prototype.toString.apply(item) === "[object String]";
		}
	}
})()
