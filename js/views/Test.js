var Test = Backbone.View.extend({
	//template: _.template('<p> <%= name  %> : <%= desc %> </p>'),

	initialize: function() {
		this.render();
	},

	render: function() {
		var template = _.template($('#TestTemplate').html());
		this.$el.html(template({ name: 'Ann Arbor District Library', desc: 'Demon Children' }));
	},

});

var test  = new Test({el : $('#TestContainer')});