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
	name: {
		type: String,
		label: "Course name"
	},
	code: {
		type: String,
		label: "Course code"
	}
});

// Attach the schema to a collection (or vice versa?)
Courses.attachSchema(Courses.schema);

// Not sure. Seems to be beneficial. See Meteor 1.3 todos example and try to remove this if not used (again, I dont really know)
Courses.publicFields = {
	name: 1,
	code: 1,
};