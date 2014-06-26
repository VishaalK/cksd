/*
 * Entry point *.js file for /users.php -> eventually use our own router for pretty URLs
 * @author vishaalk
 */
// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
	paths: {
		jquery: 'lib/jquery/jquery-1.10.2',
		'jquery-ui': 'lib/jquery/jquery-ui-1.10.4.min',
		underscore: 'lib/underscore/underscore.min',
		backbone: 'lib/backbone/backbone.min',
		'backbone.localStorage': 'lib/backbone/backbone.localStorage',
		bootstrap: 'lib/bootstrap/bootstrap.min',
		text: 'lib/plugins/text',
		moment: 'utils/moment.min'
	}
});

require(['users',], function(usersPage){
	usersPage.initialize();
});