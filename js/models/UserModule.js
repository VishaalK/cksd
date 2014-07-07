define(['underscore', 'backbone'], 
function(_, $) {
	var User = Backbone.Model.extend({
		urlRoot: '_api/users/index.php/',

		defaults: {
			uniqname: undefined,
			firstName: undefined,
			lastName: undefined,
			willingToDrive: undefined,
			hasVehicle: undefined,
		}

	});

	return User;
});

