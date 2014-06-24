define([
	'jquery','underscore','backbone','views/nav', 'views/ProjectsViewModule', 
	'collections/ProjectsModule', 'views/NewProjectViewModule', 'views/FooterModule','bootstrap'
	], 
	function($, _, Backbone, nav, projectsViewModule, Projects, NewProjectView, Footer) {
	
	var initialize = function() {
		// Initialize all views on the page and let them do their thing
		var navbar = new nav({ el: $('#NavbarContainer')});
		var projects = new Projects();
		var projectsView = new projectsViewModule({ el: $('#ProjectsContainer'), collection: projects });
		var newProjectView = new NewProjectView({ el: $('#NewProjectViewContainer')});
		var footerView = new Footer({ el: $('footer') });
	}

  	return {
    	initialize: initialize
  	};
});