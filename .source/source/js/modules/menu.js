var MenuUi = (function() {

    /* --------------------------------------------------------------
     * OPTIONS AND VARIABLES
     * ------------------------------------------------------------ */

	// this 
	var _self;
	
	// selectors
	var selectors = {
		body:	 	'body',
		menu:	 	'.js-menu',
		menuMobile: '.js-page-nav',
		btnMenu: 	'.js-btn-menu',
		
	};
	
	// classes
	var classes = {
		open: 'is-open',
		visible: 'is-visible',
		active: 'is-active',
	};


    /* --------------------------------------------------------------
     * METHODS
     * ------------------------------------------------------------ */
     
	var _initialize = function() {
		_bind();
	};
	
	var _bind = function() {
		$(selectors.body).on('click', selectors.btnMenu, function(){
			_toggle($(this));
		});
	};

	var _toggle = function(el) {
		$(selectors.menuMobile).toggleClass(classes.visible);
		$(selectors.btnMenu).toggleClass(classes.active);
	};
	
	var _hide = function() {
		$(selectors.menuMobile).removeClass(classes.visible);
		$(selectors.btnMenu).removeClass(classes.active);
	};

    /* --------------------------------------------------------------
     * RETURN PUBLIC METHODS
     * ------------------------------------------------------------ */
     		
	return {
		init: _initialize,
		hide: _hide,
	};
	
})();

// Initialize
MenuUi.init();