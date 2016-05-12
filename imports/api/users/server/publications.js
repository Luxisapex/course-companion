import { Meteor } from 'meteor/meteor';

// Shows courses with no arguments as of now
Meteor.publish('userData', function() {
	return Meteor.users.find({}, {fields: {'username': 1, 'education': 1, 'technical': 1, 'master': 1}});
});