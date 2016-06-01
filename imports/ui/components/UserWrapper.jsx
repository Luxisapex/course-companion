import React, { Component } from 'react';
// import Education from './Education.jsx';
// tech
// master

// UserCourseList?
import CourseList from './CourseList.jsx';
import GraduationRequirements from './GraduationRequirements.jsx';

export default class UserWrapper extends Component {
	render() {
		return(
			<div>
				<CourseList />
				<GraduationRequirements />
			</div>
		);
	}
}