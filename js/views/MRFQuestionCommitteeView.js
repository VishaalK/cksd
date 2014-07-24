define(['underscore', 'jquery', 'backbone', 'models/Committee', 'models/MRFQuestionModule'],
function(_, $, Backbone, Committee, MRFQuestion) {
	var MRFQuestionCommitteeView = Backbone.View.extend({
		tagName: 'li',
		template: 'Name: <%= committeeName %>, Req: <%= hourReq %>',

		initialize: function() {
			console.log('single question committee view initialized');
		},

		render: function() {
			var compiledTemplate = _.template(this.template);
			var data = {};
			this.$el.html(compiledTemplate(data));
		}
	});

	return MRFQuestionCommitteeView;
});