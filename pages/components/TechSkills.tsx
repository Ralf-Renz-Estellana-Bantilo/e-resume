'use client';

import useAppContext from '@/hooks/useAppContext';
import { SkillsIcons } from '@/icons';
import { container, item } from '@/utils/Resources';
import { Tag } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TechSkills = () => {
    const { skills } = useAppContext();

    const getTagByProficiency = (proficiency: string) => {
        const list = {
            advance: 'orange',
            intermediate: 'yellow',
            beginner: 'blue',
        };

        return (
            list[proficiency.toLocaleLowerCase() as keyof typeof list] ?? 'lime'
        );
    };

    return (
        <div className="flex flex-col rounded-lg">
            <div className="sticky top-0 flex justify-center items-center p-2 bg-slate-500 backdrop-filter backdrop-blur-sm bg-opacity-10 border-b-1 border-slate-700 z-10 h-[65px] gap-2 md-breakpoint:bg-slate-500 md-breakpoint:backdrop-filter md-breakpoint:backdrop-blur-sm md-breakpoint:bg-opacity-10 md-breakpoint:z-50 md-breakpoint:h-full">
                <SkillsIcons />

                <h4 className="font-semibold text-center text-accent-primary">
                    Technical Skills
                </h4>
            </div>
            <motion.div
                className="flex flex-col gap-2 p-2 mr-1 overflow-auto md-breakpoint:h-full md-breakpoint:overflow-visible"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {skills.map((skill, i) => {
                    return (
                        <motion.div
                            className="flex items-center gap-2 px-2 py-1 transition-colors ease-in-out border border-transparent rounded-md hover:bg-slate-400 hover:rounded-md hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10"
                            key={i}
                            variants={item}
                        >
                            <div className="w-8 h-8 rounded-full">
                                <Image
                                    className="object-cover w-full h-full mx-auto rounded-full"
                                    src={
                                        require(`@/assets/Icons/${skill.icon}`)
                                            .default
                                    }
                                    alt="image"
                                />
                            </div>
                            <div
                                style={{ flex: 1 }}
                                className="flex items-center justify-between"
                            >
                                <div className="flex flex-col">
                                    <h4 className="text-sm font-semibold text-accent-primary">
                                        {skill.description}
                                    </h4>
                                    <p className="text-xs text-accent-secondary">
                                        {skill.category}
                                    </p>
                                </div>
                                <span className="text-xs text-accent-primary">
                                    <Tag
                                        className="rounded-full"
                                        color={getTagByProficiency(
                                            skill.proficiency
                                        )}
                                        key={i}
                                    >
                                        {skill.proficiency}
                                    </Tag>
                                </span>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default TechSkills;
