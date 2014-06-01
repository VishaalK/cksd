var Project = Backbone.Model.extend({
    url: '_api/project/',
    
    localStorage: new Backbone.LocalStorage("projects-backbone"),

    defaults: {
        title    :   'hey',
        description :   'buddy',
        isDropIn:       false,
    },

    initialize: function() {
        console.log('project initialized');
    },

    validate: function() {
        console.log('call me');
        if (this.get('title') === '') {
            alert('geeky');
            return "Name cannot be empty";
        } else if (this.get('description')  === '') {
            alert('nerdy');
            return "Description cannot be empty";
        } 
        console.log('that shit was valid!!');
    }

});

var project = new Project({ title: 'Ann Arbor District Library Tutoring', description: 'Tutor kids at the Ann Arbor District Library' });
