import { Courses } from './courses.js';

Meteor.methods({
	// Should simply toggle the finished state of a course
	toggleFinished: function (id, currentState) {
		Courses.update(id, {
			$set: {
				finished: !currentState
			}
		});
	},
	// Should remove a course based on an ID
	deleteCourse: function (id) {
		Courses.remove({ _id: id });
	}
});