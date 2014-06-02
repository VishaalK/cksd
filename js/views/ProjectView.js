var ProjectView = Backbone.View.extend({
	//template: _.template($('#ProjectViewTemplate').html()),
	className: 'well',
	template: _.template('<b> <%= title %> </b>: <p> <%= description %> </p> Is drop in?: <%= (isDropIn) ? "Yes" : "No" %>'),

	events: {
		'dblclick' : 'edit' 
	},

	render: function() {
		console.log('render called');
		alert('clicks');
		this.$el.html(this.template(this.model.attributes));
	},

	edit: function(e) {
		e.preventDefault();
		console.log('edit for ' + this.model.get('title') + ' clicked');
	}

});

// var projectView = new ProjectView({ model: project, el: $('#ProjectsContainer') });
// projectView.render();

// var projectView2 = new ProjectView({ model: project2 });
// projectView2.render();
// console.log(projectView2.el);
//$('#ProjectsContainer').append(projectView2.render();

