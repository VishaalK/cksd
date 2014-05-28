var Project = Backbone.Model.extend({
    defaults: {
        name    :   '',
        description :   ''
    },

    initialize: function() {
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

var project = new Project({ name: ' ', description: '' });
project.validate();
