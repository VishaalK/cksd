define(['underscore', 'backbone'], 
function(_, Backbone) {
	var MRFQuestion = Backbone.Model.extend({
		urlRoot: '_api/mrf_questions/index.php/',

		defaults: {
			text: '',
			active: 1
		},

		initialize: function() {

		},

		parse: function(response) {
			response.active = parseInt(response.active, 10);
			return response;
		},

		deactivate: function() {
			this.save({ active: 0 });
		}
	});

	return MRFQuestion;
});
