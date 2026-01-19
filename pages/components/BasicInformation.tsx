import React from 'react';
import { motion } from 'framer-motion';
import { container, item } from '@/utils/Resources';
import Image from 'next/image';

const BasicInformation = () => {
   const personalInformation = [
      {
         icon: 'gmail',
         label: 'ralfrenzbantilo@gmail.com',
      },
      {
         icon: 'viber',
         label: '(+63) 960 652 8174',
      },
      {
         icon: 'location',
         label: 'Makati City, Philippines',
      },
   ];

   return (
      <motion.div
         className='flex flex-col w-11/12 p-2 mx-auto rounded-lg bg-opacity-10 border-1 border-border-color'
         variants={container}
         initial='hidden'
         animate='visible'>
         <div className='flex justify-center px-2 py-1'>
            <h4 className='font-semibold text-center text-accent-primary'>
               Information
            </h4>
         </div>
         <div className='flex flex-col gap-2 pt-2'>
            {personalInformation.map((info, i) => {
               return (
                  <motion.div
                     className='flex items-center gap-2 p-1 transition-colors ease-in-out border border-transparent rounded-md hover:bg-slate-400 hover:rounded-md hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10'
                     key={i}
                     variants={item}>
                     <div className='flex items-center justify-center w-8 h-8 rounded-full'>
                        <Image
                           className='object-cover w-full h-full mx-auto rounded-full'
                           src={
                              require(`@/assets/Icons/${info.icon}.png`).default
                           }
                           alt='image'
                           width={50}
                        />
                     </div>

                     <p className='text-sm text-accent-secondary'>
                        {info.label}
                     </p>
                  </motion.div>
               );
            })}
         </div>
      </motion.div>
   );
};

export default BasicInformation;
