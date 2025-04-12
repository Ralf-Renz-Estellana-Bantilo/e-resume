import {cardVariants, viewportVariant} from '@/utils/Resources';
import {Space, Tag, Timeline} from 'antd';
import {motion} from 'framer-motion';
import React from 'react';

const Timelines = () => {
	return (
		<div className='flex flex-col p-3 max-md:gap-5'>
			<Timeline
				mode={'alternate'}
				className='text-accent-secondary   '
				items={[
					{
						label: '2022 - Present',
						children: (
							<motion.div
								variants={cardVariants}
								initial='offscreen'
								whileInView='onscreen'
								viewport={viewportVariant}>
								<Space wrap>
									<Tag className='rounded-full' color={'lime'}>
										VueJS
									</Tag>
									<Tag className='rounded-full' color={'geekblue'}>
										Vuetify
									</Tag>
									<Tag className='rounded-full' color={'cyan'}>
										ReactJS
									</Tag>
									<Tag className='rounded-full' color={'blue'}>
										TailwindCSS
									</Tag>
									<Tag className='rounded-full' color={'magenta'}>
										NextJS
									</Tag>
									<Tag className='rounded-full' color={'blue'}>
										TypeScript
									</Tag>
									<Tag className='rounded-full' color={'yellow'}>
										ExpressJS
									</Tag>
									<Tag className='rounded-full' color={'green'}>
										NodeJS
									</Tag>
									<Tag className='rounded-full' color={'orange'}>
										Figma
									</Tag>
								</Space>
								<div className='flex flex-col p-3'>
									<div className='flex items-center gap-3 text-accent-secondary  '>
										<div>•</div>
										<p className='text-xs text-left'>E-Resume</p>
									</div>
									<div className='flex items-center gap-3 text-accent-secondary  '>
										<div>•</div>
										<p className='text-xs text-left'>
											Applicant Tracking & Onboarding System
										</p>
									</div>
									<div className='flex items-center gap-3 text-accent-secondary  '>
										<div>•</div>
										<p className='text-xs text-left'>
											Timekeeping System
										</p>
									</div>
									<div className='flex items-center gap-3 text-accent-secondary  '>
										<div>•</div>
										<p className='text-xs text-left'>
											Employee Portal
										</p>
									</div>
									<div className='flex items-center gap-3 text-accent-secondary  '>
										<div>•</div>
										<p className='text-xs text-left'>
											Organizational Chart
										</p>
									</div>
									<div className='flex items-center gap-3 text-accent-secondary  '>
										<div>•</div>
										<p className='text-xs text-left'>
											Personal Expenses Tracker
										</p>
									</div>
								</div>
							</motion.div>
						),
					},
					{
						label: '2021 - 2022',
						children: (
							<motion.div
								variants={cardVariants}
								initial='offscreen'
								whileInView='onscreen'
								viewport={viewportVariant}>
								<Space wrap>
									<Tag className='rounded-full' color={'orange'}>
										MySQL
									</Tag>
									<Tag className='rounded-full' color={'yellow'}>
										ExpressJS
									</Tag>
									<Tag className='rounded-full' color={'cyan'}>
										ReactJS
									</Tag>
									<Tag className='rounded-full' color={'green'}>
										NodeJS
									</Tag>
									<Tag className='rounded-full' color={'cyan'}>
										React Native
									</Tag>
									<Tag className='rounded-full' color={'blue'}>
										TailwindCSS
									</Tag>
									<Tag className='rounded-full' color={'orange'}>
										Git
									</Tag>
								</Space>
								<div className='flex flex-col p-3'>
									<div className='flex items-center gap-3 text-accent-secondary  '>
										<div>•</div>
										<p className='text-xs text-left'>
											Payroll System
										</p>
									</div>
									<div className='flex items-center gap-3 text-accent-secondary  '>
										<div>•</div>
										<p className='text-xs text-left'>
											TeleConsultation Video Chat App
										</p>
									</div>
									<div className='flex items-center gap-3 text-accent-secondary  '>
										<div>•</div>
										<p className='text-xs text-left'>
											Local Dictionary Portal
										</p>
									</div>
								</div>
							</motion.div>
						),
					},
					{
						label: '2020 - 2021',
						children: (
							<motion.div
								variants={cardVariants}
								initial='offscreen'
								whileInView='onscreen'
								viewport={viewportVariant}>
								<Space wrap>
									<Tag className='rounded-full' color={'orange'}>
										MySQL
									</Tag>
									<Tag className='rounded-full' color={'yellow'}>
										ExpressJS
									</Tag>
									<Tag className='rounded-full' color={'cyan'}>
										ReactJS
									</Tag>
									<Tag className='rounded-full' color={'green'}>
										NodeJS
									</Tag>
									<Tag className='rounded-full' color={'orange'}>
										Git
									</Tag>
								</Space>
								<div className='flex flex-col p-3'>
									<div className='flex items-center gap-3 text-accent-secondary  '>
										<div>•</div>
										<p className='text-xs text-left'>
											Job Search System
										</p>
									</div>
									<div className='flex items-center gap-3 text-accent-secondary  '>
										<div>•</div>
										<p className='text-xs text-left'>
											GWA Calculator
										</p>
									</div>
								</div>
							</motion.div>
						),
					},
					{
						label: '2018 - 2020',
						children: (
							<motion.div
								variants={cardVariants}
								initial='offscreen'
								whileInView='onscreen'
								viewport={viewportVariant}>
								<Space wrap>
									<Tag className='rounded-full' color={'orange'}>
										MySQL
									</Tag>
									<Tag className='rounded-full' color={'volcano'}>
										Java
									</Tag>
									<Tag className='rounded-full' color={'geekblue'}>
										Photoshop
									</Tag>
								</Space>
								<div className='flex flex-col p-3'>
									<div className='flex items-center gap-3 text-accent-secondary  '>
										<div>•</div>
										<p className='text-xs text-left'>
											Random Student Picker Program
										</p>
									</div>
									<div className='flex items-center gap-3 text-accent-secondary  '>
										<div>•</div>
										<p className='text-xs text-left'>
											Basketball Statistics Program
										</p>
									</div>
									<div className='flex items-center gap-3 text-accent-secondary  '>
										<div>•</div>
										<p className='text-xs text-left'>
											Test Simulator Program
										</p>
									</div>
								</div>
							</motion.div>
						),
					},
				]}
			/>
		</div>
	);
};

export default Timelines;
