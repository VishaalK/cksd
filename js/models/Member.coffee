define ['underscore', 'jquery', 'backbone'], (_, $, Backbone) ->
	Member = Backbone.Model.extend({
		urlRoot: '_api/members/index.php'
		defaults: {
			unq: undefined
			first_name: undefined
			last_name: undefined
		}

		fullName: ->
			this.get('first_name') + this.get('last_name')

		validate: (attrs, options) ->
			errors = []
			errors.push({ name: 'unq', errorMessage: 'Uniquename cannot be empty. '}) if attrs.name == ''
			errors.push({ name: 'first_name', errorMessage: 'First name cannot be blank' }) if attrs.first_name == ''			
			errors.push({ name: 'last_name', errorMessage: 'Last name cannot be blank' }) if attrs.last_name == '' 
			errors.push({ name: 'password', errorMessage: 'Password cannot be blank' }) if attrs.password == ''
			errors.push({ name: 'password_confirm', errorMessage: 'Password confirmation cannot be blank' }) if attrs.password_confirm == ''
			errors.push({ name: 'password_match', errorMessage: 'Password and password confirmation do not match' }) if attrs.password != attrs.password_confirm
			return if errors.length > 0 then errors else false
 	})

	return Member
