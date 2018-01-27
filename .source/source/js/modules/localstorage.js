var Storage = (function() {
	
	var prefix = 'GS-';
		
	var _initialize = function() {};
	
	/**
	 * Get a value from localstorage
	 */	
	var _get = function(item) {
		return localStorage.getItem(prefix + item);
	};

	/**
	 * Set a value in localstorage
	 */	
	var _set = function(item, value) {
		localStorage.setItem(prefix + item, value);
	};		
	
	/**
	 *  Public space
	 */			
	return {
		set: _set,
		get: _get,
		init: _initialize
	}
})();