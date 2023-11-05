import { SkillsInterface } from '@/interfaces'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { container, item } from '@/utils/Resources'
import Image from 'next/image'

const TechSkills = () =>
{
   const [skills] = useState<SkillsInterface[]>( [
      {
         icon: 'html',
         description: 'HTML',
         category: 'Frontend',
         proficiency: 'Advanced',
      },
      {
         icon: 'css',
         description: 'CSS',
         category: 'Frontend',
         proficiency: 'Advanced',
      },
      {
         icon: 'javascript',
         description: 'JavaScript',
         category: 'Frontend',
         proficiency: 'Advanced',
      },
      {
         icon: 'react',
         description: 'React JS',
         category: 'Frontend',
         proficiency: 'Advanced',
      },
      {
         icon: 'nextjs',
         description: 'Next JS',
         category: 'Frontend',
         proficiency: 'Intermediate',
      },
      {
         icon: 'typescript',
         description: 'TypeScript',
         category: 'Frontend',
         proficiency: 'Intermediate',
      },
      {
         icon: 'vuejs',
         description: 'Vue JS',
         category: 'Frontend',
         proficiency: 'Advanced',
      },
      {
         icon: 'tailwindcss',
         description: 'TailwindCSS',
         category: 'Frontend',
         proficiency: 'Advanced',
      },
      {
         icon: 'vuetify',
         description: 'Vuetify',
         category: 'Frontend',
         proficiency: 'Advanced',
      },
      {
         icon: 'nodejs',
         description: 'Node JS',
         category: 'Backend',
         proficiency: 'Advanced',
      },
      {
         icon: 'java',
         description: 'Java',
         category: 'Desktop App',
         proficiency: 'Intermediate',
      },
      {
         icon: 'mysql',
         description: 'MySQL',
         category: 'Database',
         proficiency: 'Intermediate',
      },
      {
         icon: 'photoshop',
         description: 'Photoshop',
         category: 'Design',
         proficiency: 'Advanced',
      },
      {
         icon: 'figma',
         description: 'Figma',
         category: 'Design',
         proficiency: 'Intermediate',
      },
      {
         icon: 'git',
         description: 'Git',
         category: 'Version Control',
         proficiency: 'Intermediate',
      },

   ] )

   return (
      <div className="flex flex-col rounded-lg border-2 border-slate-600 text-background-primary">
         <div className="flex justify-center border-2 border-transparent border-b-slate-600 p-2">
            <h4 className='text-center'>Technical Skills</h4>
         </div>
         <motion.div
            className="flex flex-col p-2 gap-2 max-h-[86vh] overflow-auto mr-1 max-lg:max-h-full"
            variants={container} initial="hidden" animate="visible"
         >
            {skills.map( ( skill, i ) =>
            {
               return <motion.div className="flex items-center gap-2 py-1 px-2 transition-colors ease-in-out border border-transparent hover:bg-slate-400 rounded-md hover:rounded-md hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10" key={i}
                  variants={item}>
                  <div className="w-8 h-8 rounded-full">
                     <Image
                        className="object-cover w-full h-full mx-auto rounded-full"
                        src={require( `@/assets/Icons/${skill.icon}.png` ).default}
                        alt="image"
                     />
                  </div>
                  <div style={{ flex: 1 }} className='flex items-center justify-between'>
                     <div className="flex flex-col">
                        <h4 className='text-background-primary font-semibold text-sm'>{skill.description}</h4>
                        <p className='text-background-secondary text-xs'>{skill.category}</p>
                     </div>
                     <span className='text-background-primary text-xs'>{skill.proficiency}</span>
                  </div>
               </motion.div>
            } )}
         </motion.div>
      </div>
   )
}

export default TechSkills