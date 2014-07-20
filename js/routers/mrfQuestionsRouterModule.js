define(['jquery','underscore','backbone', 'routers/mrfQuestionsRouter'],
function($, _, Backbone, MRFQuestionsRouter) {
	var initialize = function() {
		Router.initialize();
	};

	return {
		initialize: initialize
	}
});