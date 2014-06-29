define(['underscore', 'backbone', 'backbone.localStorage', 'models/UserModule'], 
function(_, Backbone, three, User) {
	var Users = Backbone.Collection.extend({
		model: User,
        localStorage: new Backbone.LocalStorage("projects-backbone"),

		initialize: function() {
			console.log('Users Collections initialized');
		}
	});

    return Users;
});
