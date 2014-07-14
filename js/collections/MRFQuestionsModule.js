define(['underscore', 'Backbone', 'models/MRFQuestionModule'], function(_, $, MRFQuestion) {
	var MRFQuestions = Backbone.Collection.extend({
		model: MRFQuestion,
		url: '_api/mrf_questions/index.php',

		lerty: function(e) {
			console.log('lerty');
		},

		initialize: function() {
			console.log('MRFQuestions initialized');
		}
	});

	return MRFQuestions;
});