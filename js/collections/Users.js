define(['underscore', 'backbone', 'models/User'], 
function(_, Backbone, User) {
	var Users = Backbone.Collection.extend({
		model: User,

		initialize: function() {
			console.log('Users Collections initialized');
		}
	});
	return Users;
});