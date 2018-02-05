var FormUi = (function() {
	
	var selectors = {
		body:   'body',
		label:  '.js-floating',
	};
	
	var classes = {
		floating: 'is-floating'
	};

	var _initialize = function() {
		
		_default();
		
		$(selectors.body).on('focus', selectors.label, function(){
			_focus($(this));
		});

		$(selectors.body).on('blur', selectors.label, function(){
			_blur($(this));
		});
	};
	
	var _default = function() {
		$.each($(selectors.label), function(key,value){
			if ($(value).val().length > 0) {
				$(value).prev('label').addClass(classes.floating);
			}
		});
	};
	
	var _focus = function(el) {
		if (el.val().length == 0 || el.html().length == 0) {
			el.prev('label').addClass(classes.floating);
		}
	};
	
	var _blur = function(el) {
		if (el.val().length == 0 && el.html().length == 0) {
			el.prev('label').removeClass(classes.floating);
		}
	};
	
	return {
		init: _initialize
	}
	
})();

FormUi.init();