// Lists courses associated with a student

import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import { Educations } from '../../api/educations/educations.js';
import { Courses } from '../../api/courses/courses.js';

import UserCourse from './UserCourse.jsx';

import '../stylesheets/style.css';

export default class CourseList extends TrackerReact(React.Component) {

	constructor() {
		super();
		this.state = {
			subscription: {
				educations: Meteor.subscribe('educations'),
				courses: Meteor.subscribe('courses'),
				user: Meteor.subscribe('user')
			}
		}
	}

	componentWillUnmount() {
		this.state.subscription.educations.stop();
	    this.state.subscription.courses.stop();
	    this.state.subscription.user.stop();
	}

	courses() {
		if(this.state.subscription.user.ready()) {
			return Meteor.user().courses;
		}
		return [];
	}

	// Checks if a course is part of the users education
	isEducation(course) {
		let courses = Meteor.user().education.courses;
		for(let i = 0; i < courses.length; i++) {
			if(courses[i].code === course.code) {
				return true;
			}
		}
	}

	// Checks if a course is a technical course
	isTech(course) {
		let courses = Meteor.user().technical.courses;
		for(let i = 0; i < courses.length; i++) {
			if(courses[i].code === course.code) {
				return true;
			}
		}
	}

	// Checks if a course is a master course
	isMaster(course) {
		let courses = Meteor.user().master.courses;
		for(let i = 0; i < courses.length; i++) {
			if(courses[i].code === course.code) {
				return true;
			}
		}
	}

	// Checks what type the course is 'master/tech/base'
	courseType(course) {
		if(this.state.subscription.user.ready()) {
			let user = Meteor.user();
			if(user.master) {
				if(this.isMaster(course)){
					return 'master';
				}
			}
			if(user.technical) {
				if(this.isTech(course)) {
					return 'technical';
				}
			}
			if(user.education) {
				if(this.isEducation(course)) {
					return 'base';
				}
			}
		}
		return 'none';
	}

	render() {
		let pointsSum = 0;
		return (
			<ul className="courses">
				{
					this.courses().map((course)=> {
						pointsSum += course.points;
						return <UserCourse key={course.code} course={course} type={this.courseType(course)} />
					})
				}
				<li className="points">{ Meteor.user() ? <b className="sum-margin">Total points: {pointsSum}</b> : 'Does not display sum if not logged in' }</li>				
			</ul>
		);
	}
}