import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Educations = new Mongo.Collection('Educations');

Educations.deny({
	insert() { return true; },
	update() { return true; },
	remove() { return true; },
});

Educations.schema = new SimpleSchema({
	name: {
		type: String,
		label: "Education name"
	},
	type: {
		type: String
	},
	requirements: {
		type: Number
	},
	mandatoryCourses: {
		type: [String]
	},
	courses: {
		type: [String]
	}
});

Educations.attachSchema(Educations.schema);