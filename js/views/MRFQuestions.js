var MRFQuestionsView = Backbone.View.extend({
	template: '<h5>  \
					<span name="drop" style="cursor: pointer;"> <%= text %> </span> <% if (!active) { %> <span style="color: green;" class="glyphicon glyphicon-ok"></span> <% }  else { %> <span style="color: red;" class="glyphicon glyphicon-remove"></span> <% } %>\
				</h5> \
				<div name="committees" style="display: none;">  \
			    <table class="table table-bordered" id="UsersList"> \
			    	<% 	var count = 0;  \
			    		$.each(committees, function(ind, com) {  \
			    		if (count === 0) { %> \
			    			<tr> \
			    	<%	} \
			    		count++; %> \
			    		<td data-id="<%= com.committeeID %>" class=<% if (activeCommittees.indexOf(com.committeeID) !== -1) { %> "active" <% } %> > <%= com.committeeName %> </td> \
			    	<%	if (count === 5) { count = 0; %> \
			    			</tr> \
			    	<%	} \
			    	});						%> \
				</table></div>',
				// <div name="committees" style="display: none;"><div  class="row" style="margin-left: 10px; margin-right: 10px;"> \
  		// 			<div class="col-md-2 active">.col-md-2</div> \
  		// 			<div class="col-md-2">.col-md-2</div> \
  		// 			<div class="col-md-2 inactive">.col-md-2</div> \
  		// 			<div class="col-md-2">.col-md-2</div> \
  		// 			<div class="col-md-2">.col-md-2</div> \
  		// 			<div class="col-md-2">.col-md-2</div> \
				// </div> \
				// <div class="row" style="margin-left: 10px; margin-right: 10px;" > \
  		// 			<div class="col-md-2 active">.col-md-2</div> \
  		// 			<div class="col-md-2">.col-md-2</div> \
  		// 			<div class="col-md-2 inactive">.col-md-2</div> \
  		// 			<div class="col-md-2">.col-md-2</div> \
  		// 			<div class="col-md-2">.col-md-2</div> \
  		// 			<div class="col-md-2">.col-md-2</div> \
  		// 			<div class="col-md-2">.col-md-2</div> \
  		// 			<div class="col-md-2">.col-md-2</div> \
  		// 			<div class="col-md-2">.col-md-2</div> \
				// </div></div>\
				// ',


				// <%= $.each(committees, function(ind, com) { })

				// 				<div name="committees"> \
				// 	<% $.each(committees, function(ind, com) { \
				// 		if (ind  % 6 == 0) { %> \
				// 			<div class="row"> \
				// 	<% } %> \
				// 		<div class="col-md-2"><%= com.committeeName %></div> \
				// 	<% if (ind % 6 == 0) { %> </div> <% }}) %> \
				// </div> \
				// ',

	events: {
		'click span[name=drop]'		: 	'toggleDropdown',
		'click td' 					:   'toggleActiveQuestion'
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

	toggleDropdown: function(e) {
		// this.$el.find('span[name=drop]').toggleClass('glyphicon-chevron-down glyphicon-chevron-right', 1000);
		this.$el.find('div[name=committees]').slideToggle('fast');
	},
	initialize: function() {
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

		$.when(promise1, promise2).then(function () {
			console.log('resolved');
			console.log($this.model.get('activeCommittees'));
			console.log($this.model.get('committees'));
			$this.render();
		});
	},

	render: function(committees, activeCommittees) {
		// var template = '<div class="col-md-2" data-id={committeeID}> committeeName </div>'
		var data = _.extend(this.model.attributes);
		var compiledTemplate = _.template(this.template);
		this.$el.html(compiledTemplate(data));
	}
});