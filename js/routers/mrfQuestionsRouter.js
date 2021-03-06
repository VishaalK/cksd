define(['jquery','underscore','backbone','collections/MRFQuestionsModule', 'collections/Committees',
        'views/MRFQuestionsViewModule', 'views/MRFQuestionCommitteesView2', 'bootstrap', 'bootstrap-editable'], 
function($, _, Backbone, MRFQuestions, Committees, MRFQuestionsView, MRFQuestionsCommitteesView){
    var AppRouter = Backbone.Router.extend({
        routes: {
          // Define some URL routes
          ''                : 'home',
          'question-view'   : 'home',
          'committee-view(/:committeeId)'  : 'committeeView',
        },

        initialize: function() {
            this.route = window.location.pathname;
            $.fn.editable.defaults.mode = 'inline';
            var $this = this;

            $('.nav-tabs a').click(function (e) {
                // No e.preventDefault() here
                $(this).tab('show');
            });

            $('#close').click('click', function(e) {
                console.log('closing da views');
                if ($this.view) {
                    if ($this.view.close) {
                        $this.view.close();
                    } else {
                        $this.view.remove();
                    }
                }
            });
        },

        home: function() {
            var $this = this;
            var prom = new MRFQuestions().fetch({
                success: function(coll) {
                    $this.loadView(new MRFQuestionsView({ collection: coll, el: $('#ViewContainer'), pathRoot: $this.route }) );
                }
            });
        },

        committeeView: function(committeeId) {
            var id = parseInt(committeeId, 10);
            console.log(id);
            var self = this;
            var c = new Committees();
            c.fetch({
                success: function(data) {
                    var x = self.loadView(new MRFQuestionsCommitteesView({ collection: c, el: $('#Container2'), pathRoot: self.route }));               
                    $.when(x).then(function() {
                        self.view.loadDetailPage(5);
                    });
                }
            });
        },

        loadView: function(view) {
            this.view && this.view.remove();
            this.view = view;
            return this.view.render();
        }
    });

    var initialize = function(){
        var app_router = new AppRouter;Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});