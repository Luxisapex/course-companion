import '../stylesheets/pure.css';
import '../stylesheets/style.css';
import '../stylesheets/font-awesome.css';
// Need this?
import { Educations } from '../../api/courses/courses.js';

import React from 'react';

export default class Education extends React.Component {

	render() {
		return (
			<li className="pure-g">
				<a className="pure-u-1-2" href="/main">{this.props.education.name}</a>
			</li>
		);
	}
}