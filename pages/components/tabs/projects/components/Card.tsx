import React from 'react';
import { ProjectsInterface, TagListsInterface } from '@/interfaces';
import { IProjects } from '@/pages/api/projects';
import useAppContext from '@/hooks/useAppContext';
import { cardVariants, viewportVariant } from '@/utils/Resources';
import { Carousel, Divider, Space, Tag } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

export const tagList: TagListsInterface[] = [
    {
        ID: 1,
        label: 'React JS',
        color: 'cyan',
    },
    {
        ID: 2,
        label: 'JavaScript',
        color: 'yellow',
    },
    {
        ID: 3,
        label: 'Node JS',
        color: 'green',
    },
    {
        ID: 4,
        label: 'MySQL',
        color: 'orange',
    },
    {
        ID: 5,
        label: 'TailwindCSS',
        color: 'blue',
    },
    {
        ID: 6,
        label: 'Vue JS',
        color: 'lime',
    },
    {
        ID: 7,
        label: 'Vuetify',
        color: 'geekblue',
    },
    {
        ID: 8,
        label: 'Photoshop',
        color: 'geekblue',
    },
    {
        ID: 9,
        label: 'Figma',
        color: 'orange',
    },
    {
        ID: 10,
        label: 'Express JS',
        color: 'yellow',
    },
    {
        ID: 11,
        label: 'PHP',
        color: 'orange',
    },
    {
        ID: 12,
        label: 'Java',
        color: 'volcano',
    },
    {
        ID: 13,
        label: 'Next JS',
        color: 'magenta',
    },
    {
        ID: 14,
        label: 'TypeScript',
        color: 'geekblue',
    },
];

export const findTagByID = (tagID: Number) => {
    return tagList.filter((list) => list.ID == tagID)[0];
};

const Card = ({ project: dynamicData }: { project: IProjects }) => {
    const localData: IProjects = {
        title: '',
        description: '',
        tagIDs: [],
        coverURLs: [],
        duties: [],
    };

    const project = dynamicData ?? localData;

    return (
        <motion.div
            className="flex flex-col w-[375px] h-auto bg-opacity-10 p-2 border-1 border-slate-700 bg-slate-500 rounded-lg overflow-hidden sm-breakpoint:w-[90%]"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={viewportVariant}
        >
            <div className="w-full h-44 overflow-clip gradient-background">
                <Carousel autoplay effect="fade">
                    {project.coverURLs.map((url, o) => {
                        return (
                            <Image
                                className="object-fit h-44"
                                src={require(`@/assets/Images/${url}`)}
                                alt={project.title}
                                key={`${o}-${url}`}
                            />
                        );
                    })}
                </Carousel>
            </div>
            <div className="flex flex-col gap-2 p-2">
                <div className="flex flex-col justify-center">
                    <h3 className="py-2 text-lg font-semibold text-center text-accent-primary">
                        {project.title}
                    </h3>
                    <p className="text-xs font-medium text-justify text-accent-secondary">
                        {project.description}
                    </p>
                </div>

                {project.duties && (
                    <>
                        <Divider className="m-0 "></Divider>
                        <div className="flex flex-col">
                            {project.duties.map((duty, i) => (
                                <div
                                    className="flex gap-3"
                                    key={`${i}-${duty}`}
                                >
                                    <div className="text-accent-secondary">
                                        •
                                    </div>
                                    <p className="text-sm font-medium text-justify text-accent-secondary">
                                        {duty}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                <Divider className="m-0 "></Divider>
                <div>
                    <Space size={[0, project.tagIDs.length]} wrap>
                        {project.tagIDs.map((tagID, i) => {
                            return (
                                <Tag
                                    className="rounded-full"
                                    color={findTagByID(tagID).color}
                                    key={`${i}-${tagID}`}
                                >
                                    {findTagByID(tagID).label}
                                </Tag>
                            );
                        })}
                    </Space>
                </div>
            </div>
        </motion.div>
    );
};

export default Card;
