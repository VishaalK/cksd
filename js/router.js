var GalleryRouter = Backbone.Router.extend ({ routes: { '' : 'home', 'view': 'viewImage' }, home: function () { alert('you are viewing home page'); }, viewImage: function () { alert('you are viewing an image'); } }); 

//define our new instance of router 
var appRouter = new GalleryRouter(); 

// without History API 
Backbone.history.start(); 
