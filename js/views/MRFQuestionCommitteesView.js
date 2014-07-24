define(['underscore', 'jquery', 'backbone', 'collections/Committees', 'views/MRFQuestionCommitteeView'],
function(_, $, Backbone, Committees, MRFQuestionCommitteeView) {
	var MRFQuestionCommitteesView = Backbone.View.extend({
		template: '<ul class="list-unstyled pull-right"></ul>',
		
		initialize: function() {
			this.listenTo(this.collection, 'reset', this.render);
			console.log('initialized');
		},

		render: function() {
			var $this = this;
			var data = {};
			var compiledTemplate = _.template(this.template);
			this.$el.append(compiledTemplate(data));

			console.log('rendering');
			var container = document.createDocumentFragment();
			var promises = [];
			$.each(this.collection.models, function(ind, obj) {
				console.log(obj);
				var v = new MRFQuestionCommitteeView({ model: obj });
				var promise = v.render();
				promises.push(promise);
				$.when(promise).then(function() {
					container.appendChild(v.el);
				});
			});

			$.when.apply($, promises).then(function() {
				$this.$el.find('ul').append(container);
			});

			this.$el.find('ul').css({
				'padding': '5px 10px',
				'whitespace': 'auto'
			});
		},

		remove: function() {
			this.$el.empty().off();
            this.stopListening();
            return this;
		},

		renderOne: function(committee) {
			console.log('yolo');
		}
	});

	return MRFQuestionCommitteesView;
});