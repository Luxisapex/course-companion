import { Meteor } from 'meteor/meteor';

import { Courses } from '../courses.js';

// Shows courses with no arguments as of now
Meteor.publish('courses', function() {
	return Courses.find({});
});