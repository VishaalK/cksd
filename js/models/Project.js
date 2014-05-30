var Project = Backbone.Model.extend({
    url: '_api/project/',
    
    defaults: {
        name    :   'hey',
        description :   'buddy',
    },

    initialize: function() {
        if (this.get(''))
        alert('project initialized');
    },

    validate: function() {
        console.log('call me');
        if (this.get('name') === '') {
            alert('geeky');
            return "Name cannot be empty";
        } else if (this.get('description')  === '') {
            alert('nerdy');
            return "Description cannot be empty";
        } 
    }

});

var project = new Project({ id: 1 });
project.fetch({
    success: function(model, response, options) {
        console.log(model.toJSON());

    },
    error: function(model, response, options) {
        console.log('errored out');
        console.log(response);
    }
});
