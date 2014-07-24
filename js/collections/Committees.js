define(['underscore', 'jquery', 'backbone', 'models/Committee'], 
function(_, $, Backbone, Committee) {
	var Committees = Backbone.Collection.extend({
		model: Committee,
		url: '_api/committees/index.php'
	});
	
	return Committees;
});