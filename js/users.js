define(['jquery','underscore','backbone', 'views/nav', 'routers/userRouter'], 
function($, _, Backbone, nav, UserRouter) {
	var initialize = function() {
		var navbar = new nav({ el: $('#NavbarContainer')});
		var router = new UserRouter();
	};

  	return {
    	initialize: initialize
  	};
});