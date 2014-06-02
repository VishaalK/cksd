var ProjectsView = Backbone.View.extend({
	el: $('#ProjectsContainer'),

	initialize: function(options) {
		this.collection = options.collection;
	},

	render: function() {
		for (var i = 0; i < this.collection.length; i++) {
			var projView = new ProjectView({ model: this.collection.models[i] });
			projView.render();
			this.$el.append(projView.el);
		}
	},

	addOne: function(proj) {
      var view = new ProjectView({model: proj});
      this.$el.append(view.render().el);
    }
});

var projectsView = new ProjectsView({ collection: projects });
projectsView.render();