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
        var mysqlDateTimeFormat = 'YYYY-MM-DD HH:mm:ss';

        var errors = [];

        if (attrs.name === '') {
            // console.log('error 1');
            errors.push({ name: 'name', errorMessage: 'Project name cannot be empty'})
        } 

        if (attrs.description === '') {
            // console.log('error 2');
            errors.push({ name: 'description', errorMessage: 'Gotta have a project description bro' });
        }

        //always a number since we parsed the int
        if ((typeof attrs.maxSignups) !== 'number' || isNaN(attrs.maxSignups)) {
            // console.log('error 3');
            errors.push({ name: 'maxSignups', errorMessage: "I don't know how to say this, but max signups has to be a number..."});
        } 

        var startTime = moment(attrs.startTime, 'MM/DD/YYYY hh:mm:ss a');
        if (!startTime.isValid()) {
            // console.log('error 4');
            errors.push({ name: 'startTime', errorMessage: 'Start time was formatted incorrectly. Please use MM/DD/YYYY hh:mm AM/PM' });
        } else {
            attrs.startTime = startTime.format(mysqlDateTimeFormat);
        }
        console.log(attrs.startTime);

        var endTime = moment(attrs.endTime, 'MM/DD/YYYY hh:mm:ss a');
        if (!endTime.isValid()) {
            // console.log('error 5');
            errors.push({ name: 'endTime', errorMessage: 'End time was formatted incorrectly. Please use MM/DD/YYYY hh:mm AM/PM' });
        } else {
            attrs.endTime = endTime.format(mysqlDateTimeFormat);
        }
        console.log(attrs.endTime);

        //transform the data 
        console.log('errors length : '  + errors.length);
        return errors.length > 0 ? errors : false;
    },


});

// var project = new Project({ name: 'Ann Arbor District Library Tutoring', description: 'Tutor kids at the Ann Arbor District Library', status: 'open' });
// var project2 = new Project({ name: 'Ozone House', description: '45th Anniversary Event for the Ozone Blouse', status: 'closed' });
// project.save();
// project2.save();