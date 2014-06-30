define([ //Use the shims to make sure they load in the correct order
	'jquery','underscore','backbone',
	'bootstrap'
	], 
function($, _, Backbone) {
	var initialize = function() {
		// Initialize all views on the page and let them do their thing
		var navbar = new nav({ el: $('#NavbarContainer')});
		var footerView = new Footer({ el: $('footer') });
	}

  	return {
    	initialize: initialize
  	};
});