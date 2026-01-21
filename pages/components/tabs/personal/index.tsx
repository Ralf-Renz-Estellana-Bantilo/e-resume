import React from 'react';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';

const PersonalTab = () => {
   return (
      <div className='flex flex-col gap-8 pt-3 max-md:px-4'>
         <Summary />
         <Experience />
         <Education />
      </div>
   );
};

export default PersonalTab;
