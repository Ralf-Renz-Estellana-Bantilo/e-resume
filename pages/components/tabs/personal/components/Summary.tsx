import React from 'react';
import Container from '@/pages/components/Container';
import { motion } from 'framer-motion';
import { cardVariants, viewportVariant } from '@/utils/Resources';
import { setTimestamp } from '@/utils/utils';

const Summary = () => {
   return (
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
               <strong>{setTimestamp(8, 2018)} of practical knowledge</strong>{' '}
               in <strong>Software Development</strong>, I bring a wealth of
               knowledge to the table. It was 2018 when I started coding, and my
               background initially focused on CLI apps and desktop development
               utilizing <strong>Java</strong> before transitioning to web
               application development in 2020. Proficient in Web Technologies
               like{' '}
               <strong>
                  JavaScript, TypeScript, ReactJS, NextJS, ExpressJS, MySQL
               </strong>
               , and many more. Trusted by leadership and{' '}
               <strong>mentored directly by a CTO</strong>, with strong judgment
               in balancing engineering quality, product goals, and delivery
               speed.
            </motion.h4>
         </div>
      </Container>
   );
};

export default Summary;
