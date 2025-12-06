import React, { useContext } from 'react';
import { cardVariants, quicksand, viewportVariant } from '@/utils/Resources';
import { motion } from 'framer-motion';
import { Checkbox, Divider } from 'antd';
import { ContextValueType } from '@/interfaces';
import { ComponentContext } from '@/context/context';
import {
   experienceLevelOptions,
   jobTitleOptions1,
   jobTitleOptions2,
   jobTypeOptions,
   techStackOptions1,
   techStackOptions2,
   workSetupOptions,
} from '@/utils/utils';

const Preferences = () => {
   const context = useContext<ContextValueType | null>(ComponentContext);

   const experienceLevel: string[] = ['Mid-Level', 'Senior Level'];
   const jobType: string[] = ['Full-time'];
   const workSetup: string[] = ['Remote', 'Hybrid'];
   const jobTitle1: string[] = [
      'Software Engineer',
      'Frontend Software Engineer',
      'Fullstack Developer (React/Node)',
   ];
   const jobTitle2: string[] = [
      'React Developer',
      ' Programmer',
      'Web Developer',
   ];
   const techStack1: string[] = [
      'MySQL, ExpressJS, ReactJS, NodeJS',
      'ReactJS, NextJS, TypeScript, NodeJS',
   ];
   const techStack2: string[] = ['MySQL, ExpressJS, VueJS, NodeJS'];

   return (
      <div className='flex flex-col p-3 pb-6 gap-11 max-md:gap-5'>
         {context?.isMobile ? (
            <>
               <div className='flex flex-col gap-2'>
                  <Divider className='m-0 ' orientation='center'>
                     <h3 className='text-base font-semibold text-accent-primary '>
                        Experience Level
                     </h3>
                  </Divider>
                  <div className='px-3'>
                     {experienceLevelOptions.map((option, i) => (
                        <Checkbox.Group
                           className={`${quicksand.className} w-full`}
                           options={[option]}
                           value={experienceLevel}
                           key={i}
                        />
                     ))}
                  </div>
               </div>
               <div className='flex flex-col gap-2'>
                  <Divider className='m-0 ' orientation='center'>
                     <h3 className='text-base font-semibold text-accent-primary '>
                        Job Type
                     </h3>
                  </Divider>
                  <div className='px-3'>
                     {jobTypeOptions.map((option, i) => (
                        <Checkbox.Group
                           className={`${quicksand.className} w-full`}
                           options={[option]}
                           value={jobType}
                           key={i}
                        />
                     ))}
                  </div>
               </div>
               <div className='flex flex-col gap-2'>
                  <Divider className='m-0 ' orientation='center'>
                     <h3 className='text-base font-semibold text-accent-primary '>
                        Work Setup
                     </h3>
                  </Divider>
                  <div className='px-3'>
                     {workSetupOptions.map((option, i) => (
                        <Checkbox.Group
                           className={`${quicksand.className} w-full`}
                           options={[option]}
                           value={workSetup}
                           key={i}
                        />
                     ))}
                  </div>
               </div>
               <div className='flex flex-col gap-2'>
                  <Divider className='m-0 ' orientation='center'>
                     <h3 className='text-base font-semibold text-accent-primary'>
                        Title
                     </h3>
                  </Divider>
                  <div className='px-3'>
                     {[...jobTitleOptions1, ...jobTitleOptions2].map(
                        (option, i) => {
                           return (
                              <Checkbox.Group
                                 className={`${quicksand.className} w-full`}
                                 options={[option]}
                                 value={[option]}
                                 key={i}
                              />
                           );
                        }
                     )}
                  </div>
               </div>
               {/* <div className="flex flex-col gap-2">
                  <Divider className='m-0 ' orientation="center">

                     <h3 className='text-base font-semibold text-accent-secondary '>Availability (Phone call)</h3>
                  </Divider>
                  <div className='flex flex-col items-start gap-2 px-3'>
                     <div className="flex items-center flex-1 gap-2">
                        <p>Weekdays:</p>
                        <span className='font-semibold'>6pm - 8pm</span>
                     </div>
                     <div className="flex items-center flex-1 gap-2">
                        <p>Weekends:</p>
                        <span className='font-semibold'>8am - 8pm</span>
                     </div>
                  </div>
               </div> */}
               <div className='flex flex-col gap-2'>
                  <Divider className='m-0 ' orientation='center'>
                     <h3 className='text-base font-semibold text-accent-primary'>
                        Tech Stack
                     </h3>
                  </Divider>
                  <div className='flex flex-col items-start px-3'>
                     {[...techStackOptions1, ...techStackOptions2].map(
                        (option, i) => {
                           return (
                              <Checkbox.Group
                                 className={`${quicksand.className} w-full`}
                                 options={[option]}
                                 value={[...techStack1, ...techStack2]}
                                 key={i}
                              />
                           );
                        }
                     )}
                  </div>
               </div>
            </>
         ) : (
            <>
               <motion.div
                  className='flex flex-col gap-2'
                  variants={cardVariants}
                  initial='offscreen'
                  whileInView='onscreen'
                  viewport={viewportVariant}>
                  <Divider className='m-0 ' orientation='center'>
                     <h3 className='text-base font-semibold text-accent-primary'>
                        Experience Level
                     </h3>
                  </Divider>
                  <div className='px-3'>
                     <Checkbox.Group
                        className={`${quicksand.className} w-full`}
                        options={experienceLevelOptions}
                        value={experienceLevel}
                     />
                  </div>
               </motion.div>
               <motion.div
                  className='flex flex-col gap-2'
                  variants={cardVariants}
                  initial='offscreen'
                  whileInView='onscreen'
                  viewport={viewportVariant}>
                  <Divider className='m-0 ' orientation='center'>
                     <h3 className='text-base font-semibold text-accent-primary'>
                        Job Type
                     </h3>
                  </Divider>
                  <div className='px-3'>
                     <Checkbox.Group
                        className={`${quicksand.className} w-full`}
                        options={jobTypeOptions}
                        value={jobType}
                     />
                  </div>
               </motion.div>
               <motion.div
                  className='flex flex-col gap-2'
                  variants={cardVariants}
                  initial='offscreen'
                  whileInView='onscreen'
                  viewport={viewportVariant}>
                  <Divider className='m-0 ' orientation='center'>
                     <h3 className='text-base font-semibold text-accent-primary'>
                        Work Setup
                     </h3>
                  </Divider>
                  <div className='px-3'>
                     <Checkbox.Group
                        style={{ color: 'green' }}
                        className={`${quicksand.className} w-full`}
                        options={workSetupOptions}
                        value={workSetup}
                     />
                  </div>
               </motion.div>
               <motion.div
                  className='flex flex-col gap-2'
                  variants={cardVariants}
                  initial='offscreen'
                  whileInView='onscreen'
                  viewport={viewportVariant}>
                  <Divider className='m-0 ' orientation='center'>
                     <h3 className='text-base font-semibold text-accent-primary'>
                        Title
                     </h3>
                  </Divider>
                  <div className='px-3 space-y-3'>
                     <Checkbox.Group
                        className={`${quicksand.className} w-full`}
                        options={jobTitleOptions1}
                        value={jobTitle1}
                     />
                     <Checkbox.Group
                        className={`${quicksand.className} w-full`}
                        options={jobTitleOptions2}
                        value={jobTitle2}
                     />
                  </div>
               </motion.div>
               <motion.div
                  className='flex flex-col gap-2'
                  variants={cardVariants}
                  initial='offscreen'
                  whileInView='onscreen'
                  viewport={viewportVariant}>
                  <Divider className='m-0 ' orientation='center'>
                     <h3 className='text-base font-semibold text-accent-primary'>
                        Tech Stack
                     </h3>
                  </Divider>
                  <div className='flex flex-col items-start gap-2 px-3'>
                     <Checkbox.Group
                        className={`${quicksand.className} w-full`}
                        options={techStackOptions1}
                        value={techStack1}
                     />
                     <Checkbox.Group
                        className={`${quicksand.className} w-full`}
                        options={techStackOptions2}
                        value={techStack2}
                     />
                  </div>
               </motion.div>
               {/* <div className="flex flex-col gap-2">
                  <Divider className='m-0 ' orientation="center">

                     <h3 className='text-base font-semibold text-accent-primary'>Availability (Phone call)</h3>
                  </Divider>
                  <div className='flex items-center justify-around gap-2 px-3'>
                     <div className="flex items-center gap-2">
                        <p>Weekdays:</p>
                        <span className='font-semibold'>11:30 AM - 12:30 PM</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <p>Weekends:</p>
                        <span className='font-semibold'>9:00 AM - 4:00 PM</span>
                     </div>
                  </div>
               </div> */}
            </>
         )}
         {/* <div className="flex flex-col gap-2">
            <Divider className='m-0 ' orientation="center">

               <h3 className='text-base font-semibold text-accent-primary'>Salary Range</h3>
            </Divider>
            <div className='flex flex-col px-3'>
               <Slider
                  tooltip={{ formatter: null }}
                  range={{ draggableTrack: true }}
                  min={50}
                  max={150}
                  value={[75, 110]}
               />
               <div className="flex items-center justify-between">
                  <p>Min: $50k</p>
                  <p>Max: $150k</p>
               </div>
            </div>
         </div> */}
      </div>
   );
};

export default Preferences;
