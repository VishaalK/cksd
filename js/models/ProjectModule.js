define(['underscore','backbone', 'moment', 'backbone.localStorage'],   
function (_, Backbone, Moment) {
    var ProjectModel = Backbone.Model.extend({
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
            // Literally the most disgusting code I've ever laid eyes on 
            // passed options from set ( with validate: true ), 
            // or from save ( so success, error, silent, etc. )
            var mysqlDateTimeFormat = 'YYYY-MM-DD HH:mm:ss';
            var errors = [];

            if (attrs.name === '') {
                errors.push({ name: 'name', message: 'Project name cannot be empty'})
            } 

            if (attrs.description === '') {
                errors.push({ name: 'description', message: 'Gotta have a project description bro' });
            }
            //always a number since we parsed the int
            if ((typeof attrs.maxSignups) !== 'number' || isNaN(attrs.maxSignups)) {
                errors.push({ name: 'maxSignups', message: "I don't know how to say this, but max signups has to be a number..."});
            } 
            var startTime = moment(attrs.startTime, 'MM/DD/YYYY hh:mm:ss a');
            if (!startTime.isValid()) {
                errors.push({ name: 'startTime', message: 'Start time was formatted incorrectly. Please use MM/DD/YYYY hh:mm AM/PM' });
            } else {
                attrs.startTime = startTime.format(mysqlDateTimeFormat);
            }

            var endTime = moment(attrs.endTime, 'MM/DD/YYYY hh:mm:ss a');
            if (!endTime.isValid()) {
                errors.push({ name: 'endTime', message: 'End time was formatted incorrectly. Please use MM/DD/YYYY hh:mm AM/PM' });
            } else {
                attrs.endTime = endTime.format(mysqlDateTimeFormat);
            }
            //transform the data 
            return errors.length > 0 ? errors : false;
        },
    });

    return ProjectModel;
});


