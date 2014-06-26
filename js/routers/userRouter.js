define(['jquery', 'underscore', 'backbone'], 
function($, _, Backbone) {
	var UserRouter = Backbone.Router.extend({
		initialize: function() {
			Backbone.history.start({ pushState: true });
		},

		routes: {
			'*actions': 'userById',
			'view': function() {
				console.log('view');
			}
		},

		userById: function(actions) {
			console.log('user ' + actions);
		},

	});

	return UserRouter;
});