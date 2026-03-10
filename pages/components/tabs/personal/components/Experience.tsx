import React from 'react';
import Container from '@/pages/components/Container';
import { Timeline } from 'antd';
import { motion } from 'framer-motion';
import { cardVariants, quicksand, viewportVariant } from '@/utils/Resources';
import useAppContext from '@/hooks/useAppContext';
import { IExperience } from '@/pages/api/personal/experiences';

const Experience = () => {
    const { experiences } = useAppContext();

    const experienceTimelineItems = (experiences: IExperience) => {
        return {
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
                            <div className="flex items-center gap-2">
                                <h3 className="text-base font-bold text-accent-primary">
                                    {experiences.position}
                                </h3>
                                {experiences.level && (
                                    <span>({experiences?.level})</span>
                                )}
                            </div>
                            <div className="flex items-center justify-start gap-1">
                                <h4 className="font-semibold text-accent-secondary">
                                    {experiences.company}
                                </h4>
                                {experiences?.type && (
                                    <span className="text-accent-secondary">
                                        ({experiences?.type})
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center">
                            <p className="font-semibold text-right text-accent-primary">
                                {experiences.duration}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col px-3">
                        {experiences.description.map((pointer, i) => {
                            return (
                                <div className="flex gap-3" key={i}>
                                    <div className="text-accent-secondary">
                                        •
                                    </div>
                                    <p className="font-medium text-justify text-accent-secondary">
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

    return (
        <Container title="EXPERIENCE">
            <Timeline
                className={quicksand.className}
                items={experiences.map((experience) => {
                    return experienceTimelineItems(experience);
                })}
            />
        </Container>
    );
};

export default Experience;
