import { Divider, Space, Tag } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'

interface CardProps
{
   coverURL: string;
   title: string;
   description: string;
   tagIDs: Array<Number>;
}


const Card = ( { coverURL, title, description, tagIDs }: CardProps ) =>
{
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
      <div className='flex flex-col w-[48%] h-auto neumorphism-2 rounded-xl overflow-hidden'>
         <div className='w-full h-44 overflow-clip'>
            <Image
               className="object-cover h-full"
               src={require( `@/public/Images/${coverURL}` ).default}
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
   )
}

export default Card