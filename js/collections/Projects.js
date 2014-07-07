var Projects = Backbone.Collection.extend({
	model: Project,
	url: '_api/projects/index.php',

	localStorage: new Backbone.LocalStorage("projects-backbone")
})

//var projects = new Projects([project, project2]);
/* var projects = new Projects();
projects.fetch(); */