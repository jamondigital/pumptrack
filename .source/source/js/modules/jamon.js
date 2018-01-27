var JamonUi = (function() {

	var config = {
		message:  "Made with ♥ by Jam'on digital",
		bgColor:  "#f24444",
		txtColor: "#ffffff",
	};	
	
	var _showMessage = function() {
		console.log("%c%s", "color: " + config.txtColor + "; background: " + config.bgColor +"; font-size: 11px; padding: 5px 2px; width: 100%;", ""+ config.message +"");
	};
	
	return {
		show: _showMessage,
	}
	
})();

// Initialize
JamonUi.show();

