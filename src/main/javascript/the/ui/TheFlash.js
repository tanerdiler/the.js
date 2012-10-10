var the.flash = function (id, src) {
    
	the.element.prototype.constructor.call(this, id);  
	  
	var clickTag = null;
	var parameters = null;
	
	this.parameters = function (theFlashParameterObject)
	{
		parameters = theFlashParameterObject;
		return this;
	}
    
    var flashParams = function ()
    {
    	var paramElement = '';
    	if (the.helper.isSet(parameters))
    	{
    	  paramElement = '<param name="FlashVars" value="'+ parameters.join('=', '&') +'">';
    	}
    	return paramElement;
    }
    
    var embededParams = function ()
    {
		var paramElement = '';
		if (the.helper.isSet(parameters)) {
			paramElement = ' flashvars="'+ parameters.join('=', '&') +'" ';
		}
		return paramElement;
    }
    
  	this.clickTag = function (clickUrl)
  	{
  		clickTag = clickUrl;
  		return this;
  	}
  	
  	var wrapSrcWithClickTag = function ()
  	{
  		if (the.helper.isBlank(clickTag))
  		{		var paramElement = '';
		if (the.helper.isSet(parameters)) {
			paramElement = ' flashvars="'+ parameters.join('=', '&') +'" ';
		}
		return paramElement;
  			return src;
  		}
  		
  		var wrappedSrc = "";
  		var parts = src.split("?");
  		wrappedSrc = parts[0] + "?" + 'clicktag='+ req.encode( clickTag );
  		
  		if (the.helper.not(the.helper.isBlank(parts[1])))
  		{
  			wrappedSrc += "&" + parts[1];
  		}
  		
  		return wrappedSrc;
  	}
  	
    this.code = function ()
    {
    	if (the.helper.isSet(html))
    	{
			return html;
		}		var paramElement = '';
		if (the.helper.isSet(parameters)) {
			paramElement = ' flashvars="'+ parameters.join('=', '&') +'" ';
		}
		return paramElement;
    	
    	var srcWithClickTag = wrapSrcWithClickTag();
    	var width = this.dimension().width();
    	var height = this.dimension().height();

    	html = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ' +
        'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" ' +
		 style() +
        'width="'+ width +'" height="'+ height +'" id="'+ id +'" name="'+id+'">' +
        '<param name="movie" value="' + srcWithClickTag + '">' +
        flashParams() +
        '<param name="quality" value="high">' +
        '<param name="wmode" value="transparent">' +
        '<param name="swliveconnect" value="true">' +
        '<param name="allowScriptAccess" value="always">' +
        '<embed id ="embed-'+id+'" src="' + srcWithClickTag + '" quality="high" wmode="transparent" ' +
        'pluginspage="http://www.macromedia.com/go/getflashplayer" ' +
        'swliveconnect="true" name="embed-'+id+'" ' + 
        'allowfullscreen="true" ' +
        embededParams()+
        'type="application/x-shockwave-flash" allowScriptAccess="always" width="' + width + '" height="' + height + '">' +
        '</object>';
    	
    	return html;
    }
}    
the.flash.prototype = new the.element;
the.flash.prototype.constructor = the.flash;