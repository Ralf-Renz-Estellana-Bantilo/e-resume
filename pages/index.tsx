import { Timeline } from 'antd';
import React, { useEffect } from 'react';
import { Quicksand } from 'next/font/google';
import { motion } from 'framer-motion';
import { cardVariants, viewportVariant } from '@/utils/Resources';
import Container from './components/Container';
import 'react-toastify/dist/ReactToastify.css';
import { setTimestamp } from '@/utils/utils';

const quicksand = Quicksand({ subsets: ['latin'] });

type ExperienceType = {
   position: string;
   company: string;
   duration: string;
   description: {
      pointer: string;
   }[];
   type?: string;
   level?: 'Intern' | 'Junior' | 'Mid-level' | 'Senior';
};

const HomePage = () => {
   const experiences: ExperienceType[] = [
      {
         position: 'FRONT-END DEVELOPER',
         company: 'BizBloqs Management Solutions BV',
         duration: 'December 2023 - Present',
         // level: 'Mid-level',
         // type: 'Hybrid',
         description: [
            {
               pointer:
                  'Led a cross-functional team of frontend and backend engineers to deliver multiple internal and client-facing web platforms, improving delivery predictability and code quality.',
            },
            {
               pointer:
                  'Owned the frontend architecture and UI/UX implementation for core products, defining reusable patterns, component libraries, and best practices adopted across projects.',
            },
            {
               pointer:
                  'Redesigned and modernized legacy UIs, improving usability and visual consistency, which contributed to higher user adoption and measurable revenue growth.',
            },
            {
               pointer:
                  'Built reusable internal libraries and shared components, reducing duplicated effort and accelerating feature development across teams.',
            },
            {
               pointer:
                  'Collaborated with distributed teams across the Philippines, Ukraine, the Netherlands, and the UK, ensuring alignment on technical decisions, timelines, and product requirements.',
            },
            {
               pointer:
                  'Conducted in-depth code reviews and technical mentoring, raising overall code quality and helping junior engineers, testers, and UI designers ramp up faster.',
            },
            {
               pointer:
                  'Acted as a technical bridge between product, design, and engineering, translating business goals into scalable frontend solutions.',
            },
            {
               pointer:
                  'Performed testing, debugging, and troubleshooting to ensure the reliability and functionality of software.',
            },
         ],
      },
      {
         position: 'PROGRAMMER',
         company: 'SL Agritech Corporation | Makati City, PH',
         duration: 'August 2022 - November 2023',
         // level: 'Junior',
         description: [
            {
               pointer:
                  'Led the design and development of an internal HR web application, streamlining applicant tracking and onboarding workflows and significantly improving recruitment efficiency.',
            },
            {
               pointer:
                  'Improved UI/UX across multiple internal systems, increasing usability and reducing friction for non-technical users.',
            },
            {
               pointer:
                  'Resolved critical production bugs and performance issues, improving system reliability and reducing operational disruptions.',
            },
            {
               pointer:
                  'Delivered enhancements that improved application performance and responsiveness, contributing to higher internal adoption.',
            },
            {
               pointer:
                  'Regularly communicated technical concepts to non-technical stakeholders, enabling faster decision-making and clearer prioritization.',
            },
         ],
      },
      {
         position: 'BACKEND DEVELOPER',
         company: 'Sterling Insurance Company Inc.',
         duration: `April - July 2022`,
         level: 'Intern',
         type: 'Remote',
         description: [
            {
               pointer:
                  'Conducted data extraction and processing from Excel files, ensuring accuracy and data integrity.',
            },
            {
               pointer:
                  'Developed robust server-side logic and performed regular maintenance to ensure high performance and responsiveness to frontend requests.',
            },
            {
               pointer:
                  'Created dynamic APIs to facilitate seamless data exchange and integration with frontend elements.',
            },
            {
               pointer:
                  'Conducted diagnostics tests to identify and resolve bugs, ensuring the reliability and stability of the system.',
            },
            {
               pointer:
                  'Provided prompt and effective technical support to users, troubleshooting issues and offering solutions to minimize downtime.',
            },
         ],
      },
      {
         position: 'TECHNICAL SUPPORT STAFF',
         company: 'Comelec',
         duration: `February - May 2022`,
         type: 'Part-Time',
         description: [
            {
               pointer:
                  'Delivered exemplary Level 1 support, swiftly addressing technical issues, troubleshooting problems, and ensuring timely resolutions to maintain uninterrupted operations.',
            },
            {
               pointer:
                  'Demonstrated expertise in equipment maintenance, performing regular checks, repairs, and upgrades to optimize system performance and reliability.',
            },
            {
               pointer:
                  'Proactively monitored IT equipment, promptly identifying and mitigating potential issues to minimize downtime and enhance overall system efficiency.',
            },
            {
               pointer: `Played a pivotal role in the seamless deployment of IT equipment, ensuring proper setup, configuration, and integration within the organization's infrastructure.`,
            },
         ],
      },
   ];

   const experienceTimelineItems = (experiences: ExperienceType) => {
      return {
         children: (
            <motion.div
               className='flex flex-col gap-2'
               variants={cardVariants}
               initial='offscreen'
               whileInView='onscreen'
               viewport={viewportVariant}>
               <div className='flex items-center justify-between'>
                  <div className='flex flex-col'>
                     <div className='flex items-center gap-2'>
                        <h3 className='text-base font-bold text-accent-primary'>
                           {experiences.position}
                        </h3>
                        {experiences.level && (
                           <span>({experiences?.level})</span>
                        )}
                     </div>
                     <div className='flex items-center justify-start gap-1'>
                        <h4 className='font-semibold text-accent-secondary'>
                           {experiences.company}
                        </h4>
                        {experiences?.type && (
                           <span className='text-accent-secondary'>
                              ({experiences?.type})
                           </span>
                        )}
                     </div>
                  </div>
                  <div className='flex items-center'>
                     <p className='font-semibold text-right text-accent-primary'>
                        {experiences.duration}
                     </p>
                  </div>
               </div>
               <div className='flex flex-col px-3'>
                  {experiences.description.map(({ pointer }, i) => {
                     return (
                        <div className='flex gap-3' key={i}>
                           <div className='text-accent-secondary'>•</div>
                           <p className='font-medium text-justify text-accent-secondary'>
                              {pointer}
                           </p>
                        </div>
                     );
                  })}
               </div>
            </motion.div>
         ),
      };
   };

   useEffect(() => {
      return () => {};
   }, []);

   return (
      <div className='flex flex-col gap-8 pt-3 max-md:px-4'>
         {/* SUMMARY */}
         <Container title='SUMMARY'>
            <div className='flex flex-col gap-3'>
               <motion.h4
                  className='font-medium text-justify text-accent-secondary'
                  variants={cardVariants}
                  initial='offscreen'
                  whileInView='onscreen'
                  viewport={viewportVariant}>
                  With <strong>{setTimestamp(8, 2022)}</strong> of official work
                  experience and a total of{' '}
                  <strong>
                     {setTimestamp(8, 2018)} of practical knowledge
                  </strong>{' '}
                  in <strong>Software Development</strong>, I bring a wealth of
                  knowledge to the table. It was 2018 when I started coding, and
                  my background initially focused on CLI apps and desktop
                  development utilizing <strong>Java</strong> before
                  transitioning to web application development in 2020.
                  Proficient in Web Technologies like{' '}
                  <strong>
                     JavaScript, TypeScript, ReactJS, NextJS, ExpressJS, MySQL
                  </strong>
                  , and many more. Trusted by leadership and{' '}
                  <strong>mentored directly by a CTO</strong>, with strong
                  judgment in balancing engineering quality, product goals, and
                  delivery speed.
               </motion.h4>
            </div>
         </Container>

         {/* EXPERIENCE */}
         <Container title='EXPERIENCE'>
            <Timeline
               className={quicksand.className}
               items={experiences.map((experience) => {
                  return experienceTimelineItems(experience);
               })}
            />
         </Container>

         {/* EDUCATION */}
         <Container title='EDUCATION'>
            <Timeline
               className={quicksand.className}
               items={[
                  {
                     children: (
                        <motion.div
                           className='flex flex-col gap-2'
                           variants={cardVariants}
                           initial='offscreen'
                           whileInView='onscreen'
                           viewport={viewportVariant}>
                           <div className='flex items-center justify-between'>
                              <div className='flex flex-col'>
                                 <h3 className='text-base font-semibold text-accent-primary'>
                                    BS INFORMATION TECHNOLOGY
                                 </h3>
                                 <h4 className='font-semibold text-accent-secondary'>
                                    University of Eastern Philippines
                                 </h4>
                              </div>
                              <div className='flex items-center'>
                                 <p className='font-semibold text-right text-accent-primary'>
                                    Northern Samar, PH
                                 </p>
                              </div>
                           </div>
                           <div className='flex flex-col px-3'>
                              <div className='flex gap-3'>
                                 <div className='text-accent-secondary'>•</div>
                                 <p className='font-medium text-justify text-accent-secondary'>
                                    Graduated Cum Laude
                                 </p>
                              </div>
                              <div className='flex gap-3'>
                                 <div className='text-accent-secondary'>•</div>
                                 <p className='font-medium text-justify text-accent-secondary'>
                                    Spent most of my college time building
                                    software applications and doing graphic
                                    designs.
                                 </p>
                              </div>
                           </div>
                        </motion.div>
                     ),
                  },
               ]}
            />
         </Container>
      </div>
   );
};

export default HomePage;
