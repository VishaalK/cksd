var MRFQuestions = Backbone.Collection.extend({
	model: MRFQuestion,
	url: '_api/mrf_questions/index.php',

	/* Returns only the question that are currently marked active */
	active: function() {
		return this.filter(function(MRFQuestion) { return MRFQuestion.get('active'); })
	},

	lerty: function(e) {
		console.log('lerty');
	},

	

	initialize: function() {
		console.log('MRFQuestions initialized');
	}
})