var MRFQuestion = Backbone.Model.extend({
	urlRoot: '_api/mrf_questions/index.php/',

	initialize: function() {
		console.log('MRfQuestion initailized!');
	},

	deactivate: function() {
		this.save({ active: 0 });
	}
});