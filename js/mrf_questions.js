// var q = new MRFQuestion({ id: 1 });
// q.fetch({
// 	success: function() {
// 		var v = new MRFQuestionView({ model: q, el: $('#QuestionContainer') });
// 	}
// })

var c = new MRFQuestions().fetch({
	success: function(coll) {
		var cv = new MRFQuestionsView({ collection: coll, el: $('#ViewContainer') });
		cv.render();
	}
});
