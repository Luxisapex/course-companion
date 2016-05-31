import { Meteor } from 'meteor/meteor';
import { Courses } from '../courses.js';

Meteor.publish('courses', function() {
	return Courses.find({});
});