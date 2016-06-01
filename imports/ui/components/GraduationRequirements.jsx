import React, { Component } from 'react';

import EducationRequirements from './EducationRequirements.jsx';
import TechnicalRequirements from './TechnicalRequirements.jsx';
import MasterRequirements from './MasterRequirements.jsx';

export default class GraduationRequirements extends Component {
	render() {
		return(
			<div>
				<EducationRequirements />
				<TechnicalRequirements />
				<MasterRequirements />
			</div>
		);
	}
}