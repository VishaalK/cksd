define(['underscore', 'jquery', 'backbone', 'collections/Committees', 'views/MRFQuestionCommitteeView'],
function(_, $, Backbone, Committees, MRFQuestionCommitteeView) {
	var MRFQuestionCommitteesView = Backbone.View.extend({
		template: '<ul id="committee-view-list" class="list-unstyled pull-right"></ul>',
		
		initialize: function(options) {
			this.listenTo(this.collection, 'reset', this.render);
			this.pathRoot = options.pathRoot;
		},

		// updates the detail view with the specified model from the collection
		selectItem: function(opts) {
			console.log('select triggered');
			console.log(opts);
			// Backbone.history.navigate('committee-view/' + id, { trigger: true });
		},

		render: function() {
			var self = this;
			var compiledTemplate = _.template(this.template);
			this.$el.append(compiledTemplate);
		},

		// render: function() {
		// 	var $this = this;
		// 	var data = {};
		// 	var compiledTemplate = _.template(this.template);
		// 	this.$el.append(compiledTemplate(data));

		// 	var container = document.createDocumentFragment();
		// 	var promises = [];
		// 	var self = this;
		// 	self.subviews = [];
		// 	//todo, split that shit up into internal and external committees
		// 	$.each(this.collection.models, function(ind, obj) {
		// 		var v = new MRFQuestionCommitteeView({ model: obj });
		// 		self.subviews.push(v);
		// 		var promise = v.render();
		// 		promises.push(promise);
		// 		$.when(promise).then(function() {
		// 			container.appendChild(v.el);
		// 		});
		// 	});

		// 	$.when.apply($, promises).then(function() {
		// 		$this.$el.find('ul').append('<li class="dropdown-header"> All da vinsss </li>');
		// 		$this.$el.find('ul').append(container);
		// 	});

		// 	//TODO: make this not inline, and done from the stylesheet itself
		// 	this.$el.find('ul').css({
		// 		'padding': '5px 10px',
		// 		'whitespace': 'auto'
		// 	});
		// },

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