var MRFQuestion = Backbone.Model.extend({
	urlRoot: '_api/mrf_questions/index.php/',

	initialize: function() {
		console.log('MRFQuestion initailized!');
	},

	parse: function(response) {
		response.active = parseInt(response.active, 10); // convert "0" -> 0, "1" -> 1
		return response;
	},

	deactivate: function() {
		this.save({ active: 0 });
	}
});