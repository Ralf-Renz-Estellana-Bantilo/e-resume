import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'


import 'react-toastify/dist/ReactToastify.css';
import Container from './Container';
import ContactForm from './ContactForm';
import Preferences from './Preferences';
import Timelines from './Timelines';
import Qualifications from './Qualifications';

const OtherInfo = () =>
{
   const [isVisible, setIsVisible] = useState<boolean>( false )

   useEffect( () =>
   {
      const timeout = setTimeout( () =>
      {
         setIsVisible( true );
      }, 200 );

      return () =>
      {
         clearTimeout( timeout )
      };
   }, [] );

   return (
      <>
         <div className="flex flex-col gap-8 p-7 pt-3 max-md:px-4">

            {isVisible ?
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
               </> :
               <div className='h-[90vh] flex items-center justify-center'>
                  <Spin size="large" />
               </div>}
         </div>
      </>
   )
}

export default OtherInfo