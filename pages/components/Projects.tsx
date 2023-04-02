import { CheckOutlined } from '@ant-design/icons'
import { Divider } from 'antd'
import React, { useState } from 'react'
import Card from './Card'

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

   return (
      <div className="flex flex-col gap-8 py-3 px-7">
         <div className="flex flex-col px-5 neumorphism-1 rounded-lg">
            <div className="flex flex-col py-2 gap-2">
               <h2 className='font-bold text-lg text-dark-blue-secondary'>SERVICES</h2>
               <Divider className='m-0'></Divider>
            </div>
            <div className="flex flex-wrap justify-evenly p-3 pb-6 gap-5">
               {services.map( ( service, i ) =>
               {
                  return <div className="flex flex-col h-auto neumorphism-2 rounded-lg bg-background-primary w-[48%]" key={i}>
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
               } )}

            </div>
         </div>

         <div className="flex flex-col px-5 neumorphism-1 rounded-lg pb-3">
            <div className="flex flex-col py-2 gap-2">
               <h2 className='font-bold text-lg text-dark-blue-secondary'>PROJECTS</h2>
               <Divider className='m-0'></Divider>
            </div>

            <div className='flex flex-wrap justify-evenly gap-5 py-3 px-3'>
               {/* {projects.map( ( { coverURL, title, description, tagIDs } ) =>
               {
                  return <Card coverURL={coverURL} title={title} description={description} tagIDs={tagIDs} key={title} />

               } )} */}

               <Card />
            </div>
         </div>
      </div>
   )
}

export default Projects
