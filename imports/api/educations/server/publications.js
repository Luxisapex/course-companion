import { Meteor } from 'meteor/meteor';
import { Educations } from '../educations.js';

Meteor.publish('educations', function() {
	return Educations.find({});
});