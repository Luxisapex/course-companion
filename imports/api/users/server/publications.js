import { Meteor } from 'meteor/meteor';

import { Users } from '../users.js';

// Shows courses with no arguments as of now
Meteor.publish('users', function() {
	return Users.find({});
});