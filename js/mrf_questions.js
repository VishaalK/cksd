// var q = new MRFQuestion({ id: 1 });
// q.fetch({
// 	success: function() {
// 		var v = new MRFQuestionView({ model: q, el: $('#QuestionContainer') });
// 	}
// })
define(['jquery','underscore','backbone','collections/MRFQuestionsModule', 'views/MRFQuestionsViewModule'], 
function($, _, Backbone, MRFQuestions, MRFQuestionsView) {
	var initialize = function() {
		var c = new MRFQuestions().fetch({
			success: function(coll) {
				var cv = new MRFQuestionsView({ collection: coll, el: $('#ViewContainer') });
				cv.render();
			}
		});
	};

	return {
		initialize: initialize
	}
});
