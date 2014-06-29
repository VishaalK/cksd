define(['jquery', 'underscore', 'backbone', 'models/User', 'collections/Users', 'views/UserView', 'text!templates/_UsersView.html'], 
function($, _, Backbone, User, Users, UserView, UsersTemplate) {
	var UsersView = Backbone.View.extend({
		template: _.template(UsersTemplate),

		initialize: function() {
			this.render();
		},

		render: function() {
			var data = {};
            // $.each(this.collection, function(i, obj) { renderUser(obj)} ); 
            //render that shit
            this.$el.html(this.template(data));
		},

        renderUser: function(user) {
            var userView = new UserView({ model: user });
            userView.render();
            this.$el.find('#UsersList').append(userView.el);
        }
	});

	return UsersView;
});
