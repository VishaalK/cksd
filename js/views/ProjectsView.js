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
        values.maxSignups = parseInt(values.maxSignups, 10);
        return values;
    },

    /* Called to trigger default HTML5 data validation */
    validateData: function() {
        // Transforms the data 
        if (!$('input[name=maxSignups]')[0].checkValidity()) {
            alert('not valid');
            return false;
        }
        return true;
        //escape all data so when its reflected it cant do XSS
        // escape name
        // escape description
        // status is an enum so thats fine
        // siteLeader should be typeahead and escaped (checkedg)
        // startime validated against moment js
        // endtime validated against moment js
        // not way to screw up the checkboxes
        // maxSignups should be intval'd
    },

    addProject: function() {
        var $this = this;
        var proj = new Project(this.getValues());
        /*if (!this.validateData()) {
            console.log('did not pass form validation');
        }*/
        // two levels of validation, form validation and then model saving validatoin
        proj.save(null, {
            success: function(model, response, options) {
                console.log(proj.toJSON());
                $this.addOne(proj);
                console.log('success');
            },
            error: function(model, repsonse, options) {
                console.log('ERRORR ERROR ALERRTT');
                alert('will twerk for food');
            }
        });
    }
});

var projectsView = new ProjectsView();
//projectsView.render();