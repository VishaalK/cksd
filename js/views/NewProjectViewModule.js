define(['jquery','underscore','backbone', 'text!templates/_NewProjectView.html'], 
function($, _, Backbone, projectViewTemplate) {
	var NewProjectView = Backbone.View.extend({
		template: _.template(projectViewTemplate),
		className: 'container',
		

		initialize: function() {
			this.render();
		},

		render: function() {
			var data = {};
			this.$el.html(this.template(data));
		}

	});

	return NewProjectView;
});

/*
<div style="padding-bottom: 2px" class="row"> 
	<p> 
		<span class="pull-left"> List of Projects <span class="glyphicon glyphicon-fire"></span> </span> 
		<span class="pull-right"> 
			<button id="addProject"type=button class="btn btn-success"> Add a Project <span class="glyphicon glyphicon-plus"></span></button>
		</span> 
	</p>
</div>
*/