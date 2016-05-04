// Single course listing

// Should link to course page

// Checkbox should mark course as completed (greyed)

// X should remove course from student's profile

import '../stylesheets/pure.css';
import '../stylesheets/style.css';
import '../stylesheets/font-awesome.css';

import React from 'react';

export default class Course extends React.Component {


	render() {
		return (
			<ul className="course">
				<li className="course-code"><a href="/main">{this.props.code}</a></li>
				<li className="course-name">{this.props.name}</li>
				<li className="check-course"><input type="checkbox"/></li>
				<li className="remove-course"><i className="fa fa-trash" aria-hidden="true"></i></li>
			</ul>
		);
	}
}