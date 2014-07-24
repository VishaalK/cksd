define(['underscore', 'jquery', 'backbone'],
function(_, $, Backbone) {
	
	var Committee = Backbone.Model.extend({
		urlRoot: '_api/committees/index.php',
		defaults: {
			committeeName: '',
			hourReq: -1,
			circle: ''
		}
	});

	return Committee;
});	