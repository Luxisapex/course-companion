import { Mongo } from 'meteor/mongo';

import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Courses = new Mongo.Collection('Courses');

// Deny client side updates
// Courses.deny({
// 	insert() { return true; },
// 	update() { return true; },
// 	remove() { return true; },
// });

// Allow them for now
Courses.allow({
	insert: function(userId, doc) {
		// Implement later when users exist
		// return !!userId;
		return true;
	},
	update: function(userId, doc) {
		// Likewise
		return true;
	}
})

// Define the schema 
Courses.schema = new SimpleSchema({
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
	finished: {
		type: Boolean,
		defaultValue: false
	}
});

// Server side methods to be called from client
// Could be placed in a separate file
Meteor.methods({
	// Should simply toggle the finished state of a course
	toggleFinished: function (id, currentState) {
		Courses.update(id, {
			$set: {
				finished: !currentState
			}
		});
	},
	// Should remove a course based on an ID
	deleteCourse: function (id) {
		Courses.remove(id);
	}
});

// Attach the schema to the collection
Courses.attachSchema(Courses.schema);

// Not sure. Seems to be beneficial. See Meteor 1.3 todos example and try to remove this if not used (again, I dont really know)
Courses.publicFields = {
	name: 1,
	code: 1,
};