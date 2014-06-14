var Project = Backbone.Model.extend({
    url: '_api/project/',
    
    localStorage: new Backbone.LocalStorage("projects-backbone"),

    defaults: {
        name                :   'hey',
        description         :   'buddy',
        isDropIn            :   false,
        bigGroupFriendly    :   false,
        needsDriver         :   false,
        startTime           :   null,
        endTime             :   null,
        status              :   'open', // one of 'closed' (gray), 'open' (green), 'full' (blue), 'cancelled' (orange)
        maxSignups          :   5,
        siteLeader          :   'austinas'
    },

    initialize: function() {
        /*console.log('project ' + this.get('name') + ' initialized');
        this.set('startTime', Date.now());
        this.set('endTime', new Date());
        console.log(this.get('endTime') - this.get('startTime'));*/
    },

    validate: function(attrs, options) {
        // passed options from set ( with validate: true ), 
        // or from save ( so success, error, silent, etc. )
        console.log('call me');
        console.log(attrs);

        var errors = [];

        if (attrs.name === '') {
            console.log('error 1');
            errors.push({ name: 'name', errorMessage: 'Project name cannot be empty'})
        } 

        if (attrs.description === '') {
            console.log('error 2');
            errors.push({ name: 'description', errorMessage: 'Gotta have a project description bro' });
        }

        if (typeof attrs.maxSignups !== 'number') {
            console.log('error 3');
            errors.push({ name: 'maxSignups', errorMessage: "I don't know how to say this, but max signups has to be a number..."});
        } 

        //transform the data 
        attrs.name = "hullabaloo";
        console.log(errors.length);
        return errors.length > 0 ? "herp" : false;
    },


});

// var project = new Project({ name: 'Ann Arbor District Library Tutoring', description: 'Tutor kids at the Ann Arbor District Library', status: 'open' });
// var project2 = new Project({ name: 'Ozone House', description: '45th Anniversary Event for the Ozone Blouse', status: 'closed' });
// project.save();
// project2.save();