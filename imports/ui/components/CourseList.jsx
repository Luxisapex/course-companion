// Lists courses associated with a student

// Should create course-objects (map over students courses) and pass down course code and name dynamically

// Should receieve a student object

import React, { PropTypes } from 'react';
import Course from './Course.jsx';

import { createContainer } from 'meteor/react-meteor-data';
import { Courses } from '../../api/courses/courses.js';

export default class CourseList extends React.Component {


	render() {
		return (
			<div className="courses">
				{this.props.courses.map((course)=> {
					return <Course code={course.code} name={course.name} />
				})}
			</div>
		);
	}
}

CourseList.propTypes = {
	courses: PropTypes.array.isRequired,
};

export default createContainer(() => {
	Meteor.subscribe('courses');
	return {
		courses: Courses.find({}).fetch(),
	};
}, CourseList);