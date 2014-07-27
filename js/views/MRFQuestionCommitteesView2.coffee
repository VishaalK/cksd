define ['underscore', 'jquery', 'backbone',
		'models/Committee', 'collections/Committees'], 
		(_, $, Backbone, Comittee, Committees) ->
			MRFQuestionCommitteesView = Backbone.View.extend {
				template: '<div class="col-md-10"></div><div class="col-md-2"><ul id="committee-view-list" class="list-unstyled pull-right"></ul></div>',
				initialize: (options) ->
					this.listenTo(this.collection, 'reset', this.render)
					return

				events: {
					'click li>a' : 'selectItem'
				},

				loadDetailPage: (id) ->
					console.log('loading detail page: ' + id);

				selectItem: (e) ->
					id = $(e.target).data('id')
					if this.activeItem
						this.activeItem.removeClass('active')
					this.activeItem = $(e.target).parent('li')
					this.activeItem.addClass('active')		
					this.loadDetailPage(id)			

				render: ->
					self = this
					data = {}
					compiledTemplate = _.template this.template
					this.$el.append(compiledTemplate(data))
					this.$el.find('.col-md-10').append(' \
						Ello poppet. Ello poppet. Ello poppet.Ello poppet. Ello poppet.Ello poppet. \
						Ello poppet. Ello poppet. v Ello poppet. Ello poppet. v v Ello poppet. v Ello poppet.')


					committeeView = Backbone.View.extend {
						template: _.template('<li><a data-id=<%= committeeID %>> <%= committeeName %> </a></li>')
						render: -> 
							this.$el.html(this.template(this.model.attributes))
					}
					this.$el.find('ul').append('<li class="dropdown-header"> All da vinsss </li>');

					container = document.createDocumentFragment()
					$.each(this.collection.models, (ind, obj) ->
						self.$el.find('ul').append('<li><a data-id=' + obj.get('committeeID') + '>' +  obj.get('committeeName') + '</a></li>');
						return
					)

					this.$el.find('ul').append(container);

					this.$el.find('ul').css {
						'padding' : '5px 10px',
						'whitespace' : 'auto'
					}
					return

				remove: -> 
					this.$el.empty().off();
					this.stopListening();
					this
			}

			return MRFQuestionCommitteesView;


