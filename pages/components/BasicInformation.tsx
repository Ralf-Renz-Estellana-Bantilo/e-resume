import {container, item} from '@/utils/Resources';
import {motion} from 'framer-motion';

import Image from 'next/image';

const BasicInformation = () => {
   const personalInformation = [
      {
         icon: 'gmail',
         label: 'ralfrenzbantilo@gmail.com',
      },
      {
         icon: 'viber',
         label: '09606528174',
      },
      {
         icon: 'location',
         label: 'Makati City, Philippines',
      },
   ];

   return (
      <motion.div
         className='flex flex-col rounded-lg bg-opacity-10 p-2 border-1 border-border-color w-11/12 mx-auto'
         variants={container}
         initial='hidden'
         animate='visible'>
         <div className='flex justify-center px-2 py-1'>
            <h4 className='text-center text-accent-primary font-semibold'>
               Information
            </h4>
         </div>
         <div className='flex flex-col pt-2 gap-2'>
            {personalInformation.map((info, i) => {
               return (
                  <motion.div
                     className='flex items-center gap-2 p-1 transition-colors ease-in-out border border-transparent hover:bg-slate-400 rounded-md hover:rounded-md hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10'
                     key={i}
                     variants={item}>
                     <div className='w-8 h-8 rounded-full flex items-center justify-center'>
                        <Image
                           className='object-cover w-full h-full mx-auto rounded-full'
                           src={
                              require(`@/assets/Icons/${info.icon}.png`).default
                           }
                           alt='image'
                           width={50}
                        />
                     </div>
                     <p className='text-accent-secondary text-sm'>
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
