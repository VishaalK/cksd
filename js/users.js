define(['jquery','underscore','backbone', 'views/nav', 'routers/userRouter', 'views/FooterModule', 'views/UsersView'], 
function($, _, Backbone, nav, UserRouter, Footer, UsersView) {
	var initialize = function() {
		var navbar = new nav({ el: $('#NavbarContainer')});
		var router = new UserRouter();
		var footer = new Footer({ el: $('footer') });
		var users = new UsersView({ el: $('#UsersContainer') });
	};

  	return {
    	initialize: initialize
  	};
});