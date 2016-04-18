// Takes input data and does something
// Should take different shape depending on expected input

import React from 'react';

export default class InputField extends React.Component {

	handleInput(event) {
		// Maybe route to /chosenoption 
		event.preventDefault();
		
		// Save input somewhere (a field in top left with edit and remove option)
		var text = this.refs.input.value.trim();
		// (Save it here)
		this.refs.input.value = "";
		
		// Next input (dynamic somehow)
		this.refs.input.placeholder = "...";
	}

	render() {
		return (
			<form className={this.props.inputType} onSubmit={this.handleInput.bind(this)}> 
				<input
					type="text"
					ref="input"
					placeholder={this.props.placeholder}
				/>
			</form>
		);
	}
};