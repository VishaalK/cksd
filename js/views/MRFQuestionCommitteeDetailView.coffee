define ['underscore', 'jquery', 'backbone', 'models/Committee', 'models/MRFQuestionModule'],
	(_, $, Backbone, Committee, MRFQuestion) ->
		MRFQuestionCommitteeDetailView = Backbone.View.extend({
			template: _.template('<p> Some stuff </p>')
			initialize: () ->
				$.ajax({
					type: 'get'
					url: '_api/'	
				})
		})