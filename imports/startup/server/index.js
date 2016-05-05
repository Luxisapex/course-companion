import { Meteor } from 'meteor/meteor';

// Import Collections (pieces of the DB) and its publications
import '../../api/courses/courses.js';
import '../../api/courses/server/publications.js';

// Not relevant for now
// import '../../api/educations/educations.js';

// Somehow necessary
Meteor.startup(() => {
	
});