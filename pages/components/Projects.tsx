import { CheckOutlined } from '@ant-design/icons'
import { Divider } from 'antd'
import React, { useEffect, useState } from 'react'
import Card from './Card'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

const Projects = () =>
{
   const [services, setServices] = useState( [
      {
         category: 'FRONTEND',
         items: [
            'DOM Manipulation',
            'Reusable Components',
            'Dynamic User Interface',
         ],
      },
      {
         category: 'BACKEND',
         items: [
            'Dynamic RESTful APIs',
            'Database Views',
            'Data Consistency',
         ],
      },
      {
         category: 'FULLSTACK',
         items: [
            'Unit Test',
            'Code Review',
            'System Maintenance',
         ],
      },
      {
         category: 'DESIGN',
         items: [
            'UI/UX Design',
            'Design Tools',
            'Photo Manipulation',
         ],
      },
   ] )

   const [screenSize, setScreenSize] = useState( {
      width: window.innerWidth,
      height: window.innerHeight
   } );

   const MOBILE = 600

   useEffect( () =>
   {
      const handleResize = () =>
      {
         setScreenSize( {
            width: window.innerWidth,
            height: window.innerHeight
         } );
      };

      window.addEventListener( 'resize', handleResize );

      return () =>
      {
         window.removeEventListener( 'resize', handleResize );
      };
   }, [] );

   const { width } = screenSize;

   return (
      <div className="flex flex-col gap-8 p-7 pt-3 min-h-screen max-md:px-4">
         <div className="flex flex-col px-5 neumorphism-1 rounded-lg max-md:px-3">
            <div className="flex flex-col py-2 gap-2">
               <h2 className='font-bold text-lg text-dark-blue-secondary'>SERVICES</h2>
               <Divider className='m-0'></Divider>
            </div>
            <div className="flex flex-wrap justify-evenly pb-6 gap-5 max-md:pb-1">
               {width > MOBILE ? <> {services.map( ( service, i ) =>
               {
                  return <div className="flex flex-col h-auto neumorphism-2 rounded-lg bg-background-primary w-[48%] max-sm:w-full max-md:w-[75%] max-lg:w-[48%]" key={i}>
                     <div className="flex flex-col">
                        <h3 className='font-semibold text-center p-2 text-base text-dark-blue-secondary'>{service.category}</h3>
                        <Divider className='m-0'></Divider>
                     </div>
                     <div className="flex flex-col p-2 gap-1">
                        {service.items.map( ( item, o ) =>
                        {
                           return <div className="flex items-center gap-2" key={o}>
                              <CheckOutlined />
                              <p className='text-dark-blue-secondary font-medium'>{item}</p>
                           </div>
                        } )}

                     </div>
                  </div>
               } )}</> : <>
                  <Swiper
                     slidesPerView={1}
                     centeredSlides={true}
                     autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                     }}
                     pagination={{
                        clickable: true,
                     }}
                     modules={[Pagination, Autoplay]}
                     className="mySwiper bg-background-primary"
                  >

                     {services.map( ( service, i ) =>
                     {
                        return <SwiperSlide className='p-4 pb-8 ' key={i}>
                           <div className="flex flex-col h-auto neumorphism-2 rounded-lg bg-background-primary w-[48%] max-sm:w-full max-md:w-[75%] max-lg:w-[48%]" key={i}>
                              <div className="flex flex-col">
                                 <h3 className='font-semibold text-center p-2 text-base text-dark-blue-secondary'>{service.category}</h3>
                                 <Divider className='m-0'></Divider>
                              </div>
                              <div className="flex flex-col p-2 gap-1">
                                 {service.items.map( ( item, o ) =>
                                 {
                                    return <div className="flex items-center gap-2" key={o}>
                                       <CheckOutlined />
                                       <p className='text-dark-blue-secondary font-medium text-base'>{item}</p>
                                    </div>
                                 } )}

                              </div>
                           </div>
                        </SwiperSlide>
                     } )}

                  </Swiper>
               </>}


            </div>
         </div>

         <div className="flex flex-col px-5 neumorphism-1 rounded-lg max-md:px-3">
            <div className="flex flex-col py-2 gap-2">
               <h2 className='font-bold text-lg text-dark-blue-secondary'>PROJECTS</h2>
               <Divider className='m-0'></Divider>
            </div>

            <div className='flex flex-wrap justify-evenly pb-6 gap-5 max-md:pb-1'>
               <Card />
            </div>
         </div>
      </div>
   )
}

export default Projects
