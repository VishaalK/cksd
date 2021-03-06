var Navbar = Backbone.View.extend({
	events: {
		'dblclick' : 'alert'
	},

	alert: function(e) {
		e.preventDefault();
		alert('Double clicked!');
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		//var template =  _.template($('#NavbarTemplate').html());
		var template = _.template($('#NavbarTemplate').html());
		//will eventually fill this with a get request to the current session ?
		this.$el.html(template({ name: 'Vishaal Kalwani' }));
	}

});

var navbar = new Navbar({ el: $('#NavbarContainer')});
