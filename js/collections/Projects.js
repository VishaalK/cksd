var Projects = Backbone.Collection.extend({
	model: Project,

	localStorage: new Backbone.LocalStorage("projects-backbone")
})

var projects = new Projects([project, project2]);