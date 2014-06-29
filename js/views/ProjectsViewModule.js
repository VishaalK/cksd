define(['jquery','underscore', 'backbone','models/ProjectModule', 'views/ProjectViewModule', 'collections/ProjectsModule', 'text!templates/_ProjectsView.html'], 
function($, _, Backbone, Project, ProjectView, Projects, projectsViewTemplate) {
    var ProjectsView = Backbone.View.extend({
        template: _.template(projectsViewTemplate),

        initialize: function(options) {
            var $this = this;
            this.collection = options.collection;
            $this.render();

            this.listenTo(this.collection, 'add', this.addOne);
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
        },

        addOne: function(proj) {
            this.adjustCount(1);
            var view = new ProjectView({model: proj});
            view.render();
            this.$el.find('#ProjectsList').append(view.el);
            this.listenTo(view, 'delete', function() {
                this.adjustCount(-1);
            });
        },

        adjustCount: function(num) {
            var orig = this.$el.find('#numProjects').html();
            this.$el.find('#numProjects').html(parseInt(orig, 10) + num);
        },

        renderProjectAddModal: function() {
            console.log('modal nao bro');
            $('#myModal').modal('show');
        },
    });

    return ProjectsView;
});
