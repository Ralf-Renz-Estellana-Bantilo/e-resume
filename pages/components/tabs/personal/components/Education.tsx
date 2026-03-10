import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '@/pages/components/Container';
import { Timeline } from 'antd';
import { cardVariants, quicksand, viewportVariant } from '@/utils/Resources';
import useAppContext from '@/hooks/useAppContext';

const Education = () => {
    const { education } = useAppContext();
    return (
        <Container title="EDUCATION">
            <Timeline
                className={quicksand.className}
                items={[
                    {
                        children: (
                            <motion.div
                                className="flex flex-col gap-2"
                                variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={viewportVariant}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <h3 className="text-base font-semibold text-accent-primary">
                                            {education.course}
                                        </h3>
                                        <h4 className="font-semibold text-accent-secondary">
                                            {education.university}
                                        </h4>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="font-semibold text-right text-accent-primary">
                                            {education.location}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col px-3">
                                    {education.pointers.map((pointer) => (
                                        <div
                                            className="flex gap-3"
                                            key={pointer}
                                        >
                                            <div className="text-accent-secondary">
                                                •
                                            </div>
                                            <p className="font-medium text-justify text-accent-secondary">
                                                {pointer}
                                            </p>
                                        </div>
                                    ))}
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
