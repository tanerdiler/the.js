the.array = function (native_array) {
	if (the.helper.isNull(native_array)) {
		return new TheArray();
	} else {
		return new TheArray(native_array);
	}
}

var TheArray = function (native_array) {
	var self = this;
	
	if (the.helper.isNull(native_array)) {
		native_array = [];
	}
	
	this.get = function (index) {
		return native_array[index];
	}
	
	this.push = function (item) {
		native_array.push(item);
	}
	
	this.length = function () {
		return native_array.length;
	}
	
	this.iterate = function (fnc) {
		for (var index = 0; index < native_array.length; index++) {
			var cont = fnc(index, native_array[index]);
	        if (the.helper.isNull(cont) || cont === true) {
	          continue;
	        } else if (cont === false) {
	          break;
	        }
	    }
	 }

	this.toString = function (stringFunction) {
	      var string = "";
	      var separator = "";
	      this.iterate(function (index, item) {
	    	  var strOfItem = item;
	    	  if (the.helper.not(the.helper.isNull(stringFunction))) {
		          strOfItem = stringFunction(item);
		      }
	    	  string += separator + strOfItem;
	    	  separator = ",";
	      });
	      return string;
	}
	
	this.toJSon = function (func) {
	      return "["+this.toString(func)+"]";
	}
	
	this.frequencies = function () {
	      var frequencies = the.set();
	      this.iterate(function (index, item) {
	    	  frequencies.push(item);
	      });
	      return frequencies;
	} 
	
	this.filter = function(fnc) {
	        var result = the.array();
	        this.iterate(function (index, item) {
	        	if (fnc(index,item)) {
	        		result.push(item);
	        	}
	        });
	        return result;
	 }

	 this.intersections = function (native_array) {
		   var intersections = the.set();
		   var theArray = the.array(native_array);
		   this.iterate(function(index, item){
			  if (theArray.contains(item)) {
				  intersections.push(item);
			  } 
		   });
	       return intersections;
	 }
	    
	 this.contains = function (targetItem) {
		 var found = false;
		 this.iterate(function(index, item){
			 if (item === targetItem) {
				 found = true;
				 return false;
			 }
		 });
		 return found;
     }
	    
	 this.containsAny = function (nativeArray) {
		 var found = false;
		 var theArray = the.array(nativeArray);
		 theArray.iterate(function (index, item) {
			 if (self.contains(item)) {
	              found = true;
	              return false; // not iterate anymore
             }
		 });
         return found;
	 }
	    
	 this.containsAll = function (nativeArray) {
		 var found = true;
		 var theArray = the.array(nativeArray);
		 theArray.iterate(function (index, item) {
			 if (the.helper.not(self.contains(item))) {
	              found = false;
             }
		 });
         return found;
    }
}