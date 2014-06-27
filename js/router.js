var GalleryRouter = Backbone.Router.extend ({ 
    routes: { 
        '' : 'home', 
        'view': 'viewImage',
        'home': 'home'
    }, 
    
    initialize: function() {
        var $this = this;
        /*$('#view').on('click', function(e) {
            e.preventDefault();
            $this.navigate("#view", {trigger: true});
        })*/
        $('#home').on('click', function(e) {
            e.preventDefault();
            $this.navigate("#home", {trigger: true});
        });
    },

    home: function () {
        alert('you are viewing home page'); 
    }, 

    viewImage: function () {
        alert('you are viewing an image'); 
    } 
}); 

//define our new instance of router 
var appRouter = new GalleryRouter(); 

// without History API 
Backbone.history.start(); 
