// Generated by CoffeeScript 1.7.1
(function() {
  define(['underscore', 'jquery', 'backbone', 'models/Committee', 'collections/Committees'], function(_, $, Backbone, Comittee, Committees) {
    var MRFQuestionCommitteesView;
    MRFQuestionCommitteesView = Backbone.View.extend({
      template: '<div class="col-md-10"></div><div class="col-md-2"><ul id="committee-view-list" class="list-unstyled pull-right"></ul></div>',
      initialize: function(options) {
        this.listenTo(this.collection, 'reset', this.render);
      },
      events: {
        'click li>a': 'selectItem'
      },
      loadDetailPage: function(id) {
        return console.log('loading detail page: ' + id);
      },
      selectItem: function(e) {
        var id;
        id = $(e.target).data('id');
        if (this.activeItem) {
          this.activeItem.removeClass('active');
        }
        this.activeItem = $(e.target).parent('li');
        this.activeItem.addClass('active');
        return this.loadDetailPage(id);
      },
      render: function() {
        var committeeView, compiledTemplate, container, data, self;
        self = this;
        data = {};
        compiledTemplate = _.template(this.template);
        this.$el.append(compiledTemplate(data));
        this.$el.find('.col-md-10').append(' Ello poppet. Ello poppet. Ello poppet.Ello poppet. Ello poppet.Ello poppet. Ello poppet. Ello poppet. v Ello poppet. Ello poppet. v v Ello poppet. v Ello poppet.');
        committeeView = Backbone.View.extend({
          template: _.template('<li><a data-id=<%= committeeID %>> <%= committeeName %> </a></li>'),
          render: function() {
            return this.$el.html(this.template(this.model.attributes));
          }
        });
        this.$el.find('ul').append('<li class="dropdown-header"> All da vinsss </li>');
        container = document.createDocumentFragment();
        $.each(this.collection.models, function(ind, obj) {
          self.$el.find('ul').append('<li><a data-id=' + obj.get('committeeID') + '>' + obj.get('committeeName') + '</a></li>');
        });
        this.$el.find('ul').append(container);
        this.$el.find('ul').css({
          'padding': '5px 10px',
          'whitespace': 'auto'
        });
      },
      remove: function() {
        this.$el.empty().off();
        this.stopListening();
        return this;
      }
    });
    return MRFQuestionCommitteesView;
  });

}).call(this);
