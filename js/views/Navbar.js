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
		this.$el.html(template({ name: 'Vishaal Kalwani' }));
	}

});

var navbar = new Navbar({ el: $('#NavbarContainer')});