// Does a bit of what typical App.jsx does
// Brings content together in organized fashion

import React from 'react';

import Navbar from '../components/Navbar.jsx';
import InputField from '../components/InputField.jsx';
import SearchCourse from '../components/SearchCourse.jsx';

export const MainLayout = ({content}) => (
	<div className="main-layout">
		<Navbar />
		{content}
		<InputField placeholder="Industriell ekonomi" />
		<SearchCourse />
	</div>
);