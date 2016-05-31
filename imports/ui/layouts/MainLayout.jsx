import React from 'react';

import AccountsUIWrapper from '../components/AccountsUIWrapper.jsx';
import CourseList from '../components/CourseList.jsx';
import InputField from '../components/InputField.jsx';
import SearchCourse from '../components/SearchCourse.jsx';

export const MainLayout = () => (
	<div className="main-layout">
		<AccountsUIWrapper />
		<CourseList />
		<InputField />
		<SearchCourse />
	</div>
);