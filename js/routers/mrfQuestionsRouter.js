define(['jquery','underscore','backbone','collections/MRFQuestionsModule', 'collections/Committees',
        'views/MRFQuestionsViewModule', 'views/MRFQuestionCommitteesView', 'bootstrap', 'bootstrap-editable'], 
function($, _, Backbone, MRFQuestions, Committees, MRFQuestionsView, MRFQuestionsCommitteesView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      ''                : 'home',
      'question-view'   : 'home',
      'committee-view'  : 'committeeView'
    },

    initialize: function() {
        $.fn.editable.defaults.mode = 'inline';
        var $this = this;
        $('#question-tab').on('click', function(e) {
            console.log('question-tab');

        });

        $('#committee-tab').on('click', function(e) {
            console.log('committee-tab');
        });

    $('.nav-tabs a').click(function (e) {
            // No e.preventDefault() here
            $(this).tab('show');
        });

        $('#close').click('click', function(e) {
            console.log('closing da views');
            if ($this.view) {
                $this.view.close();
            }
        });
    },

    home: function() {
        var $this = this;
        var prom = new MRFQuestions().fetch({
            success: function(coll) {
                $this.loadView(new MRFQuestionsView({ collection: coll, el: $('#ViewContainer') }) );
            }
        })
        // create an overarching view here ?
        // var prom = new MRFQuestions().fetch({
        //     success: function(coll) {
        //         cv = new MRFQuestionsView({ collection: coll, el: $('#ViewContainer') });
        //         cv.render();
        //     }
        // });

        // $.when(prom).then(function() {
        //     $this.view = cv;
        // });

    },

    committeeView: function() {
        // var View = Backbone.View.extend({
        //     template: '<div class="jumbotron"> \
        //                     <h1>Hello, world!</h1> \
        //                     <p> This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information. </p> \
        //                     <p><a class="btn btn-primary btn-lg" role="button">Learn more</a></p> \
        //                 </div>',

        //     render: function() {
        //         var compiledTemplate = _.template(this.template);
        //         var data = {};
        //         this.$el.append(compiledTemplate(data));
        //     },
        //     remove: function() {
        //         this.$el.empty().off();
        //         this.stopListening();
        //         return this;
        //     }
        // });
        var self = this;
        var c = new Committees();
        c.fetch({
            success: function(data) {
                self.loadView(new MRFQuestionsCommitteesView({ collection: c, el: $('#Container2') }));               
            }
        });
    },

    loadView: function(view) {
        this.view && this.view.remove();
        this.view = view;
        this.view.render();
    }

  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});