// Lists courses associated with a student

// Should create course-objects (map over students courses) and pass down course code and name dynamically

// Should receieve a student object

import React from 'react';
import Course from './Course.jsx';

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