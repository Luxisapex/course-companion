import { Meteor } from 'meteor/meteor';

import { Educations } from '../educations.js';

// Shows courses with no arguments as of now
Meteor.publish('educations', function() {
	return Educations.find({});
});