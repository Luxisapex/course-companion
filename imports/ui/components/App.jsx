import React from 'react';

// Just trying for now
// Should be placed in shared(?) location between server and client
// Courses = new Mongo.Collection("courses");

export default class App extends React.Component {
	
	addCourse(event) {
		event.preventDefault();
		var text = this.refs.course.value.trim();

		// Make this run properly by doing server side
		// Courses.insert({
		// 	courseCode: text,
		// 	available: false,
		// 	createdAt: new Date()
		// });

		console.log(text);
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