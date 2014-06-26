define(['underscore', 'backbone'], 
function(_, $) {
	var User = Backbone.Model.extend({
		defaults: {
			uniqname: undefined,
			firstName: undefined,
			lastName: undefined,
			willingToDrive: undefined,
			hasCar: undefined,
		},
	});

	return User;
});

