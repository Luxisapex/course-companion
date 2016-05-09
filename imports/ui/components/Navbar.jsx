// Main navigation

import React from 'react';

import '../stylesheets/pure.css';

export default class Navbar extends React.Component {


	render() {
		return(
			<div className="pure-menu pure-menu-horizontal">
				<a href="/" className="pure-menu-heading">Course Companion</a>
				<ul className="pure-menu-list">
					<li className="pure-menu-item">
						<a href="/faq">FAQ</a>
					</li>
					<li className="pure-menu-item">
						<a href="/login">Login</a>
					</li>
				</ul>
			</div>
		);
	}
};