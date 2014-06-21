require.config({
	paths: {
		jquery: 'lib/jquery/jquery-1.10.2',
		'jquery-ui': 'lib/jquery/jquery-ui-1.10.4.min',
		underscore: 'lib/underscore/underscore.min',
		backbone: 'lib/backbone/backbone.min',
		'backbone.localStorage': 'lib/backbone/backbone.localStorage',
		bootstrap: 'lib/bootstrap/bootstrap.min',
		text: 'lib/plugins/text',
	}
});

require(['jquery', 'jquery-ui', 'underscore', 'backbone', 'backbone.localStorage', 'bootstrap', 'text', 'text!templates/_SignupView.html', 'text!templates/_Navbar.html'], 
	function(a,b,c,d,e,f,g, signupView, Navbar) {

		var data = {};
      	var compiledTemplate = _.template(signupView, data);
      	$('#SignupsContainer').html(compiledTemplate);

      	$('header').html(_.template(Navbar, data));
	}
);