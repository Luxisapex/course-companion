import { Meteor } from 'meteor/meteor';

import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

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