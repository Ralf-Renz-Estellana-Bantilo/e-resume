import React from 'react';
import Container from '@/pages/components/Container';
import { motion } from 'framer-motion';
import { cardVariants, viewportVariant } from '@/utils/Resources';
import { setTimestamp } from '@/utils/utils';

const Summary = () => {
    return (
        <Container title="SUMMARY">
            <div className="flex flex-col gap-3">
                <motion.h4
                    className="font-medium text-justify text-accent-secondary"
                    variants={cardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={viewportVariant}
                >
                    <strong>Software Engineer</strong> operating at a senior
                    level with{' '}
                    <strong>
                        {setTimestamp(8, 2018)} of hands-on software development
                        experience
                    </strong>
                    , including{' '}
                    <strong>
                        {setTimestamp(8, 2022)} of professional experience{' '}
                    </strong>{' '}
                    building user-centric, maintainable web applications.
                    Trusted by leadership and . Trusted by leadership and{' '}
                    <strong>mentored directly by a CTO</strong>, with strong
                    judgment in balancing engineering quality, product goals,
                    and delivery speed.
                </motion.h4>
            </div>
        </Container>
    );
};

export default Summary;
