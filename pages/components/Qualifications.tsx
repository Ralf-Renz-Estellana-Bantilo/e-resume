import { QualificationInterface } from '@/interfaces'
import { cardVariants, quicksand, viewportVariant } from '@/utils/Resources'
import { Checkbox } from 'antd'
import { motion } from "framer-motion";
import React from 'react'

const Qualifications = () =>
{

   const qualifications: QualificationInterface[] = [
      {
         ID: Math.floor( Math.random() * 100000 ),
         title: 'Strong Programming Skills',
         description: [
            'Proficiency in more than one programming languages/frameworks such as JavaScript, ReactJS, VueJS, TypeScript, NextJS, NodeJS, TailwindCSS, Java, and MySQL.',
            'Familiarity with technologies & frameworks such as React Native, Remix, Flutter, Spring Boot, Python, ElectronJS, Qwik, SolidJS, NestJS, NoSQL, Heroku, Vercel, Netlify, Cloudinary, AWS (S3 Bucket), PHP, Redux, Material UI, Bootstrap, and many more.',
            'Ability to write clean, efficient, reusable, dynamic, and maintainable code.',
         ]
      },
      {
         ID: Math.floor( Math.random() * 100000 ),
         title: 'Problem-Solving Skills',
         description: [
            'Strong analytical and problem-solving abilities to tackle complex technical challenges.',
            'A knack for breaking down large problems into smaller, manageable tasks.',
            'Ability to foresee potential bugs before they even occur.',
         ]
      },
      {
         ID: Math.floor( Math.random() * 100000 ),
         title: 'Software Development Lifecycle',
         description: [
            'Knowledge of software development methodologies, such as Agile, Scrum, or Waterfall.',
            'Experience with version control systems like Git (Github / GitLab).',
         ]
      },
      {
         ID: Math.floor( Math.random() * 100000 ),
         title: 'Debugging and Troubleshooting',
         description: [
            'Excellent debugging skills',
            'Proficiency in debugging techniques and tools to identify and resolve issues efficiently.',
            'Ability to debug codebase that I did not even write.',
         ]
      },
      // {
      //    ID: Math.floor( Math.random() * 100000 ),
      //    title: 'Communication Skills',
      //    description: [
      //       'Effective communication skills to collaborate with cross-functional teams, including designers, product managers, and QA engineers',
      //       'Clear documentation and code comments',
      //    ]
      // },
      {
         ID: Math.floor( Math.random() * 100000 ),
         title: 'Continuous Learning',
         description: [
            'A commitment to staying up-to-date with industry trends and emerging technologies.',
            'Willingness to learn new languages, frameworks, and tools as needed.',
         ]
      },
      // {
      //    ID: Math.floor( Math.random() * 100000 ),
      //    title: 'Testing and Quality Assurance',
      //    description: [
      //       'Knowledge of testing methodologies, including unit testing, integration testing, and automated testing',
      //       'Focus on writing reliable and robust code',
      //    ]
      // },
      {
         ID: Math.floor( Math.random() * 100000 ),
         title: 'Performance Optimization',
         description: [
            'The ability to identify and optimize bottlenecks in code or system performance.',
         ]
      },
      {
         ID: Math.floor( Math.random() * 100000 ),
         title: 'Security Awareness',
         description: [
            'An understanding of security best practices and the ability to write secure code.',
            'Awareness of common security vulnerabilities and how to mitigate them.',
         ]
      },
      {
         ID: Math.floor( Math.random() * 100000 ),
         title: 'Teamwork and Collaboration',
         description: [
            'Strong interpersonal skills and the ability to work effectively in a team.',
            'Willingness to mentor and help junior developers.',
         ]
      },
      {
         ID: Math.floor( Math.random() * 100000 ),
         title: 'Adaptability',
         description: [
            'Flexibility to adapt to changing requirements and technologies.',
            'Ability to pivot when needed to meet project goals.',
         ]
      },
      {
         ID: Math.floor( Math.random() * 100000 ),
         title: 'Soft Skills',
         description: [
            'Strong problem-solving skills, critical thinking, and attention to detail.',
            'Patience and persistence in troubleshooting and debugging.',
         ]
      },
      {
         ID: Math.floor( Math.random() * 100000 ),
         title: 'Ethical and Professional Behavior',
         description: [
            'Adherence to ethical standards and professionalism in all aspects of work.',
            'Respect for intellectual property and confidentiality.',
         ]
      },
   ]

   return (
      <div className="flex pb-5">
         <div className="flex flex-col flex-1 gap-3">
            {qualifications.map( ( qualification ) =>
            {
               return <motion.div className='px-3' key={qualification.ID} variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={viewportVariant}>
                  <Checkbox className={`${quicksand.className} w-full`} checked><strong className='uppercase text-accent-primary  '>{qualification.title}</strong></Checkbox>
                  <div className="flex flex-col">
                     {qualification.description.map( ( pointer, index ) =>
                     {
                        return <div className="flex gap-3 text-accent-secondary   px-6" key={index}>
                           <div>•</div>
                           <p className='text-justify text-accent-secondary  '>{pointer}</p>
                        </div>
                     } )}
                  </div>
               </motion.div>
            } )}
         </div>
      </div>
   )
}

export default Qualifications