import '../stylesheets/pure.css';
import '../stylesheets/style.css';
import '../stylesheets/font-awesome.css';

import React, { Component } from 'react';

export default class Course extends Component {

	constructor() {
		super();
		this.state = {
			subscription: {
				user: Meteor.subscribe('user')
			}
		}
	}

	// Checks if a course is part of the users education
	isEducation() {
		let courses = Meteor.user().education.courses;
		for(let i = 0; i < courses.length; i++) {
			if(courses[i].code === this.props.course.code) {
				return true;
			}
		}
	}

	// Checks if a course is a technical course
	isTech() {
		let courses = Meteor.user().technical.courses;
		for(let i = 0; i < courses.length; i++) {
			if(courses[i].code === this.props.course.code) {
				return true;
			}
		}
	}

	// Checks if a course is a master course
	isMaster() {
		let courses = Meteor.user().master.courses;
		for(let i = 0; i < courses.length; i++) {
			if(courses[i].code === this.props.course.code) {
				return true;
			}
		}
	}

	// Checks what type the course is 'master/tech/base'
	getCourseType() {
		let user = Meteor.user();
		if(user.master) {
			if(this.isMaster()){
				return 'master';
			}
		}
		if(user.technical) {
			if(this.isTech()) {
				return 'technical';
			}
		}
		if(user.education) {
			if(this.isEducation()) {
				return 'base';
			}
		}
	}

	render() {

		const linkAddress = "http://kdb-5.liu.se/liu/lith//studiehandboken/svkursplan.lasso?k_budget_year=2016&k_kurskod=" + this.props.course.code;

		let typeIconClass = '';
		let courseType = this.getCourseType();

		if(courseType === 'master') {
			typeIconClass = 'fa fa-star';
		} else if (courseType === 'technical') {
			typeIconClass = 'fa fa-wrench';
		} else if (courseType === 'base') {
			typeIconClass = 'fa fa-pencil';
		} else {
			typeIconClass = 'fa fa-question';
		}

		return (
			<li className="pure-g">		
				<a className="pure-u-1-5" href={linkAddress}>
					{this.props.course.code}
				</a>
				
				<span className="pure-u-1-8">
					{this.props.course.points}
				</span>
				
				<span className="pure-u-1-8">
					<i className={typeIconClass} aria-hidden="true"></i>
				</span>
				
				<span className="pure-u-1-2">
					{this.props.course.name}
				</span>
			</li>
		);
	}
}