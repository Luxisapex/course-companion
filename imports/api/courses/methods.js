import { Meteor } from 'meteor/meteor';

import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Courses } from './courses.js';

export const toggleFinished = new ValidatedMethod({
	name: 'course.toggleFinished',
	validate: new SimpleSchema({
		userId: { type: String },
		courseId: { type: String },
		currentState: { type: Boolean },
	}).validator(),
	run({ userId, courseId, currentState }) {
		Meteor.users.update(
			{ 
				'_id': userId, 'courses': {
					'$elemMatch': {
						code: courseId
					}
				} 
			}, 
			{
				'$set': 
				{
					'courses.$.finished': !currentState
				}
			}
		);
	}, 
});

export const deleteCourse = new ValidatedMethod({
	name: 'courses.deleteCourse',
	validate: new SimpleSchema({
		userId: { type: String },
		courseId: { type: String },
	}).validator(),
	run({ userId, courseId}) {
		Meteor.users.update(
			{
				'_id': userId
			},
			{
				'$pull':
				{
					'courses': {
						'code': courseId
					}
				}
			}
		);
	},
});