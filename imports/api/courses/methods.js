import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Courses } from './courses.js';


export const toggleFinished = new ValidatedMethod({
	name: 'course.toggleFinished',
	validate: new SimpleSchema({
		courseId: { type: String },
		currentState: { type: Boolean }
	}).validator(),
	run({courseId, currentState}) {
		Courses.update(courseId, {
			$set: {
				finished: !currentState
			}
		});
	} 
});

export const deleteCourse = new ValidatedMethod({
	name: 'course.deleteCourse',
	validate: new SimpleSchema({
		courseId: { type: String }
	}).validator(),
	run({courseId}) {
		Courses.remove({_id: courseId});
	} 
});



// Meteor.methods({
// 	// Should simply toggle the finished state of a course
// 	toggleFinished: function (id, currentState) {
// 		Courses.update(id, {
// 			$set: {
// 				finished: !currentState
// 			}
// 		});
// 	},
// 	// Should remove a course based on an ID
// 	deleteCourse: function (id) {
// 		Courses.remove({ _id: id });
// 	}
// });