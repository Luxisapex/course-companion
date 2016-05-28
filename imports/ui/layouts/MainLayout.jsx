import React from 'react';


// <InputField user={Meteor.user()}/>

import AccountsUIWrapper from '../components/AccountsUIWrapper.jsx';
import Navbar from '../components/Navbar.jsx';
import CourseList from '../components/CourseList.jsx';
import InputField from '../components/InputField.jsx';
import SearchCourse from '../components/SearchCourse.jsx';

export const MainLayout = ({content}) => (
	<div className="main-layout">
		{content}
		<AccountsUIWrapper />
		<CourseList />
		<InputField />
		<SearchCourse />
	</div>
);
	// <Navbar />