import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
// import Education from './Education.jsx';
// tech
// master

// UserCourseList?
import CourseList from './CourseList.jsx';
import EducationList from './EducationList.jsx';
import GraduationRequirements from './GraduationRequirements.jsx';

export default class UserWrapper extends TrackerReact(Component) {
	render() {
		return(
			<div>
				<EducationList />
				<CourseList />
				<GraduationRequirements />
			</div>
		);
	}
}