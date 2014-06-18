var Signup = Backbone.Model.extend({
	/* Each signup has an id, and we should be able to fetch signups by projectID, userID
 		so  /signups/get.php?projectid=1 -> SELECT * FROM CKSD2014_signups WHERE projectId = 1
			/signups/get.php?userid=1 -> SELECT * FROM CKSD2014_signups where userId = 1
		//not sure how fetch will work then, but they need to be able to be removed, so model.destroy etc.
		signup has a uniqname? or a project ID? uniqname is fine, maybe easier. uniqname is primary key
	*/

	defaults: {
		userID: undefined,
		projectID: undefined,
		signupTime:
	},


});