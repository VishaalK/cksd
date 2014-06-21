var SignupView = Backbone.View.extend({
	// tagName: 'tr',
	// template: '<td> <%= firstName %> </td> <td> <%= %> </td> <td> <%= %> </td>'
    render: function() {
      // Using Underscore we can compile our template with data
      var data = {};
      var compiledTemplate = _.template( projectListTemplate, data );
      // Append our compiled template to this Views "el"
      this.$el.append( compiledTemplate );
	}
});

// <table class="table table-striped">
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Username</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td>@mdo</td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>Jacob</td>
//           <td>Thornton</td>
//           <td>@fat</td>
//         </tr>
//         <tr>
//           <td>3</td>
//           <td>Larry</td>
//           <td>the Bird</td>
//           <td>@twitter</td>
//         </tr>
//       </tbody>
//     </table>