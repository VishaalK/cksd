define(['underscore', 'backbone', 'jquery', 'views/MRFQuestionView'], 
function(_, Backbone, $, MRFQuestionView) {
	var MRFQuestionsView = Backbone.View.extend({
		tagName: 'ul',
		className: 'list-unstyled',
		template: '<ul class="list-unstyled"></ul>',

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
