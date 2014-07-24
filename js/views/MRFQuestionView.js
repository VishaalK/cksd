define(['jquery', 'underscore', 'backbone', 'models/MRFQuestionModule', 'text!templates/_MRFQuestionView.html', 'bootstrap-editable'],
function($, _, Backbone, MRFQuestion, mrfQuestionTemplate) {
	

	var MRFQuestionView = Backbone.View.extend({
		template: mrfQuestionTemplate,
		tagName: 'li',
		className: 'well',

		initialize: function() {
			// Remove this model if the question is deactivated
			this.listenTo(this.model, 'sync', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
			this.input = this.$el.find('span[name=drop]');
		},

		events: {
			'click span[name=drop]'		: 	'toggleDropdown',
			'click td' 					:   'toggleActiveQuestion',
			'click button[name=delete]' : 	'deactivateQuestion',
			'click span[name=edit]'		: 	'edit',
			'click img[name=internal]' 	:   'toggleInternalQuestions',
			'click img[name=external]'  :   'toggleExternalQuestions'
		},

		edit: function(e) {
			//$('span[name=edit]').ed
			var $el = this.$el;
			// this.$el.find('span[name=edit]').click(function(e) {
			//     e.stopPropagation();
			//     $el.find('span[name=drop]').editable('toggle');
			// });
			// $('span[name=edit]').editable({
			// 	type: 'text',
			// 	pk: 1,
			// 	selector: 'span[name-drop]'
			// });
		},

		deactivateQuestion: function(e) {
			if (!confirm('Are you sure you want to deactive this question?')) {
				return;
			}
			this.model.deactivate(); // this.model.save({ active: 0 });
		},

		toggleActiveQuestion: function(e) {
			var commmitteeId = $(e.target).data('id'); // post a request
			var MRFQuestionRel = Backbone.Model.extend({
				urlRoot: '_api/mrf_questions/index.php/' + this.model.get('id') + '/active/',
			});
			
			var isActive = $(e.target).hasClass('active');
			if (isActive) {
				var test = new MRFQuestionRel({ id: $(e.target).data('id') });
				test.destroy();
			} else {
				var test = new MRFQuestionRel();
				test.set('_id', $(e.target).data('id'));
				test.save();
			}
			$(e.target).toggleClass('active');
		},

		deactivateCommittee: function(com) {
			var MRFQuestionRel = Backbone.Model.extend({
				urlRoot: '_api/mrf_questions/index.php/' + this.model.get('id') + '/active/',
			});
			var test = new MRFQuestionRel({ id: com.committeeID });
			test.destroy();	
			this.$el.find('[data-id=' + com.committeeID + ']').removeClass('active');
		},

		activateCommittee: function(com) {
			var MRFQuestionRel = Backbone.Model.extend({
				urlRoot: '_api/mrf_questions/index.php/' + this.model.get('id') + '/active/',
			});
			var test = new MRFQuestionRel();
			test.set('_id', com.committeeID);
			test.save();
			this.$el.find('[data-id=' + com.committeeID + ']').addClass('active');
		},

		// circle is a 
		toggleCircleQuestions: function(circle) {
			if (!this.$el.find('div[name=committees]').is(':visible')) {
				return;
			}
			var $this = this;
			var committees = this.model.get('committees');
			var atleastOneActive = _.find(committees, function(com) {
				return com.circle === circle && $this.$el.find('[data-id=' + com.committeeID + ']').hasClass('active');
			});

			if (atleastOneActive) {
				$.each(committees, function(ind, com) {
					if (com.circle === circle) { 
						$this.deactivateCommittee(com);
					}
				});
			} else {
				$.each(committees, function(ind, com) {
					if (com.circle === circle) {
						$this.activateCommittee(com);
					}
				});
			}
		},

		toggleInternalQuestions: function(e) {
			this.toggleCircleQuestions('internal');
		},

		toggleExternalQuestions: function(e) {
			this.toggleCircleQuestions('external');
		},

		toggleDropdown: function(e) {
			// this.$el.find('span[name=drop]').toggleClass('glyphicon-chevron-down glyphicon-chevron-right', 1000);
			this.$el.find('div[name=committees]').slideToggle('fast');
		},


		render: function() {
			var $this = this;
			var url = '_api/mrf_questions/index.php/' + this.model.get('id') + '/active';
			var promise2 = $.ajax({
				url: url,
				success: function(data) {
					var json = JSON.parse(data);
					$this.model.set('activeCommittees', json = _.map(json, function(obj) { return obj.committeeID; })); 
				}
			});

			return $.when(promise2).then(function () {
				var data = _.extend($this.model.attributes);
				var compiledTemplate = _.template($this.template);
				$this.$el.html(compiledTemplate(data));
			});
		}
	});

	return MRFQuestionView;
});