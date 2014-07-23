define(['underscore', 'jquery', 'Backbone', 'models/Committee', 'models/MRFQuestionModule'],
function(_, $, Backbone, Committee, MRFQuestion) {
	var MRFQuestionCommitteeView = Backbone.View.extend({
		tagName: 'li',
		template: 'Name: <%= committeeName %>, Req: <%= hourReq %>'
	});

	return MRFQuestionCommitteeView;
});