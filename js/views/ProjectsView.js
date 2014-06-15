var ProjectsView = Backbone.View.extend({
	template: _.template('<div id="#ProjectsList"> \
        <div class="panel panel-default" style="width: 200px"> \
          <div class="panel-heading">Panel heading without title</div> \
          <div class="panel-body"> \
            Panel content  \
          </div> \
        </div> \
        </div> <div style="padding-bottom: 2px" class="row"> \
		<p> <span class="pull-left"> List of Projects <span class="glyphicon glyphicon-fire"></span> </span> <span class="pull-right"> <button id="addProject" type=button class="btn btn-success">Add a Project <span class="glyphicon glyphicon-plus"></span></button></span> </p></div>'),
	el: $('#ProjectsContainer'),

	initialize: function(options) {
		var $this = this;
		this.collection = new Projects();
		this.collection.fetch({
			success: function(model, response, options) {
				//console.log(model.toJSON());
				$this.render();
			}
		});
		$('#submit').on('click', function(e) {
            e.preventDefault();
			$this.addProject();
		});
	},

	events: {
		'click #addProject'   : 'renderForm'
		//"click #addProject" : 'renderProjectAddModal'
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
  		view.render();
    	this.$el.append(view.el);
    },

    renderProjectAddModal: function() {
    	console.log('modal nao bro');
    	$('#myModal').modal('show');
    },

    renderForm: function() {
    	$('#newProjectForm').removeClass('hidden');
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
        var startTime = $('input[name=start')

        values.maxSignups = parseInt(values.maxSignups, 10);
        console.log(values.maxSignups);
        return values;
    },

    addProject: function() {
        var $this = this;
        var proj = new Project(this.getValues());
        proj.save(null, {
            success: function(model, response, options) {
                $this.hideErrors();
                console.log(proj.toJSON());
                $this.addOne(proj);
                console.log('success');
            },
            error: function(model, errors, options) {
                console.log('errors');
                alert('will twerk for food');
            }
        });
        if (proj.validationError) {
            console.log(proj.validationError);
            $this.showErrors(proj.validationError);
        }

    },

    showErrors: function(errors) {
        _.each(errors, function(error) {
            var sel = '[name=' + error.name + ']';
            console.log('selector: ' + sel)
            $(sel).parent().parent().addClass('has-error');
        });
    },

    hideErrors: function() {
        $('.has-error').each(function(index, obj) {
            $(this).removeClass('has-error');
        });
    }
});

var projectsView = new ProjectsView();
//projectsView.render();