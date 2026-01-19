import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/pages/components/Container';
import { Timeline } from 'antd';
import { cardVariants, quicksand, viewportVariant } from '@/utils/Resources';

const Education = () => {
   return (
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
                                 Spent most of my college time building software
                                 applications and doing graphic designs.
                              </p>
                           </div>
                        </div>
                     </motion.div>
                  ),
               },
            ]}
         />
      </Container>
   );
};

export default Education;
