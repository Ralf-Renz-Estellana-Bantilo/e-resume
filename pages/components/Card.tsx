import { Divider, Space, Tag } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'

const Card = () =>
{

   const mernStack = [4, 10, 1, 3]

   const [projects, setProjects] = useState( [
      {
         coverURL: 'cover1',
         title: 'Expenses Tracker Program',
         description: 'Lorem dolor sit amet, pariatur.',
         tagIDs: [...mernStack, 2, 5, 9],
      },
      {
         coverURL: 'cover2',
         title: 'Payroll System',
         description: 'Lorem dolor sit amet, consectet eu fugiat nulla pariatur.',
         tagIDs: [...mernStack, 2, 5, 9],
      },
      {
         coverURL: 'cover3',
         title: 'Applicant Tracking & Onboarding System',
         description: 'Lorem dolor pariatur incididunt ut lab eu fugiat nulla pariatur.',
         tagIDs: [2, 4, 6, 7, 9, 11],
      },
      {
         coverURL: 'cover3',
         title: 'GWA Calculator Program',
         description: 'Lorem dolor pariatur incididunt ut fugiat nulla pariatur.',
         tagIDs: [1, 2, 8],
      },
      {
         coverURL: 'cover4',
         title: 'Job Search System',
         description: 'Lorem dolor sit amet, consectet ullamcorper adip sit amet.',
         tagIDs: [...mernStack, 2, 8],
      },
      {
         coverURL: 'cover5',
         title: 'Basketball Statistics Program',
         description: 'Lorem dolor sit amet, nulla pariatur.',
         tagIDs: [12, 4, 8],
      },
      {
         coverURL: 'cover5',
         title: 'Test Simulator Program',
         description: 'Lorem dolor sit amet, nulla pariatur.',
         tagIDs: [12, 4, 8],
      },
      {
         coverURL: 'cover5',
         title: 'Random Student Picker Program',
         description: 'Lorem dolor sit amet, nulla pariatur.',
         tagIDs: [12, 4, 8],
      },
   ] )
   const [tagList, setTaglist] = useState( [
      {
         ID: 1,
         label: 'React JS',
         color: 'cyan',
      },
      {
         ID: 2,
         label: 'JavaScript',
         color: 'yellow',
      },
      {
         ID: 3,
         label: 'Node JS',
         color: 'green',
      },
      {
         ID: 4,
         label: 'MySQL',
         color: 'orange',
      },
      {
         ID: 5,
         label: 'TailwindCSS',
         color: 'blue',
      },
      {
         ID: 6,
         label: 'Vue JS',
         color: 'lime',
      },
      {
         ID: 7,
         label: 'Vuetify',
         color: 'geekblue',
      },
      {
         ID: 8,
         label: 'Photoshop',
         color: 'geekblue',
      },
      {
         ID: 9,
         label: 'Figma',
         color: 'orange',
      },
      {
         ID: 10,
         label: 'Express JS',
         color: 'yellow',
      },
      {
         ID: 11,
         label: 'PHP',
         color: 'orange',
      },
      {
         ID: 12,
         label: 'Java',
         color: 'volcano',
      },
   ] )

   const findTagByID = ( tagID: Number ) =>
   {
      return tagList.filter( ( list ) => list.ID == tagID )[0]
   }

   return (
      <>
         {projects.map( ( { coverURL, title, description, tagIDs }, i ) =>
         {
            return <div className='flex flex-col w-[48%] h-auto neumorphism-2 rounded-xl overflow-hidden' key={i}>
               <div className='w-full h-44 overflow-clip bg-gray-400'>
                  <Image
                     className="object-cover h-full"
                     src={require( `@/assets/Images/${coverURL}.jpg` ).default}
                     alt={title}
                  />
               </div>
               <div className="flex flex-col gap-2 p-2">
                  <div className='flex flex-col justify-center'>
                     <h3 className='text-lg font-semibold text-dark-blue-secondary text-center py-2'>{title}</h3>
                     <p className='text-dark-blue-secondary text-xs text-justify font-medium'>{description}</p>
                  </div>
                  <Divider className='m-0'></Divider>
                  <div>
                     <Space size={[0, tagIDs.length]} wrap>
                        {tagIDs.map( ( tagID, i ) =>
                        {
                           return <Tag className='rounded-full' color={findTagByID( tagID ).color} key={i}>{findTagByID( tagID ).label}</Tag>
                        } )}
                     </Space>
                  </div>
               </div>
            </div>
         } )}
      </>
   )
}

export default Card