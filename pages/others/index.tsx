import React from 'react';
import Container from '../components/Container';
import Preferences from './components/Preferences';
import Timelines from './components/Timelines';
import Qualifications from './components/Qualifications';
import ContactForm from './components/ContactForm';

const OthersPage = () => {
   return (
      <>
         <Container title='PREFERENCES'>
            <Preferences />
         </Container>

         <Container title='TIMELINE'>
            <Timelines />
         </Container>

         <Container title='QUALIFICATIONS'>
            <Qualifications />
         </Container>

         <Container title='CONTACT ME'>
            <ContactForm />
         </Container>
      </>
   );
};

export default OthersPage;
