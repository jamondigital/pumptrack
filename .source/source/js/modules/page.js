var PageUi = (function() {

    /* --------------------------------------------------------------
     * OPTIONS AND VARIABLES
     * ------------------------------------------------------------ */

	// this 
	var _self;
	
	// selectors
	var selectors = {
		body: 'body',
		scrollTo: '[data-scrollto]'
	};
	
	// classes
	var classes = {};

    /* --------------------------------------------------------------
     * METHODS
     * ------------------------------------------------------------ */
     
	var _initialize = function() {
		_bind();
	};
	
	var _bind = function() {
		$(selectors.body).on('click', selectors.scrollTo, function(){
			MenuUi.hide();
			$(selectors.body).scrollTo($(this).data('scrollto'),400);
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
PageUi.init();