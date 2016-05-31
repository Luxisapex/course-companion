import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Course } from '../courses/courses.js';

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
		type: [Course]
	},
	courses: {
		type: [Course]
	}
});

Educations.attachSchema(Educations.schema);