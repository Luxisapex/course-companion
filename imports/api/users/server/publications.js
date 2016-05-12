import { Meteor } from 'meteor/meteor';

// Shows courses with no arguments as of now
Meteor.publish('userData', function() {
	return Meteor.users.find({}, {fields: {'education': 1}});
});