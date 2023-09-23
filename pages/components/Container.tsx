import { ContainerPropsInterface } from '@/interfaces'
import { Divider } from 'antd'
import React from 'react'

const Container = ( { title, children }: ContainerPropsInterface ) =>
{
   return (
      <div className="flex flex-col px-5 gap-2 neumorphism-1 rounded-lg max-md:px-3">
         <div className="flex flex-col py-2 gap-2" >
            <h2 className='font-bold text-lg text-accent-secondary'>{title}</h2>
            <Divider className='m-0'></Divider>
         </div>
         {children}
      </div>
   )
}

export default Container