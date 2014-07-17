define(['underscore', 'backbone', 'models/MRFQuestionModule'], function(_, $, MRFQuestion) {
	var MRFQuestions = Backbone.Collection.extend({
		model: MRFQuestion,
		url: '_api/mrf_questions/index.php',

		active: function() {
			return this.filter(function(MRFQuestion) { return MRFQuestion.get('active'); })
		},
		
		lerty: function(e) {
			console.log('lerty');
		},

		initialize: function() {
			console.log('MRFQuestions initialized');
		}
	});

	return MRFQuestions;
});
