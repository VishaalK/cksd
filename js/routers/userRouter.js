define(['jquery', 'underscore', 'backbone'], 
function($, _, Backbone) {
	var UserRouter = Backbone.Router.extend({
		initialize: function() {
			Backbone.history.start({ root: '~vishaal/cksd/users_beta.php'});
		},

		routes: {
			"users/:id" : 'userById',
		},
			

		userById: function(actions) {
			console.log(actions);
			console.log('user ' + actions);
		},

	});

	return UserRouter;
});