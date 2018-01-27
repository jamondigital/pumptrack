var Xhr = (function() {

    /* --------------------------------------------------------------
     * OPTIONS AND VARIABLES
     * ------------------------------------------------------------ */
	
	// this 
	var _self;

    /* --------------------------------------------------------------
     * METHODS
     * ------------------------------------------------------------ */
	
	var _initialize = function() {};
	
	var _bind = function() {};


    /* --------------------------------------------------------------
     * XHR HELPER METHODS
     * ------------------------------------------------------------ */
	
	var _post = function(data) {
		return $.ajax({
			url: 'xhr/post',
			method: 'POST',
			dataType: 'json',
			data: data
		});
	};
	
	var _get = function(action) {
		return $.ajax({
			url: 'xhr/' + action,
			method: 'GET',
			dataType: 'json',
		});
	};

    /* --------------------------------------------------------------
     * RETURN PUBLIC METHODS
     * ------------------------------------------------------------ */
     		
	return {
		init: _initialize,
	};
	
})();

// Initialize
Xhr.init();