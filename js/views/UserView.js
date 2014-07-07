define(['jquery', 'underscore', 'backbone', 'models/UserModule', 'text!templates/_UserView.html'],
function($, _, Backbone, User, UserTemplate) {
	var UserView = Backbone.View.extend({
		tagName: 'tr',
		template: _.template(UserTemplate),


		initialize: function() {
			this.listenTo(this.model, 'destroy', this.clear);
		},

		render: function() {
			this.$el.html(this.template(this.model.attributes));
		},

		clear: function() {
			this.remove();
		}
	});

	return UserView;
});

// <table class="table table-striped">
//   <thead> <tr> <th> Name </th> <th> Has Car? </th> </tr>< /thead>
//   <tbody> <tr> <td> Vishaal Kalwani </td> <td> No </td></tr> </tbody>
// </table>