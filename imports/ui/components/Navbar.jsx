// Main navigation

import React from 'react';

export default class Navbar extends React.Component {


	render() {
		return(
			<ul className="nav-bar">
				<li className="nav-item">
					<a href="/faq">FAQ</a>
				</li>
				<li className="nav-item">
					<a href="/login">Login</a>
				</li>
			</ul>
		);
	}
};