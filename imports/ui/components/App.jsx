import React from 'react';

// Should be placed in shared(?) location between server and client
Courses = new Mongo.Collection("courses");

export default class App extends React.Component {

	addCourse(event) {
		event.preventDefault();
		var text = this.refs.course.value.trim();

		// Proper use is calling api which calls db
		// See console output, it works but doesnt find 'courses/insert'
		Courses.insert({
			courseCode: text,
			available: false,
			createdAt: new Date()
		});

		this.refs.course.value = "";
	}

	render() {
		return (
			<div>
				<h1>Course Companion</h1>
				<form className="new-course" onSubmit={this.addCourse.bind(this)}> 
					<input
						type="text"
						ref="course"
						placeholder="TDDD27"
					/>
				</form>
			</div>
		);
	}
};