define(['jquery','underscore','backbone', 'text!templates/_NewProjectView.html', 'models/ProjectModule', 'collections/ProjectsModule'], 
function($, _, Backbone, projectViewTemplate, Project, Projects) {
	var NewProjectView = Backbone.View.extend({
		template: _.template(projectViewTemplate),
		className: 'container',

		events: {
			'click #addProject' : 'toggleView',
			'click #submit'		: 'addProject'
		},

		toggleView: function() {
			$('#newProjectForm').slideToggle();
		},

		initialize: function(options) {
			this.collection = options.collection;
			console.log(options.collection.addOne);
			this.render();
		},

		render: function() {
			var data = {};
			this.$el.html(this.template(data));
		},

		getValues: function() {
            var $this = this;
            var values = {
                'name'              : $('input[name=name]').val(),
                'description'       : $('textarea[name=description]').val(),
                'status'            : $('select[name=status]').val(),
                'siteLeader'        : $('input[name=siteLeader]').val(),
                'startTime'         : $('input[name=startTime]').val(),
                'endTime'           : $('input[name=endTime]').val(),
                'needsDriver'       : $('input[name=needsDriver]').is(':checked'),
                'dropIn'            : $('input[name=dropIn]').is(':checked'),
                'bigGroupFriendly'  : $('input[name=bigGroupFriendly]').is(':checked'),
                'maxSignups'        : $('input[name=maxSignups]').val()
            };
            // Parse and transform the user inputted values, 
            // We must prevent XSS by escaping relevant user input and then send it to the server
            // We could probably unescape it when we put it back
            // Model.validate() will take care of the rest    
            values.name = _.escape(values.name);
            values.description = _.escape(values.description);
            values.siteLeader = _.escape(values.siteLeader);

            values.maxSignups = parseInt(values.maxSignups, 10);
            return values;
        },

        addProject: function() {
        	console.log('addProject called');
            var $this = this;
            var proj = new Project(this.getValues());
            console.log($this.collection.addOne);
            proj.save(null, {
                success: function(model, response, options) {
                    $this.hideErrors();
                    $this.collection.addOne(proj); //has to be triggered on the parentView
                    $this.toggleView();
                    $('#createForm')[0].reset();
                },
                error: function(model, errors, options) {
                    console.log('errors');
                    alert('will twerk for food');
                }
            });
            if (proj.validationError) {
                $this.hideErrors();
                $this.showErrors(proj.validationError);
            }
        },

        showErrors: function(errors) {
            _.each(errors, function(error) {
                var sel = '[name=' + error.name + ']';
                console.log(error.message);
                $(sel).parent().parent().addClass('has-error');
            });
        },

        hideErrors: function() {
            $('.has-error').each(function(index, obj) {
                $(this).removeClass('has-error');
            });
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