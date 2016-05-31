import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import { Educations } from '../../api/educations/educations.js';
import Education from './Education.jsx';

import { addEducation, addTechnical, addMaster, refreshCourses } from '../../api/users/methods.js';

export default class InputField extends TrackerReact(Component) {
	
	constructor() {
		super();
		this.state = {
			search: '',
			subscription: {
				user: Meteor.subscribe('user')
			}
		};
	}

	updateSearch(event) {
		this.setState({search: event.target.value});
	}

	educations() {
		if(this.state.subscription.user.ready()) {
			let user = Meteor.user();
			if(user.master) {
				return [];
			} else if(user.technical) {
				return Educations.find({type: "master", name: {$regex : new RegExp(this.state.search, "i")}}).fetch();
			} else if(user.education) {
				return Educations.find({type: "tech", name: {$regex : new RegExp(this.state.search, "i")}}).fetch();
			}
			return Educations.find({type: "base", name: {$regex : new RegExp(this.state.search, "i")}}).fetch();		
		}
		return [];
	}

	handleInput(event) {
		event.preventDefault();
		
		let text = this.refs.input.value.trim();
		let user = Meteor.user();

		if(user.master) {
			
		} else if (user.technical) {
			addMaster.call({
				userId: Meteor.userId(),
				master: text
			});
		} else if (user.education) {
			addTechnical.call({
				userId: Meteor.userId(),
				technical: text
			});
		} else {
			addEducation.call({
				userId: Meteor.userId(),
				education: text
			});
		}

		this.setState({search: ''});
	}

	// Temporary solution to do async
	handleButton(event) {
		event.preventDefault();
		
		refreshCourses.call({
			userId: Meteor.userId()
		});
	}

	render() {
		if(this.state.subscription.user.ready()) {
			let user = Meteor.user();
			if(user.master) {
				this.refs.input.hidden = true;
			} else if (user.technical) {
				this.refs.input.placeholder = 'Master profile';
			} else if (user.education) {
				this.refs.input.placeholder = 'Technical specialization';
			} else {
				this.refs.input.placeholder = 'Education';
			}
		}

		return (
			<div>
				<form onSubmit={this.handleInput.bind(this)}> 
					<input
						type="text"
						value={this.state.search}
						onChange={this.updateSearch.bind(this)}
						ref="input"
					/>
					<input
						type="button"
						ref="button"
						value="Update courses"
						onClick={this.handleButton.bind(this)}
					/>
				</form>
				<ul>
					{this.educations().map((education) => {
						return <Education key={education._id} education={education} />;
					})}		
				</ul>
			</div>
		);
	}
};
