var ProjectView = Backbone.View.extend({
	//template: _.template($('#ProjectViewTemplate').html()),
	//template: _.template('<b>  <%= title %> </b>: <p> <%= description %> </p>  Is drop in?: <%= (isDropIn) ? "Yes" : "No" %>'),
	
	className: 'row info',
	template: _.template('<div class="media" style="padding: 4px 4px;"> <a class="pull-left" href="#"> <img class="media-object" src="http://placehold.it/64x64"> </a> \
							<div class="media-body"> \
								<h6 class="media-heading"> <%= title %> </h6> <div class="pull-right"> hello </div>\
								<%= description %> \
								<div class="pull-right"> \
								Is Drop In? <%= (isDropIn) ? "Yes" : "No" %> <br> \
								Max Signups: <%= maxSignups %> \
								</div> \
							</div> \
							</div>'),
	template: _.template('<div class="media" style="padding: 4px 4px;"> <a class="pull-left" href="#"> <img class="media-object" src="http://placehold.it/64x64"> </a> \
							<div class="media-body"> \
								<div class="col-md-8"> \
									<b><%= title %></b><br> \
									<p><%= description %></p> \
								</div> \
								<div class="col-md-2"> \
									<%= maxSignups %> \
								</div> \
							</div> \
						</div>'),

	//template: _.template('<div class="col-md-2">  Is Drop In?: <%= (isDropIn) ? "Yes" : "No" %> <p> maxSignups: <%= maxSignups %> </p></div><div class="col-md-10"> <%= title %> </b>: <p> <%= description %> </p> </div>'),

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

