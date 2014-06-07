var ProjectsView = Backbone.View.extend({
	template: _.template('<div id="#ProjectsList"> </div> <div style="padding-bottom: 2px" class="row"> \
		<p> <span class="pull-left"> List of Projects <span class="glyphicon glyphicon-fire"></span> </span> <span class="pull-right"> Add a Project <a class="glyphicon glyphicon-plus" id="addProject"></a></span> </p></div>'),
	el: $('#ProjectsContainer'),

	initialize: function(options) {
		var $this = this;
		this.collection = new Projects();
		this.collection.fetch({
			success: function(model, response, options) {
				console.log(model.toJSON());
				$this.render();
			}
		});
	},

	events: {
		"click #addProject" : 'renderProjectAddModal'
	},

	render: function() {
		this.$el.html(this.template());
		for (var i = 0; i < this.collection.length; i++) {
			var projView = new ProjectView({ model: this.collection.models[i] });
			projView.render();
			this.$el.append(projView.el);
		}
	},

	addOne: function(proj) {
  		var view = new ProjectView({model: proj});
    	this.$el.append(view.render().el);
    },

    renderProjectAddModal: function() {
    	console.log('modal nao bro');
    	$('#myModal').modal('show');
    }
});

var projectsView = new ProjectsView();
//projectsView.render();