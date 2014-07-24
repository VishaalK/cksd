define(['underscore', 'jquery', 'backbone', 'models/Committee', 'models/MRFQuestionModule'],
function(_, $, Backbone, Committee, MRFQuestion) {
	var MRFQuestionCommitteeView = Backbone.View.extend({
		tagName: 'li',
		template: 'Name: <%= committeeName %>, Req: <%= hourReq %>',

		initialize: function() {
			this.listenTo(this.model, 'sync', this.render);
		},

		render: function() {
			var compiledTemplate = _.template(this.template);
			return this.$el.html(compiledTemplate(this.model.attributes));
		}
	});

	return MRFQuestionCommitteeView;
});