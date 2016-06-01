import { Meteor } from 'meteor/meteor';

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
				education: Educations.findOne({name: education, type: "base"})._id
			}
		});
		Educations.findOne(Meteor.users.findOne(userId).education).mandatoryCourses.forEach((courseId) => {
			Meteor.users.update(userId, {
				$addToSet: {
					courses: courseId
				}
			});
		});
	}, 
});

export const removeEducation = new ValidatedMethod({
	name: 'users.removeEducation',
	validate: new SimpleSchema({
		userId: { type: String },
	}).validator(),
	run({ userId }) {
		Meteor.users.update(userId, {
			$set: {
				education: null,
				technical: null,
				master: null
			}
		});
	}
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
				technical: Educations.findOne({name: technical, type: "tech"})._id
			}
		});
		Educations.findOne(Meteor.users.findOne(userId).technical).mandatoryCourses.forEach((courseId) => {
			Meteor.users.update(userId, {
				$addToSet: {
					courses: courseId
				}
			});
		});
	}, 
});

export const removeTechnical = new ValidatedMethod({
	name: 'users.removeTechnical',
	validate: new SimpleSchema({
		userId: { type: String },
	}).validator(),
	run({ userId }) {
		Meteor.users.update(userId, {
			$set: {
				technical: null,
				master: null
			}
		});
	}
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
				master: Educations.findOne({name: master, type: "master"})._id
			}
		});
		Educations.findOne(Meteor.users.findOne(userId).master).mandatoryCourses.forEach((courseId) => {
			Meteor.users.update(userId, {
				$addToSet: {
					courses: courseId
				}
			});
		});
	}, 
});

export const removeMaster = new ValidatedMethod({
	name: 'users.removeMaster',
	validate: new SimpleSchema({
		userId: { type: String },
	}).validator(),
	run({ userId }) {
		Meteor.users.update(userId, {
			$set: {
				master: null
			}
		});
	}
});

export const addCourse = new ValidatedMethod({
	name: 'users.addCourse',
	validate: new SimpleSchema({
		userId: { type: String },
		courseId: { type: String },
	}).validator(),
	run({ userId, courseId }) {
		Meteor.users.update(userId, {
			$addToSet: {
				courses: courseId
			}
		});
	}, 
});

export const deleteCourse = new ValidatedMethod({
	name: 'courses.deleteCourse',
	validate: new SimpleSchema({
		userId: { type: String },
		courseId: { type: String },
	}).validator(),
	run({ userId, courseId }) {
		Meteor.users.update(
			{
				'_id': userId
			},
			{
				'$pull':
				{
					'courses': courseId
				}
			}
		);
	},
});