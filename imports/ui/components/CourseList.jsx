// Lists courses associated with a student

// Should create course-objects (map over students courses) and pass down course code and name dynamically

// Should receieve a student object

import React, { PropTypes } from 'react';
import Course from './Course.jsx';

// Temporary
import Navbar from './Navbar.jsx';

import '../stylesheets/style.css';

import { createContainer } from 'meteor/react-meteor-data';
import { Courses } from '../../api/courses/courses.js';

export default class CourseList extends React.Component {

	// Sums up all HP as well as render all courses, look over later
	render() {
		let pointsSum = 0;

		return (
			<ul className="courses">
				<Navbar />
				{this.props.courses.map((course)=> {
					if(course.finished) {
						pointsSum += course.points;
					}
					return <Course key={course._id} course={course} />
				})}
				<b className="sum-margin">{pointsSum}</b>
			</ul>
		);
	}
}

// Uses another react-data package than Tracker, replace later
CourseList.propTypes = {
	courses: PropTypes.array.isRequired,
};

// The link between Meteor data and React components
export default createContainer(() => {
	Meteor.subscribe('courses');
	return {
		courses: Courses.find({}).fetch(),
	};
}, CourseList);