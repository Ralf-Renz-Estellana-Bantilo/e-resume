'use client';

import Container from '@/pages/components/Container';
import useAppContext from '@/hooks/useAppContext';
import { motion } from 'framer-motion';
import Card from './Card';

const Projects = () => {
    const { projects } = useAppContext();

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <Container title="PROJECTS">
            <motion.div
                className="flex flex-wrap justify-evenly pb-6 gap-5 min-h-[500px]"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {projects.map((project) => (
                    <Card project={project} key={project.title} />
                ))}
            </motion.div>
            <motion.small
                className="text-center text-accent-secondary "
                variants={container}
                initial="hidden"
                animate="visible"
            >
                Note: Some screenshots or images of the applications are not
                included due to company confidentiality policies.
            </motion.small>
        </Container>
    );
};

export default Projects;
