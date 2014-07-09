var MRFQuestionsView = Backbone.View.extend({
	template: '<h5>  <span name="drop" style="font-size: 8px; cursor: pointer;" class="glyphicon glyphicon-chevron-right"></span> \
					<%= text %> <% if (!active) { %> <span style="color: green;" class="glyphicon glyphicon-ok"></span> <% }  else { %> <span style="color: red;" class="glyphicon glyphicon-remove"></span> <% } %>\
				</h5> \
				<div name="committees" style="display: none;"> \
				<div class="row-fluid"> <table class="table-bordered col-md-12 col-sm-12 col-lg-12" > \
				<thead> </thead> \
				<tbody> \
					<tr> <td> </td> <td>1 </td> <td> 1</td> <td> 1</td> <td>1 </td> </tr> \
					<tr> <td> 1</td> <td> 1</td> <td> 1</td> <td> 1</td> <td>1 </td> </tr> \
					<tr> <td> 1</td> <td> 1</td> <td> 1</td> </tr></tbody> \
				</table> \
				</div></div>',	
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
		'click span[name=drop]'		: 'toggleDropdown',
		'click td' : 'toggleActiveQuestion'
	},

	toggleActiveQuestion: function(e) {
		var commmitteeId = $(e.target).data('id'); // post a request
		$(e.target).toggleClass('active');
	}

	toggleDropdown: function(e) {
		console.log('drop');
		this.$el.find('span[name=drop]').toggleClass('glyphicon-chevron-down glyphicon-chevron-right', 1000);
		this.$el.find('div[name=committees]').slideToggle('fast');
	},

	lerty: function(e) {
		console.log('lerty');
	},
	initialize: function() {
		var $this = this;
		$.ajax({
			url: '_api/committees/index.php',
			success: function(data) {
				var committees = JSON.parse(data);
				$this.render(committees);
			}
		});
	},

	render: function(committees) {
		var template = '<div class="col-md-2" data-id={committeeID}> committeeName </div>'
		console.log(this.model.attributes);
		var data = _.extend(this.model.attributes, { committees: committees });
		var compiledTemplate = _.template(this.template);
		console.log(data.committees[0].committeeName);
		this.$el.html(compiledTemplate(data));
	}
});