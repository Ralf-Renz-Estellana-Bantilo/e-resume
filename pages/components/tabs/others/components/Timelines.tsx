import useAppContext from '@/hooks/useAppContext';
import { cardVariants, viewportVariant } from '@/utils/Resources';
import { Space, Tag, Timeline } from 'antd';
import { motion } from 'framer-motion';
import React from 'react';

interface ITimeline {
    title: string;
    tags: {
        label: string;
        color: string;
    }[];
    projects: string[];
}

const Timelines = () => {
    const { timeline } = useAppContext();

    return (
        <div className="flex flex-col p-3 max-md:gap-5">
            <Timeline
                mode={'alternate'}
                className="text-accent-secondary "
                items={timeline.map((timeline, index) => {
                    return {
                        label: timeline.title,
                        children: (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={viewportVariant}
                            >
                                <Space wrap>
                                    {timeline.tags.map((tag, i) => (
                                        <Tag
                                            className="rounded-full"
                                            key={i}
                                            color={tag.color}
                                        >
                                            {tag.label}
                                        </Tag>
                                    ))}
                                </Space>
                                <div className="flex flex-col p-3">
                                    {timeline.projects.map((project, i) => (
                                        <div
                                            className="flex items-center gap-3 text-accent-secondary"
                                            key={i}
                                        >
                                            <div>•</div>
                                            <p className="text-xs text-left">
                                                {project}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ),
                    };
                })}
            />
        </div>
    );
};

export default Timelines;
