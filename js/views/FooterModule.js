define(['jquery','underscore','backbone', 'text!templates/_Footer.html'], 
function($, _, Backbone, footerTemplate) {
	var Footer = Backbone.View.extend({
		template: _.template(footerTemplate),

		render: function() {
			var data = {};
			this.$el.html(this.template(data));
		},

		initialize: function() {
			this.render();
		}
	});

	return Footer;
});