import { Meteor } from 'meteor/meteor';

Meteor.publish('userData', function() {
	return Meteor.users.find({}, {fields: {'username': 1, 'education': 1, 'technical': 1, 'master': 1, 'courses': 1}});
});

Meteor.publish('userCourses', function() {
	return Meteor.users.find({
		userId: this.userId,
	}, {
		fields: {'courses': 1}
	});
});