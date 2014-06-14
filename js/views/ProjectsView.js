var ProjectsView = Backbone.View.extend({
	template: _.template('<div id="#ProjectsList"> </div> <div style="padding-bottom: 2px" class="row"> \
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
			$this.addProject(e);
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

    getValues: function(e) {
        e.preventDefault();
        var $this = this;
        return values = {
            'name'          : $('input[name=name]').val(),
            'description'   : $('textarea[name=description]').val(),
            'status'        : $('select[name=status]').val(),
            'siteLeader'    : $('input[name=siteLeader]').val(),
            'startTime'     : $('input[name=startTime]').val(),
            'endTime'       : $('input[name=endTime]').val()
        };
    }

    addProject: function(e) {
    	console.log('addProject called');
    	var $this = this;
    	e.preventDefault();
    	// Get values from form, create new model, push to server, on successful sync, render it
    	var name = $('input[name=name]').val();
    	console.log(name);
    	var description = $('textarea[name=description]').val();
    	var status = $('select[name=status]').val();
    	console.log(description);
    	console.log(status);
    	var proj = new Project({ title: name, description: description, status: status });
    	proj.save(null, {
    		success: function(model, response, options) {
    			//$this.addOne(model);
    			console.log(proj.toJSON());
    			$this.addOne(proj);
    			console.log('success');
    		},
    		error: function(model, response, options) {
    			console.log('There was an error saving the project to local storage...');
    		}
    	})
    }
});

var projectsView = new ProjectsView();
//projectsView.render();