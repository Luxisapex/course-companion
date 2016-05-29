import { Meteor } from 'meteor/meteor';
import { _ } from 'underscore';

import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Courses } from '../courses/courses.js';

import { Educations } from '../educations/educations.js';

export const addEducation = new ValidatedMethod({
	name: 'users.addEducation',
	validate: new SimpleSchema({
		userId: { type: String },
		education: { type: String },
	}).validator(),
	run({ userId, education }) {
		Meteor.users.update(userId, {
			$set: {
				education: Educations.findOne({name: education, type: "base"})
			}
		});
	}, 
});

export const addTechnical = new ValidatedMethod({
	name: 'users.addTechnical',
	validate: new SimpleSchema({
		userId: { type: String },
		technical: { type: String },
	}).validator(),
	run({ userId, technical }) {
		Meteor.users.update(userId, {
			$set: {
				technical: Educations.findOne({name: technical, type: "tech"})
			}
		});
	}, 
});

export const addMaster = new ValidatedMethod({
	name: 'users.addMaster',
	validate: new SimpleSchema({
		userId: { type: String },
		master: { type: String },
	}).validator(),
	run({ userId, master }) {
		Meteor.users.update(userId, {
			$set: {
				master: Educations.findOne({name: master, type: "master"})
			}
		});
	}, 
});

export const addCourse = new ValidatedMethod({
	name: 'users.addCourse',
	validate: new SimpleSchema({
		userId: { type: String },
		courseId: { type: String },
	}).validator(),
	run({ userId, courseId }) {
		let course = Courses.findOne({code: courseId});
		Meteor.users.update(userId, {
			$addToSet: {
				courses: course
			}
		});
	}, 
});

// Intended to make the users courses correspond to the mandatory of education
export const refreshCourses = new ValidatedMethod({
	name: 'users.refreshCourses',
	validate: new SimpleSchema({
		userId: { type: String },
	}).validator(),
	run({ userId }) {

		// Union of courses
		function arrayUnion(arr1, arr2) {
		    var union = arr1.concat(arr2);

		    for (var i = 0; i < union.length; i++) {
		        for (var j = i+1; j < union.length; j++) {
		            if (areCoursesEqual(union[i], union[j])) {
		                union.splice(j, 1);
		                j--;
		            }
		        }
		    }

		    return union;
		}

		function areCoursesEqual(c1, c2) {
		    return c1._id === c2._id;
		}

		// Unites all courses across user, edu, tech and master, and puts them in user.courses
		let userCourses = Meteor.users.findOne(userId).courses;
		if(Meteor.users.findOne(userId).education){
			userCourses = arrayUnion(userCourses, Meteor.users.findOne(userId).education.mandatoryCourses);
		}
		if(Meteor.users.findOne(userId).technical){
			userCourses = arrayUnion(userCourses, Meteor.users.findOne(userId).technical.mandatoryCourses);
		}
		if(Meteor.users.findOne(userId).master){
			userCourses = arrayUnion(userCourses, Meteor.users.findOne(userId).master.mandatoryCourses);
		}
		Meteor.users.update(userId, {
			$set: { courses: userCourses }
		});
	}
});

// For internal calls
// function refreshCourses(userId) {
// 	console.log(Meteor.users.findOne(userId));
// 	let education = Meteor.users.findOne(userId).education;
// 	Meteor.users.update(userId, {
// 		$set: {
// 			courses: education.mandatoryCourses
// 		}
// 	});
// }
