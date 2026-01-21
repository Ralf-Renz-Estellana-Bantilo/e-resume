import Container from '@/pages/components/Container';
import useAppContext from '@/hooks/useAppContext';
import { Divider } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Services = () => {
    const { services } = useAppContext();

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

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <Container title="SERVICES">
            <motion.div
                className="flex flex-wrap gap-5 pb-6 justify-evenly"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {services.map((service, i) => {
                    return (
                        <motion.div
                            className="flex flex-col h-auto bg-opacity-10 p-2 border-1 border-slate-700 bg-slate-500 rounded-lg w-[48%] sm-breakpoint:w-[90%]"
                            key={i}
                            variants={item}
                        >
                            <div className="flex flex-col">
                                <h3 className="p-2 pt-0 text-base font-semibold text-center text-accent-primary">
                                    {service.category}
                                </h3>
                                <Divider className="m-0 "></Divider>
                            </div>
                            <div className="flex flex-col gap-1 p-2">
                                {service.items.map((item, o) => {
                                    return (
                                        <div
                                            className="flex items-center gap-2"
                                            key={o}
                                        >
                                            <Image
                                                src={
                                                    require('../../../../../assets/Icons/check.png')
                                                        .default
                                                }
                                                alt="check icon"
                                                width={18}
                                                height={18}
                                            />
                                            <p className="text-left text-accent-secondary">
                                                {item}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </Container>
    );
};

export default Services;
