define(['underscore', 'backbone', 'backbone.localStorage', 'models/UserModule'], 
function(_, Backbone, three, User) {
	var Users = Backbone.Collection.extend({
		model: User,

		initialize: function() {
			console.log('Users Collections initialized');
		}
	});

    return Users;
});
