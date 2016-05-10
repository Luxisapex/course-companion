// Takes input data and does something
// Should take different shape depending on expected input

import React from 'react';

export default class InputField extends React.Component {

	// State depends on what user has input so far. Edu > Tech > Master > None
	constructor() {
		super();

		if(Meteor.user().master) {
			this.state = {
				currentInput: 'none'
			}
		} else if (Meteor.user().tech) {
			this.state = {
				currentInput: 'master'
			}
		} else if (Meteor.user().edu) {
			this.state = {
				currentInput: 'tech'
			}
		} else {
			this.state = {
				currentInput: 'edu'
			}
		}
	}

	handleInput(event) {
		// Maybe route to /chosenoption 
		event.preventDefault();
		
		// Save input somewhere (a field in top left with edit and remove option)
		let text = this.refs.input.value.trim();
		// (Save it here)
		Meteor.call('addEducation', text);

		this.refs.input.value = "";
		
		// Next input (dynamic somehow)

		// this.refs.input.placeholder = "...";
	}

	render() {
		return (
			<form onSubmit={this.handleInput.bind(this)}> 
				<input
					type="text"
					ref="input"
					placeholder={this.state.currentInput}
				/>
			</form>
		);
	}
};