// Specifies more fields on accountCreation
Accounts.onCreateUser(function(options, user) {
	
	user.education = null;
	user.technical = null;
	user.master = null;
	user.courses = [];

	if (options.profile) {
    	user.profile = options.profile;
	}

	return user;
});