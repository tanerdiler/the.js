the.object = function (object) {
	if (the.helper.isNull(object)) {
		return new TheObject({});
	} else {
		return new TheObject(object);
	}
}

var TheObject = function (object) {
	
        var self = this;

	this.get = function (key) {
		return object[key];
	}
	
	this.push = function (key, value) {
		object[key] = value;
		return this;
	}
	
	this.iterate = function (fnc) {
		for (var key in object) {
			if (!object.hasOwnProperty(key)) {
	            continue;
	        }
			var cont = fnc(key, object[key]);
			if (cont === true) {
				continue;
			} else if (cont === false) {
				break;
			}
		}
	}
	
	this.size = function () {
		var size = 0;
		this.iterate(object, function (key, value) {
			size++;
		});
		return size;
	}
	
	this.keys = function () {
		var array = the.array();
		this.iterate(function (key, value) {
			array.push(key);
		});
		return array;
	}
	
	this.values = function () {
		var array = the.array();
		this.iterate(function (key, value) {
			array.push(value);
		});
		return array;
	}

	this.merge = function (theObject) {
	  theObject.iterate(function(key, value){
             self.put(key, value);
          });   
          return this; 
	}
	
	this.join = function (keyValueDelimiter, pairDelimiter) {
		var queryParams = []; 
	    this.iterate (function (key, value) {
	    	queryParams.push(key + keyValueDelimiter + value);
	    });
	    return queryParams.join(pairDelimiter);
	}
	
	this.to_json = function () {
		var separator = "";
		var json = '{';
		this.iterate(function (key, value) {
			json += separator;
		    json += '"'+ key +'":';
		    if (typeof value === 'object' || typeof value === 'Object') {
		    	json += the.object(value).to_json();
		    } else {
		    	json += value;
		    }
		    separator = ',';    
		});
		json += '}'
		return json;
	}
	
	this.from_json = function (json) {
		if (the.helper.isNull(json)) {return {};}
		var json = decodeURIComponent(json);
		try {
			return eval('(' + json + ')');
		} catch (e) {
		    return {}; 
		}
	}
}
