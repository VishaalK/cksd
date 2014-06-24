define(['underscore','backbone', 'backbone.localStorage', 'models/ProjectModule'],   
function(_, Backbone, three, Project) {
	var ProjectsModule = Backbone.Collection.extend({
		model: Project,
		localStorage: new Backbone.LocalStorage("projects-backbone")
	});
	return ProjectsModule;
});

