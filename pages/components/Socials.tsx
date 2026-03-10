import React from 'react';
import { motion } from 'framer-motion';
import { container, item } from '@/utils/Resources';
import { Button, Tooltip } from 'antd';
import Image from 'next/image';

const Socials = () => {
    const links = [
        {
            icon: 'linkedin',
            name: 'LinkedIn',
            path: 'https://linkedin.com/in/ralfrenzbantilo',
        },
        {
            icon: 'github',
            name: 'Github',
            path: 'https://github.com/Ralf-Renz-Estellana-Bantilo',
        },
        {
            icon: 'facebook',
            name: 'Facebook',
            path: 'https://www.facebook.com/rr.bantilo2000',
        },
        {
            icon: 'messenger',
            name: 'Messenger',
            path: 'https://m.me/rr.bantilo2000',
        },
    ];

    const visitPage = (link: string): void => {
        const regex = /^https?:\/\/[^\/]+/;
        const baseUrl = regex.exec(window.location.href)?.[0] ?? '';
        const newLink = link.replace(baseUrl, '');
        window.open(newLink, '_blank');
    };

    return (
        <motion.div
            className="flex items-center justify-around text-background-primary"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {links.map((link, i) => {
                return (
                    <motion.div
                        className="flex items-center justify-center"
                        variants={item}
                        key={i}
                    >
                        <Tooltip
                            color="blue"
                            placement="bottom"
                            title={link.name}
                            arrow={true}
                        >
                            <Button
                                type="primary"
                                shape="circle"
                                variant="link"
                                color="default"
                                icon={
                                    <Image
                                        className="relative bottom-0 object-cover rounded-full"
                                        src={
                                            require(
                                                `../../assets/Icons/${link.icon}.png`
                                            ).default
                                        }
                                        alt={link.name}
                                        width={150}
                                        onClick={() => visitPage(link.path)}
                                    />
                                }
                                size={'large'}
                            />
                        </Tooltip>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

export default Socials;
