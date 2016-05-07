import { Meteor } from 'meteor/meteor';

// Import Collections (pieces of the DB) and its publications
import {Courses} from '../../api/courses/courses.js';
import '../../api/courses/server/publications.js';

// Not relevant for now
// import '../../api/educations/educations.js';

// Somehow necessary
Meteor.startup(() => {
	if (Courses.find().count() === 0) {
		const data = [
			{
				name: "Ekonomisk grundkurs",
				code: "TEIE17",
				points: 6
			},
			{
				name: "Matematisk grundkurs",
				code: "TATA31",
				points: 6
			}
		];

		data.forEach((listing) => {
			Courses.insert({
				name: listing.name,
				code: listing.code,
				points: listing.points
			});
		});
	}
});