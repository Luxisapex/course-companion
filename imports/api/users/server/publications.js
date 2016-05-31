import { Meteor } from 'meteor/meteor';

const publicFields = {'username': 1, 'education': 1, 'technical': 1, 'master': 1, 'courses': 1};

Meteor.publish(null, function() {
	return Meteor.users.find({_id: this.userId}, {fields: publicFields});
});

Meteor.publish('user', function() {
	return Meteor.users.find({_id: this.userId}, {fields: publicFields});
});