define(['jquery', 'underscore', 'backbone', 'models/UserModule', 'collections/Users', 'views/UserView', 'text!templates/_UsersView.html', 'typeahead'],//'typeahead.twitter', 'bloodhound'], 
function($, _, Backbone, User, Users, UserView, UsersTemplate, typeahead) { //, Bloodhound) {
	var UsersView = Backbone.View.extend({
		template: _.template(UsersTemplate),

		initialize: function() {
			this.render();
			this.bindEvents();
		},

		bindEvents: function() {
			/*var emails = new Bloodhound({
				datumTokenizer: Bloodhound.tokenizers.obj.whitespace('email'),
				queryTokenizer: Bloodhound.tokenizers.whitespace,
				limit: 10,
				prefetch: {
				// url points to a json file that contains an array of country names, see
				// https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json
				url: '_api/users/',
				// the json file contains an array of strings, but the Bloodhound
				// suggestion engine expects JavaScript objects so this converts all of
				// those strings
				filter: function(list) {
					// return $.map(list, function(country) { return { name: country }; });
					return $.map(list, function(user) { return { email: user.email, id: user.id } });
				}
				}
			});

			// kicks off the loading/processing of `local` and `prefetch`
			emails.initialize();
			$('input[name=user-search]').typeahead({
				hint: true,
				highlight: true,
				minLength: 1
			}, {
				name: 'users',
				displayKey: 'email',
				source: emails.ttAdapter()
			});

			$('input[name=user-search]').on('typeahead:selected', function(obj, sugg, set) {
				console.log(sugg);
				this.val('');
			}); */
			// passing in `null` for the `options` arguments will result in the default
			// options being used
			/*$('#prefetch .typeahead').typeahead(null, {
			name: 'countries',
			displayKey: 'name',
			// `ttAdapter` wraps the suggestion engine in an adapter that
			// is compatible with the typeahead jQuery plugin
			source: countries.ttAdapter()
			});*/
			$.get('_api/users/', function(data) {
				data = JSON.parse(data);
				var items = [];
				$.each(data, function(i, user) {
					items.push(user.email + ' ' + user.id);
				});
				$('input[name=user-search]').typeahead({ 
					source: items,
					updater: function(item) {
						console.log(item);
						return item;
					}
				});
			})
		},

		render: function() {
			var data = {};
            // $.each(this.collection, function(i, obj) { renderUser(obj)} ); 
            //render that shit
            this.$el.html(this.template(data));
            var prefetch = new User({ id: 1 });
            var $this = this;
            prefetch.fetch({
            	success: function(user) {
            		$this.renderUser(user);
            	}
            });
		},

        renderUser: function(user) {
        	console.log();
            var userView = new UserView({ model: user });
            userView.render();
            this.$el.find('#UsersList').append(userView.el);
        }
	});

	return UsersView;
});
