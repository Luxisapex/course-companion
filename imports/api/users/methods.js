import { Meteor } from 'meteor/meteor';

import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Educations } from '../educations/educations.js';

export const addEducation = new ValidatedMethod({
	name: 'users.addEducation',
	validate: new SimpleSchema({
		userId: { type: String },
		education: { type: String },
	}).validator(),
	run({ userId, education }) {
		Meteor.users.update(userId, {
			$set: {
				education: Educations.findOne({name: education})
			}
		});
	}, 
});

export const addTechnical = new ValidatedMethod({
	name: 'users.addTechnical',
	validate: new SimpleSchema({
		userId: { type: String },
		technical: { type: String },
	}).validator(),
	run({ userId, technical }) {
		Meteor.users.update(userId, {
			$set: {
				technical: technical
			}}, {
				upsert: true
			}
		);
	}, 
});

export const addMaster = new ValidatedMethod({
	name: 'users.addMaster',
	validate: new SimpleSchema({
		userId: { type: String },
		master: { type: String },
	}).validator(),
	run({ userId, master }) {
		Meteor.users.update(userId, {
			$set: {
				master: master
			}}, {
				upsert: true
			}
		);
	}, 
});

// Intended to make the users courses correspond to the mandatory of education
export const refreshCourses = new ValidatedMethod({
	name: 'users.refreshCourses',
	validate: new SimpleSchema({
		userId: { type: String },
	}).validator(),
	run({ userId }) {
		let education = Meteor.users.findOne(userId).education;
		console.log(education.mandatoryCourses);
		Meteor.users.update(userId, {
			$set: {
				courses: education.mandatoryCourses
			}
		});
	}
});

// For internal calls
// function refreshCourses(userId) {
// 	console.log(Meteor.users.findOne(userId));
// 	let education = Meteor.users.findOne(userId).education;
// 	Meteor.users.update(userId, {
// 		$set: {
// 			courses: education.mandatoryCourses
// 		}
// 	});
// }