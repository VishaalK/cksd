define(['underscore', 'backbone', 'jquery', 'views/MRFQuestionView', 'models/MRFQuestion'], 
function(_, Backbone, $, MRFQuestionView) {
	var MRFQuestionsView = Backbone.View.extend({
		// tagName: 'ul',
		className: 'list-unstyled',
		template: '<ul class="list-unstyled"></ul><a id="add-question">Add Question</a> \
					<div style="display: none;" id="new-question-form"><input  id="new-question-input"></input> \
					<button class="btn btn-sm btn-primary" type=button id="submit-question">Submit</button></div>',

		events: {
			'click #add-question': 'lerty'
		},

		lerty: function(e) {
			console.log('lerty');
			$('#new-question-form').slideToggle('fast');
		},

		render: function() {
			var $this = this;
			var compiledTemplate = _.template(this.template);
			$this.$el.html(compiledTemplate);
			// this.$el.html(this.el);
			$.each(this.collection.models, function(ind, obj) {
				console.log(obj);
				var v = new MRFQuestionView({ model: obj });
				var promise = v.render();
				$.when(promise).then(function() {
					$this.$el.find('ul').append(v.el);
				});
			})
		}
	});
	return MRFQuestionsView;
});
