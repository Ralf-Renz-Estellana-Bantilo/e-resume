import {CheckOutlined} from '@ant-design/icons';
import {Divider, Spin} from 'antd';
import React, {useEffect, useState} from 'react';
import Card from '../projects/components/Card';

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {Pagination, Autoplay} from 'swiper';
import {ScreenSizeInterface, ServicesInterface} from '@/interfaces';
import Image from 'next/image';

import {motion} from 'framer-motion';
import Container from './Container';

const Projects = () => {
	const [services, setServices] = useState<ServicesInterface[]>([
		{
			category: 'FRONTEND',
			items: [
				'DOM Manipulation',
				'Reusable Components',
				'Server-side Rendering',
				// 'Progresive Web Application (PWA)',
			],
		},
		{
			category: 'BACKEND',
			items: [
				'Database Management',
				'Dynamic RESTful APIs',
				'NoSQL & Relational Databases',
			],
		},
		{
			category: 'FULLSTACK',
			items: [
				'System Deployment',
				'Architectural Design',
				'Object-Oriented Programming',
			],
		},
		{
			category: 'DESIGN',
			items: ['UI/UX Design', 'Prototyping Tool', 'Photo Manipulation'],
		},
	]);

	const [screenSize, setScreenSize] = useState<ScreenSizeInterface>({
		width: typeof window !== 'undefined' ? window.innerWidth : 0,
		height: typeof window !== 'undefined' ? window.innerHeight : 0,
	});

	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [isCardVisible, setIsCardVisible] = useState<boolean>(false);

	const MOBILE: number = 1024;

	useEffect(() => {
		const handleResize = (): void => {
			setScreenSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener('resize', handleResize);

		setTimeout(() => {
			setIsVisible(true);
		}, 200);

		setTimeout(() => {
			setIsCardVisible(true);
		}, 1450);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const container = {
		hidden: {opacity: 1, scale: 0},
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
		hidden: {y: 20, opacity: 0},
		visible: {
			y: 0,
			opacity: 1,
		},
	};

	const {width} = screenSize;

	return (
		<div className='flex flex-col gap-8 p-7 pt-3 min-h-screen max-md:px-4'>
			{isVisible ? (
				<>
					<Container title='SERVICES'>
						<motion.div
							className='flex flex-wrap justify-evenly pb-6 gap-5 max-md:pb-1'
							variants={container}
							initial='hidden'
							animate='visible'>
							{width > MOBILE ? (
								<>
									{' '}
									{services.map((service, i) => {
										return (
											<motion.div
												className='flex flex-col h-auto neumorphism-2 rounded-lg bg-background-primary w-[48%] max-sm:w-full max-md:w-[75%] max-lg:w-[48%]'
												key={i}
												variants={item}>
												<div className='flex flex-col'>
													<h3 className='font-semibold text-center p-2 text-base text-accent-secondary  '>
														{service.category}
													</h3>
													<Divider className='m-0  '></Divider>
												</div>
												<div className='flex flex-col p-2 gap-1'>
													{service.items.map((item, o) => {
														return (
															<div
																className='flex items-center gap-2'
																key={o}>
																{/* <CheckOutlined /> */}
																<Image
																	src={
																		require('../../assets/Icons/check.png')
																			.default
																	}
																	alt='check icon'
																	width={18}
																	height={18}
																/>
																<p className='text-accent-secondary   font-medium text-left'>
																	{item}
																</p>
															</div>
														);
													})}
												</div>
											</motion.div>
										);
									})}
								</>
							) : (
								<>
									<Swiper
										slidesPerView={1}
										centeredSlides={true}
										autoplay={{
											delay: 2500,
											disableOnInteraction: false,
										}}
										pagination={{
											clickable: true,
										}}
										modules={[Pagination, Autoplay]}
										className='mySwiper bg-background-primary '>
										{services.map((service, i) => {
											return (
												<SwiperSlide className='p-4 pb-8' key={i}>
													<div className='flex flex-col h-auto m-auto neumorphism-2 rounded-lg bg-background-primary w-[48%] max-sm:w-full max-md:w-[75%] max-lg:w-[48%]'>
														<div className='flex flex-col'>
															<h3 className='font-semibold text-center p-2 text-base text-accent-secondary  '>
																{service.category}
															</h3>
															<Divider className='m-0  '></Divider>
														</div>
														<div className='flex flex-col p-2 gap-1'>
															{service.items.map((item, o) => {
																return (
																	<div
																		className='flex items-center gap-2'
																		key={o}>
																		{/* <CheckOutlined /> */}
																		<Image
																			src={
																				require('../../assets/Icons/check.png')
																					.default
																			}
																			alt='check icon'
																			width={18}
																			height={18}
																		/>
																		<p className='text-accent-secondary   font-medium text-base text-left'>
																			{item}
																		</p>
																	</div>
																);
															})}
														</div>
													</div>
												</SwiperSlide>
											);
										})}
									</Swiper>
								</>
							)}
						</motion.div>
					</Container>

					<Container title='PROJECTS'>
						<motion.div
							className='flex flex-wrap justify-evenly pb-6 gap-5 min-h-[500px] max-md:pb-1'
							variants={container}
							initial='hidden'
							animate='visible'>
							{isCardVisible && <Card />}
						</motion.div>
					</Container>
				</>
			) : (
				<div className='h-[90vh] flex items-center justify-center'>
					<Spin size='large' />
				</div>
			)}
		</div>
	);
};

export default Projects;
