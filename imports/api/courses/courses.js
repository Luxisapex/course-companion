import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Courses = new Mongo.Collection('Courses');

// Deny client side updates
Courses.deny({
	insert() { return true; },
	update() { return true; },
	remove() { return true; },
});

// Define the schema 
Courses.schema = new SimpleSchema({
	_id: {
		type: String
	},
	name: {
		type: String,
		label: "Course name"
	},
	code: {
		type: String,
		label: "Course code"
	},
	points: {
		type: Number,
		label: "Points"
	},
});

Courses.attachSchema(Courses.schema);