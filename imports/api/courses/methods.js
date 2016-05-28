import { Meteor } from 'meteor/meteor';

import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Courses } from './courses.js';

export const toggleFinished = new ValidatedMethod({
	name: 'course.toggleFinished',
	validate: new SimpleSchema({
		courseId: { type: String },
		currentState: { type: Boolean },
	}).validator(),
	run({ courseId, currentState }) {
		Courses.update({code: courseId}, {
			$set: {
				finished: !currentState
			}
		});
	}, 
});

export const deleteCourse = new ValidatedMethod({
	name: 'courses.deleteCourse',
	validate: new SimpleSchema({
		courseId: { type: String },
	}).validator(),
	run({courseId}) {
		Courses.remove({code: courseId});
	},
});