(window => {	
	"use strict";
	var define_Library = function() {
		var library = {};
		function _RecFormatObj(mapper, data) {
		  this._mapper = mapper;
		  this._reqJson = data;
		}
		library.recFormat = (mapper, data) => {
			//validations
			if(!mapper || typeof(mapper) != 'object' || Object.keys(mapper).length <= 0) { 
				// console.log("please send mapper{} as first argument"); 
				return;
			}
			if(!data || typeof(data) != 'object' || Object.keys(data).length <= 0) { 
				// console.log("please send object as second argument"); 
				return;
			}
			var newDataObj = new _RecFormatObj(mapper, data);
			Object.defineProperty(newDataObj, "_mapper", {
			  writable: false
			});
			Object.defineProperty(newDataObj, "_reqJson", {
			  writable: false
			});
			
			var formattedData = JSON.parse(JSON.stringify(newDataObj._reqJson));
	        for (let key in newDataObj._reqJson){
	            if (newDataObj._mapper.hasOwnProperty(key) && newDataObj._reqJson[key] != null) {
	                if(newDataObj._reqJson[key] instanceof Array) {
	                	newDataObj._reqJson[key].forEach(value => {
	                		library.recFormat(newDataObj._reqJson[key][i]);
	                	})
	                } else {
	                    if(typeof(newDataObj._reqJson[key] == 'object')) {
	                        library.recFormat(newDataObj._reqJson[key]);
	                    }
	                }
	                formattedData[newDataObj._mapper[key]] = newDataObj._reqJson[key];
	                // delete the data with minified keys.
	                delete formattedData[key];
	            }
	        }
	        return formattedData;
		};
		return library;
	}
	
	//define globally if it doesn't already exist
    if(typeof(s) === 'undefined'){
        window.s = define_Library();
    } else{
        console.log("Library already defined.");
    }

})(window);



