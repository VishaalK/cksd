define(['underscore', 'backbone', 'jquery', 'views/MRFQuestionView', 'models/MRFQuestion'], 
function(_, Backbone, $, MRFQuestionView) {
	var MRFQuestionsView = Backbone.View.extend({
		// tagName: 'ul',
		className: 'list-unstyled',
		template: '<form style="margin-top: 5px;" class="form-inline" role="form"> \
					  <div class="form-group"> \
					    <label for="exampleInputEmail2">New Question</label> \
					    <input style="min-width: 768px;" type="text" class="form-control" id="new-question" placeholder="Can I have some more, sir?"> \
					  </div> \
					  <button type="button" id="add-question" class="btn btn-default">Create</button> \
					</form> \
					<ul class="list-unstyled"></ul> \
					',

		events: {
			'click #add-question'	: 'addQuestion'
		},

		initialize: function() {
			var $this = this;
			this.listenTo(this.collection, 'all', function(method) {
				// console.log(method);
			});
			this.listenTo(this.collection, 'reset', this.render);
			// fetch the committees here and pass them to each view
			$.ajax({
				url: '_api/committees/index.php',
				success: function(data) {
					$this.committees = JSON.parse(data);
				},
				async: false
			});
			this.internalCommittees = [];
			this.externalCommittees = [];
			$.each(this.committees, function(ind, com) {
				if (com.circle === 'internal') {
					$this.internalCommittees.push(com);
				} else if (com.circle === 'external') {
					$this.externalCommittees.push(com);
				}
			});
		},

		addQuestion: function(e) {
			var $this = this;
			var newQuestionText = _.escape(this.$el.find('input[id=new-question]').val());
			var q = new MRFQuestion();
			q.set({ text: newQuestionText }).save({
				success: function(model) {
					$this.renderQuestion(model);
				}
			});
		},

		// renders a single question, no matter what
		renderQuestion: function(question) {
			var $this = this;
			var v = new MRFQuestionView({ model: question });
			$.when(v.render()).then(function() {
				$this.$el.find('ul').append(v.el);
			})
		},

		renderQuestions: function(questions) {
			var $this = this;
			$.each(questions, function(ind, question) {
				$this.renderQuestion(question);
			});
		},

		render: function() {
			var $this = this;
			

			var $this = this;
			var compiledTemplate = _.template(this.template);
			$this.$el.html(compiledTemplate);
			// this.$el.html(this.el);
			$.each(this.collection.models, function(ind, obj) {
				obj.set('committees', $this.committees);
				obj.set('externalCommittees', $this.externalCommittees);
				obj.set('internalCommittees', $this.internalCommittees);
				var v = new MRFQuestionView({ model: obj });
				var promise = v.render();
				$.when(promise).then(function() {
					$this.$el.find('ul').append(v.el);
				});
			})
		}
	});
	return MRFQuestionsView;
});
