define(['underscore', 'jquery', 'backbone', 'models/Committee', 'models/MRFQuestionModule'],
function(_, $, Backbone, Committee, MRFQuestion) {
	var MRFQuestionCommitteeView = Backbone.View.extend({
		tagName: 'li',
		template: '<a data-id=<%= committeeID %>> <%= committeeName %> </a>',

		events: {
			'click' : 'handleSelect'
		},

		handleSelect: function(e) {
			this.select();	
			this.model.trigger('selected', this.model.id);
		},

		select: function() {
			this.$el.addClass('active');
		},

		deselect: function() {
			this.$el.removeClass('active');
		},

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