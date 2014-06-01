var ProjectView = Backbone.View.extend({
	//template: _.template($('#ProjectViewTemplate').html()),
	template: _.template('<b> <%= name %> </b>: <p> <%= description %> </p> <br> Is drop in?: <%= (isDropIn) ? "Yes" : "No" %>'),

	render: function() {
		this.$el.html(this.template(this.model.attributes));
	}

});

var projectView = new ProjectView({ model: project });
projectView.render();
$('#')