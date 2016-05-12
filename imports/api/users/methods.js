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
		console.log(Meteor.users.find({}).fetch());
		Meteor.users.update(userId, {
			$set: {
				education: education
			}}, {
				upsert: true
			}
		);
		console.log(Meteor.users.find({}).fetch());
	}, 
});