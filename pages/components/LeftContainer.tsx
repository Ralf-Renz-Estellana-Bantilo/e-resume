'use client';

import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import Image from 'next/image';
import {useContext} from 'react';
import profileIMG from '@/assets/Images/Ralf Pic.jpg';
// import profileIMG from '@/assets/Images/Ralf Renz Bantilo.png'
import {Button, Divider, Tooltip} from 'antd';
import {DownloadOutlined} from '@ant-design/icons/lib/icons';
import {Quicksand} from 'next/font/google';
import {ContextValueType} from '@/interfaces';
import 'react-toastify/dist/ReactToastify.css';
import {motion} from 'framer-motion';
import {ComponentContext} from '@/context/context';
import {container, item} from '@/utils/Resources';
import {Button as NextUIButton} from '@nextui-org/react';

const quicksand = Quicksand({subsets: ['latin']});

const LeftContainer = (
	props?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) => {
	const context = useContext<ContextValueType | null>(ComponentContext);

	const personalInformation = [
		{
			icon: 'gmail',
			label: 'ralfrenzbantilo@gmail.com',
		},
		{
			icon: 'viber',
			label: '09606528174',
		},
		{
			icon: 'location',
			label: 'Makati City, Philippines',
		},
	];
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

	const handleDownload = (): void => {
		const host = `${window.location.href}`.includes('localhost')
			? 'http://localhost:3000'
			: 'https://ralf-bantilo-e-resume.vercel.app';
		const element = document.createElement('a');
		const fileUrl = `${host}/Documents/Resume.pdf`;
		element.href = fileUrl;
		element.download = 'Ralf Renz Bantilo - Software Engineer Resume';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	};

	return (
		<div
			{...props}
			className={`h-screen overflow-auto flex flex-col justify-between py-3 ${props?.className}`}>
			<div className='flex flex-col gap-3 '>
				{/* Profile Image */}
				<motion.div
					className='flex flex-col items-center gap-2'
					variants={container}
					initial='hidden'
					animate='visible'>
					<motion.div
						className='flex items-center justify-center border-2 border-green-800 rounded-full hover:border-green-500 transition-colors ease-in-out'
						variants={item}
						onClick={context?.toggleTheme}>
						<motion.div className='w-40 h-40 bg-transparent p-[5px] rounded-full'>
							<Tooltip
								placement='bottom'
								color='green'
								title='Open for Part-time job'
								arrow={true}>
								<Image
									className='object-cover w-full h-full mx-auto rounded-full'
									src={profileIMG}
									alt='Ralf Renz Bantilo'
									priority
								/>
							</Tooltip>
						</motion.div>
					</motion.div>
					<motion.div
						className='flex flex-col justify-center'
						variants={container}
						initial='hidden'
						animate='visible'>
						<motion.h3
							className='text-center text-accent-primary text-2xl font-bold tiktok-effect'
							variants={item}>
							RALF RENZ BANTILO
						</motion.h3>
						<motion.p
							className='text-center text-accent-secondary'
							variants={
								item
							}>{`< Mid-level Front-End Developer />`}</motion.p>
					</motion.div>
				</motion.div>
				<Divider className='m-0  '></Divider>

				{/* Social Accounts */}
				<motion.div
					className='flex items-center justify-around text-background-primary'
					variants={container}
					initial='hidden'
					animate='visible'>
					{links.map((link, i) => {
						return (
							<motion.div
								className='flex items-center justify-center'
								variants={item}
								key={i}>
								<Tooltip
									color='blue'
									placement='bottom'
									title={link.name}
									arrow={true}>
									<Button
										type='primary'
										shape='circle'
										icon={
											<Image
												className='object-cover w-full rounded-full relative bottom-[6px]'
												src={
													require(`@/assets/Icons/${link.icon}.png`)
														.default
												}
												alt='image'
												width={50}
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

				{/* Basic Information */}
				<Divider className='m-0'></Divider>
				<motion.div
					className='flex flex-col rounded-lg bg-opacity-10 p-2 border-1 border-border-color  w-11/12 mx-auto'
					variants={container}
					initial='hidden'
					animate='visible'>
					<div className='flex justify-center px-2 py-1'>
						<h4 className='text-center text-accent-primary font-semibold'>
							Information
						</h4>
					</div>
					<div className='flex flex-col pt-2 gap-2'>
						{personalInformation.map((info, i) => {
							return (
								<motion.div
									className='flex items-center gap-2 p-1 transition-colors ease-in-out border border-transparent hover:bg-slate-400 rounded-md hover:rounded-md hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10'
									key={i}
									variants={item}>
									<div className='w-8 h-8 rounded-full flex items-center justify-center'>
										<Image
											className='object-cover w-full h-full mx-auto rounded-full'
											src={
												require(`@/assets/Icons/${info.icon}.png`)
													.default
											}
											alt='image'
											width={50}
										/>
									</div>
									<p
										style={{flex: 1}}
										className='text-accent-secondary text-sm'>
										{info.label}
									</p>
								</motion.div>
							);
						})}
					</div>
				</motion.div>
			</div>
			<motion.div className='flex w-11/12 mx-auto' variants={item}>
				<NextUIButton
					color='primary'
					className='w-full'
					onClick={handleDownload}
					startContent={<DownloadOutlined />}>
					Download Resume
				</NextUIButton>
			</motion.div>
		</div>
	);
};

export default LeftContainer;
