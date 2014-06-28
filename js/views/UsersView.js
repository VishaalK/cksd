define(['jquery', 'underscore', 'backbone', 'models/User', 'collections/Users', 'views/UserView', 'text!templates/_UsersView.html'], 
function($, _, Backbone, User, Users, UserView, UsersTemplate) {
	var UsersView = Backbone.View.extend({
		template: _.template(UsersTemplate),

		initialize: function() {
			this.render();
		},

		render: function() {
			var data = {};
			this.$el.html(this.template(data));
		}
	});

	return UsersView;
});