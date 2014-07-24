define(['underscore', 'jquery', 'backbone', 'collections/Committees', 'views/MRFQuestionCommitteeView'],
function(_, $, Backbone, Committees, MRFQuestionCommitteeView) {
	var MRFQuestionCommitteesView = Backbone.View.extend({
		template: '<ul> </ul>',
		
		initialize: function() {
			console.log('committees view initialized');
		},

		render: function() {
			var data = {};
			var compiledTemplate = _.template(this.template);
			this.$el.html(compiledTemplate(data));
		},

		renderOne: function(committee) {
		
		}
	});

	return MRFQuestionCommitteesView;
});