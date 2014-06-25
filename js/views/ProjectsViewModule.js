define(['jquery','underscore', 'backbone','models/ProjectModule', 'views/ProjectViewModule', 'collections/ProjectsModule', 'text!templates/_ProjectsView.html'], 
function($, _, Backbone, Project, ProjectView, Projects, projectsViewTemplate) {
    var ProjectsView = Backbone.View.extend({
        template: _.template(projectsViewTemplate),

        initialize: function(options) {
            var $this = this;
            this.collection = options.collection;
            $this.render();
            /*this.collection.fetch({
                success: function(model, response, options) {
                    $this.render();
                }
            });*/
            /*$('#submit').on('click', function(e) {
                e.preventDefault();
                $this.addProject();
            });*/
        },

        events: {
            'click #addProject'   : 'renderForm'
        },

        render: function() {
            var data = {
                numProjects: this.collection.length
            };
            var $this = this;
            this.$el.html(this.template(data));
            $.each(this.collection.models, function(index, model) {
                $this.addOne(model);
            });
            /*for (var i = 0; i < this.collection.length; i++) {
                var projView = new ProjectView({ model: this.collection.models[i] });
                projView.render();
                this.$el.find('#ProjectsList').append(projView.el);
            }*/
        },

        addOne: function(proj) {
            console.log('addOne called');
            var view = new ProjectView({model: proj});
            view.render();
            this.$el.find('#ProjectsList').append(view.el);
        },

        renderProjectAddModal: function() {
            console.log('modal nao bro');
            $('#myModal').modal('show');
        },
    });

    return ProjectsView;
});