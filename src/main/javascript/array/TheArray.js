the.array = function (native_array) {
	if (the.helper.isNull(native_array)) {
		return new TheArray();
	} else {
		return new TheArray(native_array);
	}
}

var TheArray = function (native_array) {
	
	if (the.helper.isNull(native_array)) {
		native_array = [];
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
	        var res = [];
	        this.iterate(function (index, item) {
	        	if (fnc(index,item)) {
		              res.push(val);
	        	}
	        });
	        return res;
	 }

	 this.intersections = function (theSecondArray) {
		   var intersections = the.set();
		   this.iterate(function(index, item){
			  if (this.contains(item)) {
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
			 if (LinkzArrayUtil.contains(srcArray, dstArray[i])) {
	              found = true;
	              return false;
             }
		 });
         return found;
	 }
	    
	 this.containsAll = function (srcArray, dstArray) {
		 var found = true;
		 var theArray = the.array(nativeArray);
		 theArray.iterate(function (index, item) {
			 if (the.helper.not(this.contains(dstArray[i]))) {
	              found = false;
             }
		 });
         return found;
    }
}