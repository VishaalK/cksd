define(['jquery','underscore','backbone', 'text!templates/_ProjectView.html'], 
function($, _, Backbone, projectViewTemplate) {
	var ProjectView = Backbone.View.extend({
		className: 'row well',
		id: function() {
			return this.model.get('id');
		},

		initialize: function() {
			this.listenTo(this.model, 'destroy', this.remove);
		},

		events: {
			'click a.remove'		 	: 'clear',
		},

		render: function() {
			var compiledTemplate = _.template(projectViewTemplate);		
			this.$el.html(compiledTemplate(this.model.attributes));
			this.showStatus();		
		},

		// Status: one of 'closed' (gray), 'open' (green), 'full' (blue), 'cancelled' (orange)
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
			var $this = this;
			e.preventDefault();
			/*
			$('#7c3d0558-90fc-d4f9-e9c5-72061f7436bf').fadeTo('fast', 0.01, function() { $(this).slideUp('fast', function() { $(this).remove(); }); });
			*/
			if (confirm('Are you sure you want to delete this project?')) {
				$this.$el.fadeTo('fast', 0.01, function() {
					$this.$el.slideUp('fast', function() {
						$this.model.destroy();
					})
				});
			}
		}
	});
	return ProjectView;
});



