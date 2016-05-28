import { Meteor } from 'meteor/meteor';

// Maybe also/instead import educations later?
import {Courses} from '../../api/courses/courses.js';
import {Educations} from '../../api/educations/educations.js';

import '../../api/courses/methods.js';
import '../../api/courses/server/publications.js';

import '../../api/educations/methods.js';
import '../../api/educations/server/publications.js';

import '../../api/users/methods.js';
import '../../api/users/server/publications.js';

// Specifies more fields on accountCreation
Accounts.onCreateUser(function(options, user) {
	
	user.courses = {};

	if (options.profile) {
    	user.profile = options.profile;
	}

	return user;
});

// On server creation..
Meteor.startup(() => {
	// Make sure no login keys persist over server restart
	Meteor.users.update({}, {$set : { "services.resume.loginTokens" : [] }}, {multi:true});
	// Fill DB with this data if empty
	if (Educations.find().count() === 0) {
		const data = [
			{
				name: "Ekonomisk grundkurs",
				code: "TEIE17",
				points: 8,
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

		const education = {
			name: "Industriell Ekonomi",
			nickname: "I"
		}

		Educations.insert({
			name: education.name,
			nickname: education.nickname,
			mandatoryCourses: data
		});

		// data.forEach((listing) => {
		// 	Courses.insert({
		// 		name: listing.name,
		// 		code: listing.code,
		// 		points: listing.points
		// 	});
		// });
	}
});