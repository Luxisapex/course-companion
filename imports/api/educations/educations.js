// See "../courses/courses.js" for descriptive comments
import { Mongo } from 'meteor/mongo';

import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Educations = new Mongo.Collection('Educations');

// Deny client side updates
Educations.deny({
	insert() { return true; },
	update() { return true; },
	remove() { return true; },
});

Educations.schema = new SimpleSchema({
	name: {
		type: String,
		label: "Course name"
	},
	code: {
		type: String,
		label: "Course code"
	}
});

Educations.attachSchema(Educations.schema);

Educations.publicFields = {
	name: 1,
	code: 1,
};