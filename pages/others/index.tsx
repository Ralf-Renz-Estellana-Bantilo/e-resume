import React from 'react';
import Container from '../components/Container';
import Preferences from '../components/Preferences';
import Timelines from '../components/Timelines';
import Qualifications from '../components/Qualifications';
import ContactForm from '../components/ContactForm';

const OthersPage = () => {
	return (
		<>
			{/* PREFERENCES */}
			<Container title='PREFERENCES'>
				<Preferences />
			</Container>

			{/* TIMELINE */}
			<Container title='TIMELINE'>
				<Timelines />
			</Container>

			{/* QUALIFICATIONS */}
			<Container title='QUALIFICATIONS'>
				<Qualifications />
			</Container>

			{/* CONTACT ME */}
			<Container title='CONTACT ME'>
				<ContactForm />
			</Container>
		</>
	);
};

export default OthersPage;
