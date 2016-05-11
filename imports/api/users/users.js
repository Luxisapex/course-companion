import { Mongo } from 'meteor/mongo';

import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Users = new Mongo.Collection('users');

// Extend Meteor.users or create new and import that one? 
Users.schema = new SimpleSchema({
	
});

// Attach the schema to the collection
Users.attachSchema(Users.schema);

// Not sure. Seems to be beneficial. See Meteor 1.3 todos example and try to remove this if not used (again, I dont really know)
Users.publicFields = {
	education: 1,
};