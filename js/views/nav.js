define(['jquery','underscore','backbone', 'text!templates/_Navbar.html', 'bootstrap'], 
	function($, _, Backbone, navbarTemplate) {

	var Navbar = Backbone.View.extend({
		
		el: $('#container'),
		
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
			var data = { name: 'Vishaal Kalwani' };
			var template = _.template(navbarTemplate, data);
			this.$el.html(template);
		}
	});
	// Our module now returns our view
	return Navbar;
});