// Does a bit of what typical App.jsx does
// Brings content together in organized fashion

import React from 'react';


// <InputField user={Meteor.user()}/>

import Navbar from '../components/Navbar.jsx';
import InputField from '../components/InputField.jsx';
import SearchCourse from '../components/SearchCourse.jsx';
import AccountsUIWrapper from '../components/AccountsUIWrapper.jsx';

export const MainLayout = ({content}) => (
	<div className="main-layout">
		<AccountsUIWrapper />
		<Navbar />
		{content}
		<InputField />
	</div>
);