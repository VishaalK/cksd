var ProjectView = Backbone.View.extend({
	//template: _.template($('#ProjectViewTemplate').html()),
	className: 'well',
	template: _.template('<b> <%= title %> </b>: <p> <%= description %> </p> Is drop in?: <%= (isDropIn) ? "Yes" : "No" %>'),

	render: function() {
		console.log('render called');
		this.$el.html(this.template(this.model.attributes));
	}

});

//var projectView = new ProjectView({ model: project, el: $('#ProjectsContainer') });
//projectView.render();
