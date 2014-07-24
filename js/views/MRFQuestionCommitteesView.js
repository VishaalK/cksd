define(['underscore', 'jquery', 'backbone', 'collections/Committees', 'views/MRFQuestionCommitteeView'],
function(_, $, Backbone, Committees, MRFQuestionCommitteeView) {
	var MRFQuestionCommitteesView = Backbone.View.extend({
		template: '<ul> <li> Nerds </li> </ul>',
		
		initialize: function() {
			this.listenTo(this.collection, 'reset', this.render);
		},

		render: function() {
			var $this = this;
			var compiledTemplate = _.template(this.template)({});
			this.$el.append(compiledTemplate);

			// var container = document.createDocumentFragment();
			// var promises = [];
			// $.each(this.collection, function(ind, obj) {
			// 	var v = new MRFQuestionCommitteeView({ model: obj });
			// 	var promise = v.render();
			// 	promises.push(promise);
			// 	$.when(promise).then(function() {
			// 		container.appendChild(v.el);
			// 	});
			// });

			// $.when.apply($, promises).then(function() {
			// 	$this.$el.find('ul').append(container);
			// });
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