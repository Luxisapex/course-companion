import { Mongo } from 'meteor/mongo';

import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Courses } from '../courses/courses.js';

export const Educations = new Mongo.Collection('Educations');

Educations.deny({
	insert() { return true; },
	update() { return true; },
	remove() { return true; },
});

// Should include requirements for diploma
Educations.schema = new SimpleSchema({
	name: {
		type: String,
		label: "Education name"
	},
	nickname: {
		type: String,
		label: "Course code"
	},
	mandatoryCourses: {
		type: [Courses]
	}
});

// Attach the schema to the collection
Educations.attachSchema(Educations.schema);