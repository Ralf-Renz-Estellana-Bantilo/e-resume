import { Checkbox, Divider, Slider } from 'antd'
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import React from 'react'

const OtherInfo = () =>
{
   const experienceLevelOptions = ['Entry-Level', 'Junior Level', 'Mid-Senior Level', 'Manager'];
   const jobTypeOptions = ['Full-time', 'Part-time', 'Contract', 'Temporary'];
   const workSetupOptions = ['On-site', 'Remote', 'Hybrid'];
   const jobTitleOptions = ['Junior Software Engineer', 'Frontend Software Engineer', 'Fullstack Developer'];


   return (
      <div className="flex flex-col gap-8 py-3 px-7">
         <div className="flex flex-col px-5 neumorphism-1 rounded-lg">
            <div className="flex flex-col py-2 gap-2">
               <h2 className='font-bold text-lg text-dark-blue-secondary'>PREFERENCES</h2>
               <Divider className='m-0'></Divider>
            </div>
            <div className="flex flex-col p-3 pb-6 gap-11">
               <div className="flex flex-col gap-2">
                  <Divider className='m-0' orientation="center">
                     <h3 className='font-semibold text-base text-dark-blue-secondary'>Experience Level</h3>
                  </Divider>
                  <div className='px-3'>
                     <Checkbox.Group className="w-full" options={experienceLevelOptions} value={['Junior Level']} />
                  </div>
               </div>
               <div className="flex flex-col gap-2">
                  <Divider className='m-0' orientation="center">

                     <h3 className='font-semibold text-base text-dark-blue-secondary'>Job Type</h3>
                  </Divider>
                  <div className='px-3'>
                     <Checkbox.Group className="w-full" options={jobTypeOptions} value={['Full-time']} />
                  </div>
               </div>
               <div className="flex flex-col gap-2">
                  <Divider className='m-0' orientation="center">

                     <h3 className='font-semibold text-base text-dark-blue-secondary'>Work Setup</h3>
                  </Divider>
                  <div className='px-3'>
                     <Checkbox.Group className="w-full" options={workSetupOptions} value={workSetupOptions} />
                  </div>
               </div>
               <div className="flex flex-col gap-2">
                  <Divider className='m-0' orientation="center">

                     <h3 className='font-semibold text-base text-dark-blue-secondary'>Title</h3>
                  </Divider>
                  <div className='px-3'>
                     <Checkbox.Group className="w-full" options={jobTitleOptions} value={jobTitleOptions} />
                  </div>
               </div>
               <div className="flex flex-col gap-2">
                  <Divider className='m-0' orientation="center">

                     <h3 className='font-semibold text-base text-dark-blue-secondary'>Availability (Phone call)</h3>
                  </Divider>
                  <div className='flex items-center px-3 gap-2'>
                     <div className="flex gap-2 items-center flex-1">
                        <p>Weekdays:</p>
                        <span className='font-semibold'>6pm - 8pm</span>
                     </div>
                     <div className="flex gap-2 items-center flex-1">
                        <p>Weekends:</p>
                        <span className='font-semibold'>8am - 8pm</span>
                     </div>
                  </div>
               </div>
               <div className="flex flex-col gap-2">
                  <Divider className='m-0' orientation="center">

                     <h3 className='font-semibold text-base text-dark-blue-secondary'>Salary Range</h3>
                  </Divider>
                  <div className='flex flex-col px-3'>
                     <Slider tooltip={{ formatter: null }} range={{ draggableTrack: true }} value={[80, 140]} min={50} max={200} />
                     <div className="flex justify-between items-center">
                        <p>Min: 50k</p>
                        <p>Max: 200k</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default OtherInfo