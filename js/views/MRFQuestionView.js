define(['jquery', 'underscore', 'backbone', 'models/MRFQuestionModule', 'text!templates/_MRFQuestionView.html', 'bootstrap-editable'],
function($, _, Backbone, MRFQuestion, mrfQuestionTemplate) {
	var MRFQuestionView = Backbone.View.extend({
		template: mrfQuestionTemplate,
		tagName: 'li',

		initialize: function() {
			// Remove this model if the question is deactivated
			this.listenTo(this.model, 'destroy', this.remove);
			this.input = this.$el.find('span[name=drop]');
		},

		events: {
			'click span[name=drop]'		: 	'toggleDropdown',
			'click td' 					:   'toggleActiveQuestion',
			'click button[name=delete]' : 	'deactiveQuestion',
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

		deactiveQuestion: function(e) {
			if (!confirm('Are you sure you want to deactive this question?')) {
				return;
			}
			this.model.deactivate(); // this.model.save({ active: 0 });
		},

		toggleActiveQuestion: function(e) {
			var commmitteeId = $(e.target).data('id'); // post a request
			console.log($(e.target).hasClass('active'));
			var type = ($(e.target).hasClass('active')) ? 'DELETE' : 'POST';
			var url = '_api/mrf_questions/' + this.model.get('id') + '/active/' + commmitteeId;
			console.log(url);

			var MRFQuestionRel = Backbone.Model.extend({
				urlRoot: '_api/mrf_questions/index.php/' + this.model.get('id') + '/active/',
			});
			var isActive = $(e.target).hasClass('active');
			if (isActive) {
				var test = new MRFQuestionRel({ id: $(e.target).data('id') });
				test.destroy({
					success: function() {
						console.log('success');
					}
				});
			} else {
				var test = new MRFQuestionRel();
				console.log($(e.target).data('id'));
				test.set('_id', $(e.target).data('id'));
				test.save({
					success: function() {
						console.log('this is pathetic');
					}
				})
			}
			// $.ajax({
			//     url: url,
			//     type: 'POST',
			//     data: {
			//     	"_METHOD:" : "DELETE"
			//     },
			//     success: function(result) {
			//         console.log(result);
			//     }
			// });
			$(e.target).toggleClass('active');
		},

		toggleInternalQuestions: function(e) {
			// if any of them are active, deactive them
			// otherwise, activate all of them
			console.log('internal');
			// var type = (this.$el.find('[data-circle=internal].active').length !== 0) ? 'DELETE' : 'POST';
			// $.ajax({
			// 	url: url,
			// 	type: type,
			// })
		},

		toggleExternalQuestions: function(e) {
			// var committees = $this.model.committees;
			// $.each(committees, function(ind, obj) {

			// })
		},

		toggleDropdown: function(e) {
			// this.$el.find('span[name=drop]').toggleClass('glyphicon-chevron-down glyphicon-chevron-right', 1000);
			this.$el.find('div[name=committees]').slideToggle('fast');
		},


		render: function() {
			var $this = this;
			var getAllCommittees = $.Deferred();
			var getActiveCommittees = $.Deferred();
			var promise1 = $.ajax({
				url: '_api/committees/index.php',
				success: function(data) {
					$this.model.set('committees', JSON.parse(data));
					getAllCommittees.resolve();
				}
			});

			var url = '_api/mrf_questions/index.php/' + this.model.get('id') + '/active';
			var promise2 = $.ajax({
				url: url,
				success: function(data) {
					var json = JSON.parse(data);
					$this.model.set('activeCommittees', json = _.map(json, function(obj) { return obj.committeeID; })); 
					getActiveCommittees.resolve();
				}
			});

			return $.when(promise1, promise2).then(function () {
				var data = _.extend($this.model.attributes);
				var compiledTemplate = _.template($this.template);
				console.log($this.model.attributes);
				$this.$el.html(compiledTemplate(data));
			});// var template = '<div class="col-md-2" data-id={committeeID}> committeeName </div>'
		}
	});

	return MRFQuestionView;
});