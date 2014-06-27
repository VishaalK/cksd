define(['jquery', 'underscore', 'backbone', 'models/User', 'text!templates/_UserView.html'],
function($, _, Backbone, User) {
	var UserView = Backbone.View.extend({
		tagName: 'tr'
	});

});

// <table class="table table-striped">
//   <thead> <tr> <th> Name </th> <th> Has Car? </th> </tr>< /thead>
//   <tbody> <tr> <td> Vishaal Kalwani </td> <td> No </td></tr> </tbody>
// </table>