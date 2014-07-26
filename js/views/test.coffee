define ['underscore', 'jquery', 'backbone'], (_, $, Backbone) ->
	TestView =  Backbone.View.extend {
		initialize: -> 
			console.log "Initialized!"
	}

	return TestView
