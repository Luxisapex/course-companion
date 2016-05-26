import { Meteor } from 'meteor/meteor';

import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Courses } from '../courses/courses.js';

export const addEducation = new ValidatedMethod({
	name: 'users.addEducation',
	validate: new SimpleSchema({
		userId: { type: String },
		education: { type: String },
	}).validator(),
	run({ userId, education }) {
		Meteor.users.update(userId, {
			$set: {
				education: education
			}}, {
				upsert: true
			}
		);
	}, 
});

export const addTech = new ValidatedMethod({
	name: 'users.addTech',
	validate: new SimpleSchema({
		userId: { type: String },
		tech: { type: String },
	}).validator(),
	run({ userId, tech }) {
		Meteor.users.update(userId, {
			$set: {
				tech: tech
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

export const addCourse = new ValidatedMethod({
	name: 'users.addCourse',
	validate: new SimpleSchema({
		userId: { type: String },
		courses: { type: [String] },
	}).validator(),
	run({ userId, courses }) {
		Meteor.users.upsert(userId, {
			$push: {
				courses: courses
			}}, {
				upsert: true
			}
		);
	}, 
});