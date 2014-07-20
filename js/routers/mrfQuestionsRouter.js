define(['jquery','underscore','backbone','collections/MRFQuestionsModule', 'views/MRFQuestionsViewModule', 'bootstrap', 'bootstrap-editable'], 
function($, _, Backbone, MRFQuestions, MRFQuestionsView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '': 'home',
      'question-view': 'home',
      'committee-view': 'committeeView'
    },

    initialize: function() {
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

        $('#close').button('click', function(e) {
            if ($this.view) {
                $this.view.close();
            }
        });
    },

    home: function() {
        $.fn.editable.defaults.mode = 'inline';

        if (this.view) {
            console.log('already exists');
            return;
        }
        var $this = this;
        var cv;
        // create an overarching view here ?
        var prom = new MRFQuestions().fetch({
            success: function(coll) {
                cv = new MRFQuestionsView({ collection: coll, el: $('#ViewContainer') });
                cv.render();
            }
        });

        $.when(prom).then(function() {
            $this.view = cv;
        });

    },

    committeeView: function() {
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