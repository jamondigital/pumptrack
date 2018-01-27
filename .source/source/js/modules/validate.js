var Validate = (function() {

    /* --------------------------------------------------------------
     * OPTIONS AND VARIABLES
     * ------------------------------------------------------------ */
	
	// this 
	var _self;
    
    // selectors 	
	var selectors = {
		body:  'body', 
		form:  '.js-validate',
		elem:  '[data-rules]',
		error: '.js-validation-error',
	};
	
	// css classes
	var classes = {
		hasError: 'has-error'
	};
	
	// container for errors
	var validation_errors = [];
	
	// template/delimiters for inline error
	var tpl_error_start = '<span class="form-error">';
	var tpl_error_end   = '</span>';
	
	// regex
	var regex = {
		email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		protocol: /^(f|ht)tps?:\/\//i,
		url: /^([a-z][a-z0-9\*\-\.]*):\/\/(?:(?:(?:[\w\.\-\+!$&'\(\)*\+,;=]|%[0-9a-f]{2})+:)*(?:[\w\.\-\+%!$&'\(\)*\+,;=]|%[0-9a-f]{2})+@)?(?:(?:[a-z0-9\-\.]|%[0-9a-f]{2})+|(?:\[(?:[0-9a-f]{0,4}:)*(?:[0-9a-f]{0,4})\]))(?::[0-9]+)?(?:[\/|\?](?:[\w#!:\.\?\+=&@!$'~*,;\/\(\)\[\]\-]|%[0-9a-f]{2})*)?$/,
		date: /^\d{1,2}\.\d{1,2}\.\d{4}$/
	};


    /* --------------------------------------------------------------
     * METHODS
     * ------------------------------------------------------------ */
	
	var _initialize = function() {
		_self = this;
		_bind();
	};
	
	var _bind = function() {
		
		// validate on submit
		$(selectors.body).on('submit', selectors.form, function(e){
			if (_validate($(this)) !== true) {
				e.preventDefault();
				_showErrors();
			}
		});
		
		// remove error messages & alert on focus
		$(selectors.body).on('focus', '.' + classes.hasError, function(){
			$(this).removeClass(classes.hasError);
			$(this).prev('span.form-error').remove();
			$(this).next('span.form-error').remove();
		});
	};
	
	var _validate = function(form) {

		var elements = form.find(selectors.elem), isValid = true;
					
		// exit if there is nothing to validate
		if (elements.length <= 0) return true;
		
		// loop over all fields
		for (var i = 0; i < elements.length; i++) {
			
			// get validation rules
			var elem   = $(elements)[i];
			var rules  = $(elem).data('rules').split('|');
						
			// loop over all rules for that element
			if (rules.length > 0) {
				for (var z = 0; z < rules.length; z++) {
					
					// check for rules with parameters (i.e. min_length[2])
					var match = rules[z].match(/\[(.*)\]/);
					var param = '';
					if (match) {
						rules[z] = rules[z].replace(match[0], ''); // remove brackets
						param    = match[1]; // set additional parameter
					}
					
					// call validation rule fn
					if (!_self[rules[z]]($(elem),param)) {
						isValid = false;
						$(elem).parents('.js-error').addClass(classes.hasError);
					}
				}
			}
		}

		return isValid;	
	};

	var _showErrors = function() {
		$(selectors.error).show();
		$(selectors.body).scrollTo(0,400);
	};
	
	var _clearErrors = function() {
		$('.' + classes.hasError).next('span').remove();
		$('.' + classes.hasError).removeClass(classes.hasError);
	};

    /* --------------------------------------------------------------
     * VALIDATION METHODS
     * ------------------------------------------------------------ */
	
	var _required = function(el) {
		var val = $.trim(el.val());
		return (val !== undefined && val.length >= 1) ? true : false;
	};
	
	var _valid_email = function(el) {
		_required(el);
		if (regex.email.test(el.val())) {
			return true;
		}		
		return false;	
	};
	
	var _valid_url = function(el) {
		_required(el);
		
		// add http/s if missing otherwise the validation will fail
		var url = el.val();
		if (!regex.protocol.test(url)) {
			url = "http://" + url;
		}		
		
		if (regex.url.test(url)) {
			return true;
		}		
		return false;		
	};
	
	var _valid_date = function(el) {
		_required(el);
		if (regex.date.test(el.val())) {
			return true;
		}
		return false;
	};
	
	var _is_checked = function(el) {
		if (el.is(':checked')) {
			return true;
		}
		return false;
	};
	
	var _is_valid_sbt = function(el) {
		if (el.hasClass('is-valid')) {
			return true;
		}
		return false;
	};
	
	var _min_length = function(el,min) {
		_required(el);
		if (el.val().length >= min) {
			return true;
		}
		return false;
	};

	var _max_length = function(el,max) {
		_required(el);
		if (el.val().length <= max) {
			return true;
		}
		return false;
	};
	
	var _matches = function(el,match) {
		_required(el);
		if (el.val() === $('[name="'+match+'"]').val()) {
			return true;
		}
		return false;	
	};
	
	var _at_least_one = function(el,field) {
		var fieldname = field + '[]';
		if ($('[name="'+fieldname+'"]').val() != undefined && $('[name="'+fieldname+'"]').val() != '') {
			return true;
		}
		return false;
	}

    /* --------------------------------------------------------------
     * RETURN PUBLIC METHODS
     * ------------------------------------------------------------ */
     		
	return {
		init: _initialize,
		required: _required,
		valid_email: _valid_email,
		valid_date: _valid_date,
		valid_url: _valid_url,
		is_checked: _is_checked,
		is_valid_sbt: _is_valid_sbt,
		min_length: _min_length,
		max_length: _max_length,
		matches: _matches,
		at_least_one: _at_least_one,
	};
	
})();

// Initialize
Validate.init();