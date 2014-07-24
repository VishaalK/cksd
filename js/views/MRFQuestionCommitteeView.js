define(['underscore', 'jquery', 'backbone', 'models/Committee', 'models/MRFQuestionModule'],
function(_, $, Backbone, Committee, MRFQuestion) {
	var MRFQuestionCommitteeView = Backbone.View.extend({
		tagName: 'li',
		template: '<a href="#"> <%= committeeName %> </a>',
		id: 'committee-view-list',

		initialize: function() {
			this.listenTo(this.model, 'sync', this.render);
		},

		render: function() {
			console.log('before');
			var compiledTemplate = _.template(this.template);
			return this.$el.html(compiledTemplate(this.model.attributes));
			console.log('after');
		}
	});

	return MRFQuestionCommitteeView;
});