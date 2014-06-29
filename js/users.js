define(['jquery','underscore','backbone', 'views/nav', 'routers/userRouter', 'views/FooterModule', 'views/UsersView', 'collections/Users'], 
function($, _, Backbone, nav, UserRouter, Footer, UsersView, Users) {
	var initialize = function() {
		var navbar = new nav({ el: $('#NavbarContainer')});
		var router = new UserRouter();
		var footer = new Footer({ el: $('footer') });
        var users = new Users();
        users.fetch({
            success: function() {
                var usersView = new UsersView({ el: $('#UsersContainer'), collection: users });
            },
            error: function() {
                alert('error');
            }   
        });
		//var usersView = new UsersView({ el: $('#UsersContainer') });
	};

  	return {
    	initialize: initialize
  	};
});
