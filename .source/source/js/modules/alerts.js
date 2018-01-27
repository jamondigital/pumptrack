var Alerts = (function() {

    /* --------------------------------------------------------------
     * OPTIONS AND VARIABLES
     * ------------------------------------------------------------ */

	// this 
	var _self;
    
    // selectors 	
	var selectors = {
		body:  		'body', 
		alert:		'.js-alert',
		autoHide:	'.js-autohide',
		btnHide:	'.js-hide-alert',
	};
	
	// css classes
	var classes = {
		hideOnTap: 'hide-on-tap'
	};

	// duration for auto hiding
	var autoHideDuration = 2000;
	
	// template
	var templates = {
		
		default: '<div class="alert alert--danger js-alert">'+
					'<div class="alert__inner">'+
						'<p>%alert_body%</p>'+
					'</div>'+	
				 '</div>',
						  
		validation: '<div class="alert alert--danger js-alert">'+
						'<a href="javascript:;" class="btn btn--close js-hide-alert"></a>'+
						'<div class="alert__inner">'+
							'<p>%alert_body%</p>'+
						'</div>'+	
				    '</div>',
	};	

    /* --------------------------------------------------------------
     * METHODS
     * ------------------------------------------------------------ */
	
	var _initialize = function() {
		_bind();
	};
	
	var _bind = function() {
		$(selectors.body).on('click', selectors.btnHide, function(e){
			_remove();
		});

		$(selectors.body).on('Alerts:default', function(){
			_show('default');
		});
		
		$(selectors.body).on('Alerts:validation_error', function(){
			_show('validation');
		});		

		$(selectors.body).on('Alerts:remove', function(){
			_remove();
		});
		
		if ($(selectors.body).find(selectors.autoHide).length) {
			_hide();
		}
		
		if ($(selectors.alert).hasClass(classes.hideOnTap)) {
			$(selectors.body).on('click', selectors.alert, function(e){
				_remove();
			});			
		}		
	};

	var _show = function(tpl) {
		_remove();
		var alert = (_i18n['alert'] !== undefined) ? 
					templates[tpl].replace('%alert_body%', _i18n['alert']) : 
					templates[tpl].replace('%alert_body%', 'An error occured!');
					
		$(selectors.body).prepend(alert);
		$.scrollTo(0,0);
	};
	
	var _remove = function() {
		$(selectors.alert).remove();
	};
	
	var _hide = function() {
		setTimeout(function(){
			_remove();
		}, autoHideDuration);
	};

    /* --------------------------------------------------------------
     * RETURN PUBLIC METHODS
     * ------------------------------------------------------------ */
     		
	return {
		init:   _initialize,
		show:   _show,
		remove: _remove
	};
	
})();

// Initialize
Alerts.init();