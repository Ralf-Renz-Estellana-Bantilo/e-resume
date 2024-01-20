import {Timeline} from 'antd';
import React, {useState} from 'react';
import {Quicksand} from 'next/font/google';
import Image from 'next/image';
import {motion} from 'framer-motion';
import Container from './Container';
import {cardVariants, viewportVariant} from '@/utils/Resources';
import {KeyPointsType} from '@/interfaces';
import {setTimestamp} from '@/utils/utils';

const quicksand = Quicksand({subsets: ['latin']});

type ExperienceType = {
	id: number;
	position: string;
	company: string;
	duration: string;
	description: {
		pointer: string;
	}[];
	type?: string;
	level?: 'Intern' | 'Junior' | 'Mid-level' | 'Senior';
};

const Personal = () => {
	const [experiences] = useState<ExperienceType[]>([
		{
			id: Math.floor(Math.random() * 1000) + 1,
			position: 'FRONT-END DEVELOPER',
			company: 'Bizbloqs Management Solutions | Makati City, PH',
			duration: 'December 2023 - Present',
			level: 'Mid-level',
			description: [
				{
					pointer:
						'Worked closely with the local Philippines office and foreign offices in the Netherlands and UK, fostering effective communication and collaboration.',
				},
				{
					pointer:
						'Collaborated with a small team of front-end and back-end developers in designing and developing websites and web applications.',
				},
				{
					pointer:
						'Utilized TypeScript, React, Node.js, and Next.js to create new user-facing features and enhance existing functionality.',
				},
				{
					pointer:
						'Determined the structure and design of web pages, ensuring a seamless and intuitive user experience.',
				},
				{
					pointer:
						'Built reusable code components for efficiency and consistency across projects.',
				},
				{
					pointer:
						'Optimized page loading times for improved performance.',
				},
				{
					pointer:
						'Engaged actively in cross-functional teams, including developers, testers, project managers, and business stakeholders.',
				},
				{
					pointer:
						'Participated in code reviews and provide constructive feedback to enhance code quality.',
				},
				{
					pointer:
						'Performed testing, debugging, and troubleshooting to ensure the reliability and functionality of software.',
				},
				{
					pointer:
						'Performed any other duties assigned to contribute to the overall success of the team.',
				},
			],
		},
		{
			id: Math.floor(Math.random() * 1000) + 1,
			position: 'PROGRAMMER',
			company: 'SL Agritech Corporation | Makati City, PH',
			duration: 'August 2022 - November 2023',
			level: 'Junior',
			description: [
				{
					pointer:
						'Spearheaded the implementation of modern UI design concepts within the team, resulting in the creation of highly user-friendly web applications that enhanced the overall user experience.',
				},
				{
					pointer:
						'Demonstrated strong problem-solving skills by identifying and fixing bugs in existing systems, and implementing enhancements that significantly improved functionality and performance.',
				},
				{
					pointer:
						'Led the design and development of a web application aimed at streamlining HR processes, enabling HR personnel to efficiently track and manage applicant applications.',
				},
				{
					pointer:
						'Actively collaborated with end-users to gather insights and understand their requirements for changes or modifications to existing programs, ensuring that user needs were met effectively.',
				},
				{
					pointer:
						'Applied a user-centered approach, conducting usability tests and incorporating user feedback to continuously improve and refine web applications.',
				},
				{
					pointer:
						'Employed agile methodologies to manage project timelines and deliverables, ensuring successful completion of development projects.',
				},
				// {
				//    pointer: 'Worked closely with cross-functional teams, including designers and developers, to ensure seamless integration of design elements and optimal functionality of web applications.'
				// },
				{
					pointer:
						'Demonstrated effective communication skills in presenting and explaining technical concepts to both technical and non-technical stakeholders.',
				},
			],
		},
		{
			id: Math.floor(Math.random() * 1000) + 1,
			position: 'BACKEND DEVELOPER',
			company: 'Sterling Insurance Company Inc.',
			duration: 'April - July 2022',
			level: 'Intern',
			type: 'Remote',
			description: [
				{
					pointer:
						'Conducted data extraction and processing from Excel files, ensuring accuracy and data integrity.',
				},
				{
					pointer:
						'Developed robust server-side logic and performed regular maintenance to ensure high performance and responsiveness to frontend requests.',
				},
				{
					pointer:
						'Created dynamic APIs to facilitate seamless data exchange and integration with frontend elements.',
				},
				{
					pointer:
						'Collaborated closely with frontend developers to ensure smooth integration of components and optimize overall system functionality.',
				},
				{
					pointer:
						'Conducted diagnostics tests to identify and resolve bugs, ensuring the reliability and stability of the system.',
				},
				{
					pointer:
						'Provided prompt and effective technical support to users, troubleshooting issues and offering solutions to minimize downtime.',
				},
				{
					pointer:
						'Actively participated in code reviews and implemented best practices to improve code quality, maintainability, and scalability.',
				},
				{
					pointer:
						'Stayed updated with the latest industry trends and technologies, incorporating them into development processes to enhance efficiency and innovation.',
				},
				{
					pointer:
						'Acted as a proactive team member, contributing ideas and suggestions for process improvement and optimization.',
				},
			],
		},
		{
			id: Math.floor(Math.random() * 1000) + 1,
			position: 'TECHNICAL SUPPORT STAFF',
			company: 'Comelec',
			duration: 'February - May 2022',
			type: 'Part-Time',
			description: [
				{
					pointer:
						'Delivered exemplary Level 1 support, swiftly addressing technical issues, troubleshooting problems, and ensuring timely resolutions to maintain uninterrupted operations.',
				},
				{
					pointer:
						'Demonstrated expertise in equipment maintenance, performing regular checks, repairs, and upgrades to optimize system performance and reliability.',
				},
				{
					pointer:
						'Proactively monitored IT equipment, promptly identifying and mitigating potential issues to minimize downtime and enhance overall system efficiency.',
				},
				{
					pointer: `Played a pivotal role in the seamless deployment of IT equipment, ensuring proper setup, configuration, and integration within the organization's infrastructure.`,
				},
			],
		},
	]);

	const [keyPoints] = useState<KeyPointsType[]>([
		{
			title: 'Immersive Learning Journey',
			description: `I have dedicated myself to mastering Software Development for ${setTimestamp(
				1,
				2018
			)} now, immersing myself in self-study, online courses, and personal projects. This accelerated learning has provided me with a deep understanding about Software Engineering and its complexities.`,
			path: 'illustration1.png',
		},
		{
			title: 'Real-World Application',
			description:
				'In addition to my professional work, I have actively sought out opportunities to apply my Software Development knowledge outside of traditional job roles. Like helping my friends with their errors, making websites for/with them. These hands-on opportunities have broadened my skill-set and exposed me to diverse projects and collaborations.',
			path: 'illustration2.png',
			align: 'right',
		},
		{
			title: 'Demonstrated Results',
			description:
				'Despite limited professional experience, I have successfully developed and deployed impactful web applications using MERN Stack. Positive user feedback and demonstrated results validate my ability to deliver high-quality solutions within given timelines.',
			path: 'illustration3.png',
		},
	]);

	const experienceTimelineItems = (experiences: ExperienceType) => {
		return {
			children: (
				<>
					<motion.div
						className='flex flex-col gap-2'
						variants={cardVariants}
						initial='offscreen'
						whileInView='onscreen'
						viewport={viewportVariant}>
						<div className='flex items-center justify-between'>
							<div className='flex flex-col'>
								<div className='flex items-center gap-2'>
									<h3 className='text-accent-primary font-bold text-base'>
										{experiences.position}
									</h3>
									{experiences.level && (
										<span>({experiences?.level})</span>
									)}
								</div>
								<div className='flex items-center justify-start gap-1'>
									<h4 className='text-accent-secondary   font-semibold'>
										{experiences.company}
									</h4>
									{experiences?.type && (
										<span className='text-accent-secondary  '>
											({experiences?.type})
										</span>
									)}
								</div>
							</div>
							<div className='flex items-center'>
								<p className='font-semibold text-accent-secondary   text-right'>
									{experiences.duration}
								</p>
							</div>
						</div>
						<div className='flex flex-col px-3'>
							{experiences.description.map(({pointer}, i) => {
								return (
									<div
										className='flex gap-3 text-accent-secondary  '
										key={i}>
										<div>•</div>
										<p className='text-justify font-medium'>
											{pointer}
										</p>
									</div>
								);
							})}
						</div>
					</motion.div>
				</>
			),
		};
	};

	return (
		<div className='flex flex-col gap-8 p-7 pt-3 max-md:px-4'>
			{/* ABOUT ME */}
			<Container title='ABOUT ME'>
				<div className='flex flex-col gap-3'>
					<motion.h4
						className='text-accent-secondary   text-justify font-medium'
						variants={cardVariants}
						initial='offscreen'
						whileInView='onscreen'
						viewport={viewportVariant}>
						While my official work experience spans{' '}
						<strong>{setTimestamp(8, 2022)}</strong>, I want to emphasize
						that my proficiency and expertise with the{' '}
						<strong>Software Development</strong> extend far beyond that,
						equating to{' '}
						<strong>
							{setTimestamp(8, 2018)} of practical knowledge
						</strong>
						. I spent my first couple of years doing{' '}
						<strong>Desktop Development</strong> using{' '}
						<strong>Java</strong>, and on 2020 I decided to switch to{' '}
						<strong>Web Application Development</strong> using mainly{' '}
						<strong>
							MERN (MySQL, ExpressJS, ReactJS, NodeJS) Stack
						</strong>
						, and learned a bunch of web-related technologies and
						frameworks ever since.
					</motion.h4>
					<motion.p
						className='text-accent-primary   font-medium'
						variants={cardVariants}
						initial='offscreen'
						whileInView='onscreen'
						viewport={viewportVariant}>
						Here are three key points to consider:
					</motion.p>
					<div className='flex flex-col gap-7 my-5'>
						<>
							{keyPoints.map((keypoint, index) => {
								return (
									<motion.div
										className={`flex items-center gap-5 px-5 max-lg:flex-col ${
											keypoint?.align && 'flex-row-reverse'
										}`}
										key={index}
										variants={cardVariants}
										initial='offscreen'
										whileInView='onscreen'
										viewport={viewportVariant}>
										<div className='flex justify-center items-center flex-1'>
											<Image
												className='object-contain h-44'
												src={require(`../../assets/Illustrations/${keypoint.path}`)}
												alt={keypoint.title}
												width={200}
												height={200}
											/>
										</div>
										<div className='flex flex-col flex-1 gap-2'>
											<h2 className='font-bold text-lg text-accent-primary   text-left max-lg:text-center'>
												{keypoint.title}
											</h2>
											<p className='text-justify font-medium text-accent-secondary  '>
												{keypoint.description}
											</p>
										</div>
									</motion.div>
								);
							})}
						</>
					</div>
				</div>
			</Container>

			{/* EXPERIENCE */}
			<Container title='EXPERIENCE'>
				<Timeline
					className={quicksand.className}
					items={experiences.map((experience) => {
						return experienceTimelineItems(experience);
					})}
				/>
			</Container>

			{/* EDUCATION */}
			<Container title='EDUCATION'>
				<Timeline
					className={quicksand.className}
					items={[
						{
							children: (
								<>
									<motion.div
										className='flex flex-col gap-2'
										variants={cardVariants}
										initial='offscreen'
										whileInView='onscreen'
										viewport={viewportVariant}>
										<div className='flex items-center justify-between'>
											<div className='flex flex-col'>
												<h3 className='text-accent-primary   font-semibold text-base'>
													BS INFORMATION TECHNOLOGY
												</h3>
												<h4 className='text-accent-secondary   font-semibold'>
													University of Eastern Philippines
												</h4>
											</div>
											<div className='flex items-center'>
												<p className='font-semibold text-accent-secondary   text-right'>
													August 2018 - June 2022
												</p>
											</div>
										</div>
										<div className='flex flex-col px-3'>
											{/* <div className="flex gap-3 text-accent-secondary  ">
                                    <div>•</div>
                                    <p className='text-justify font-medium'>Capstone Project: JOB SEARCH SYSTEM (Using MERN Stack)</p>
                                 </div> */}
											<div className='flex gap-3 text-accent-secondary  '>
												<div>•</div>
												<p className='text-justify font-medium'>
													Graduated Cum Laude
												</p>
											</div>
										</div>
									</motion.div>
								</>
							),
						},
					]}
				/>
			</Container>
		</div>
	);
};

export default Personal;
