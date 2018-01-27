var functions = {};

functions.debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if ( !immediate ) {
                func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait || 200);
        if ( callNow ) { 
            func.apply(context, args);
        }
    };
};

functions.preload = function(items) {
	var config = { url: JD_CONFIG.baseUrl + 'assets/img/'};
	for (var i = 0; i < items.length; i++) {
		$("<img />").attr("src", config.url + items[i]);
	}
};

functions.scrollTo = function(target, duration, callback) {
	var dur = duration || 0, cb = callback || function() {};
	$.scrollTo(target, {duration: dur, onAfter: function(){}});	
};