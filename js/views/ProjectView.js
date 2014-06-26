var ProjectView = Backbone.View.extend({
	//template: _.template($('#ProjectViewTemplate').html()),
	//template: _.template('<b>  <%= name %> </b>: <p> <%= description %> </p>  Is drop in?: <%= (isDropIn) ? "Yes" : "No" %>'),
	
	className: 'row well',
	id: function() {
		return this.model.get('id');
	},
	template: _.template('<div class="col-md-1"> <a class="pull-left" href="#"> <img class="media-object" src="http://placehold.it/64x64"> </a></div><div class="col-md-9"> \
								<b><%= name %></b> <span name="status" class="label"><%= status %></span> \
								<p><%= description %></p> \
								<p>Start Time: <%= startTime %> - End Time: <%= endTime %> </p> \
						</div> \
						<div class="col-md-1"> \
							<% if (needsDriver) { %> <i class="fa fa-car fa-lg"></i> <% } %> \
							<a id="#remove" class="remove"><span class="glyphicon glyphicon-remove"></span></a> \
						</div><div class="col-md-1"></div>'),

	initialize: function() {
		this.listenTo(this.model, 'destroy', this.remove);
	},

	// status: one of 'closed' (gray), 'open' (green), 'full' (blue), 'cancelled' (orange)
	events: {
		'click a.remove'		 	: 'clear',
	},

	render: function() {
		this.$el.html(this.template(this.model.attributes));
		this.showStatus();		
	},

	showStatus: function() {
		var label = this.$el.find('[name=status]');
		switch(this.model.get('status')) {
			case 'open':
				label.addClass('label-success');
				break;
			case 'closed':
				label.addClass('label-default');
				break;
			case 'full':
				label.addClass('label-primary');
				break;
			case 'cancelled':
				label.addClass('label-warning');
				break;
			default:
				alert('undefined status for project');
				break;
		}
	},

	edit: function(e) {
		e.preventDefault();
		console.log('edit for ' + this.model.get('name') + ' clicked');
	},

	clear: function(e) {
		//delete the Project from
		var $this = this;
		e.preventDefault()
		this.trigger('delete'); //
		if (confirm('Are you sure you want to delete this project?')) {
			$this.$el.fadeTo('fast', 0.01, function() {
				$this.$el.slideUp('fast', function() {
					$this.model.destroy();
				})
			});
		}
	}

});

