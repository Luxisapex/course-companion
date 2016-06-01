import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import { Educations } from '../../api/educations/educations.js';
import Education from './Education.jsx';

export default class InputField extends TrackerReact(Component) {
	
	constructor() {
		super();
		this.state = {
			search: '',
			subscription: {
				user: Meteor.subscribe('user'),
				educations: Meteor.subscribe('educations')
			}
		};
	}

	updateSearch(event) {
		this.setState({search: event.target.value});
	}

	educations() {
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

	removeText() {
		this.setState({search: ''});
	}

	render() {
		return (
			<div>
				<input
					type="text"
					value={this.state.search}
					onChange={this.updateSearch.bind(this)}
					ref="input"
					placeholder="Filter educations"
				/>
				<ul>
					{this.educations().map((education) => {
						return <Education key={education._id} education={education} removeText={this.removeText.bind(this)} />;
					})}
				</ul>
				
			</div>
		);
	}
};