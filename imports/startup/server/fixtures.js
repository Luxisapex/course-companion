import { Meteor } from 'meteor/meteor';
import {Courses} from '../../api/courses/courses.js';
import {Educations} from '../../api/educations/educations.js';

Meteor.startup(() => {
	// Make sure no login keys persist over server restart
	Meteor.users.update({}, {$set : { "services.resume.loginTokens" : [] }}, {multi:true});
	// Fill DB with this data if empty
	if (Courses.find().count() === 0) {
		const courseData = [
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
				name: "Fysiologisk grundkurs",
				code: "TFAE12",
				points: 8,
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

		courseData.forEach((course) => {
			Courses.insert({
				name: course.name,
				code: course.code,
				points: course.points
			});
		});
	}

	if (Educations.find().count() === 0) {
		const educationData = [
			{
				name: 'Industriell Ekonomi',
				nickname: 'I',
				courses: [
					"TEIE17",
					"TATA31"
				]
			},
			{
				name: 'Teknisk Fysik',
				nickname: 'Y',
				courses: [
					"TFAE12",
					"TATA31"
				]
			},
		];
		// Fill array with Courses, and creates Education with that array
		educationData.forEach((education) => {

			Educations.insert({
				name: education.name,
				nickname: education.nickname,
				mandatoryCourses: []
			});

			education.courses.forEach((code) => {
				let course = Courses.findOne({code: code});
				Educations.update({name: education.name}, {
					$addToSet: {
						mandatoryCourses: course
					}
				});
			});
		});
	}
});