define(['underscore', 'backbone', 'jquery', 'views/MRFQuestionView', 'models/MRFQuestionModule'], 
function(_, Backbone, $, MRFQuestionView, MRFQuestion) {
	var MRFQuestionsView = Backbone.View.extend({
		// tagName: 'ul',
		className: 'list-unstyled',
		template: '<form style="margin-top: 5px;" class="form-inline" role="form"> \
					  <div class="form-group"> \
					    <input style="min-width: 768px;" type="text" class="form-control" id="new-question" placeholder="Can I have some more, sir?"> \
					  </div> \
					  <button type="button" id="add-question" class="btn btn-default">Create</button> \
					</form> \
					<ul id="questions-view-list" class="list-unstyled"></ul> \
					',

		events: {
			'click #add-question'	: 'addQuestion'
		},

		initialize: function() {
			var $this = this;
			this.listenTo(this.collection, 'all', function(method) {
				// console.log(method);
			});
			this.listenTo(this.collection, 'reset', function(coll) {
				console.log('reset bitch!');
			});
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
			this.subViews = [];
			var subViews = this.subViews;

			var $this = this;
			var compiledTemplate = _.template(this.template);
			$this.$el.append(compiledTemplate);
			var container = document.createDocumentFragment();
			var promises = [];
			// this.$el.html(this.el);
			$.each(this.collection.models, function(ind, obj) {
				obj.set('committees', $this.committees);
				obj.set('externalCommittees', $this.externalCommittees);
				obj.set('internalCommittees', $this.internalCommittees);
				var v = new MRFQuestionView({ model: obj });
				subViews.push(v);
				var promise = v.render();
				promises.push(promise);
				$.when(promise).then(function() {
					container.appendChild(v.el);
				});
			});

			$.when.apply($, promises).then(function() {
				$this.$el.find('ul').append(container);
			});
		},

		close: function() {
			console.log('closing all subviews');
			$.each(this.subViews, function(ind, v) {
				v.remove();
			});
			this.remove()
		},

		remove: function() {
            this.$el.empty().off();
            this.stopListening();
            return this;
        }
	});
	return MRFQuestionsView;
});
