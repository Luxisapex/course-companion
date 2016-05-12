import { Meteor } from 'meteor/meteor';

// Import Collections (pieces of the DB) and its publications
import {Courses} from '../../api/courses/courses.js';

import '../../api/courses/methods.js';
import '../../api/courses/server/publications.js';

// import later when using
import '../../api/users/methods.js';
import '../../api/users/server/publications.js';

// Not relevant for now
// import '../../api/educations/educations.js';

// On server creation..
Meteor.startup(() => {
	// Make sure no login keys persist over server restart
	Meteor.users.update({}, {$set : { "services.resume.loginTokens" : [] }}, {multi:true});
	// Fill Courses DB with this data if empty
	if (Courses.find().count() === 0) {
		const data = [
			{
				name: "Ekonomisk grundkurs",
				code: "TEIE17",
				points: 8
			},
			{
				name: "Matematisk grundkurs",
				code: "TATA31",
				points: 8
			},
			{
				name: "Linjär algebra",
				code: "TATA32",
				points: 6
			},
			{
				name: "Envariabelanalys 1",
				code: "TATA41",
				points: 6
			},
			{
				name: "Envariabelanalys 2",
				code: "TATA42",
				points: 6
			},
			{
				name: "Flervariabelanalys",
				code: "TATA43",
				points: 8
			},
			{
				name: "Industriell organisation",
				code: "TEIO61",
				points: 8
			},
			{
				name: "Programmering i ADA",
				code: "TDDD95",
				points: 6
			},
			{
				name: "Godtycklig kurs",
				code: "TEIE55",
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