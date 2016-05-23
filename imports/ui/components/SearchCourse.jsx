// See ReactForEveryone #11/12/13
// Doesn't display courses before input (bug)

import React from 'react';

import { Courses } from '../../api/courses/courses.js';
import Course from './Course.jsx';

export default class SearchCourse extends React.Component {

	// State initializer
	constructor() {
		super();
		this.state = {
			search: ''
		};
	}

	// Input updater, controlled input better than free
	updateSearch(event) {
		this.setState({search: event.target.value});
	}

	// See if course matches any offered courses
	/*matches(course) {
		return ((course.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) || (course.code.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1));
	}*/

	courses() {
		console.log(this.state.search);
		return Courses.find({code: this.state.search.toUpperCase()});
	}

	render() {	
		// Define filtered courses
		/*let filteredCourses = Courses.find({}).fetch().filter(
			(course) => {
				return this.matches(course);
			}
		);*/
		return (
			/*<div>
				<input type="text" placeholder="TDDD27" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
				<ul>
					{filteredCourses.map((course) => {
						return course.code + ' ' + course.name + ' || ';
					})}
				</ul>
			</div>*/

			<div>
				<input type="text" value={this.state.search} 
					onChange={this.updateSearch.bind(this)} />
				<ul>	
						
					{this.courses().map((course) => {
						return <Course key={course._id} course={course} />
					})}

						
				</ul>
			</div>

		);
		// Possible implementation something like this
		// Course course={course} key={course.id}/>
	}
};




