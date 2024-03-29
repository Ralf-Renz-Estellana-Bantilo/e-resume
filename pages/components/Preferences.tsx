import React, {useContext} from 'react';
import {cardVariants, quicksand, viewportVariant} from '@/utils/Resources';
import {motion} from 'framer-motion';
import {Checkbox, Divider} from 'antd';
import {ContextValueType} from '@/interfaces';
import {ComponentContext} from '@/context/context';

const Preferences = () => {
	const context = useContext<ContextValueType | null>(ComponentContext);

	const experienceLevelOptions: string[] = [
		'Junior Level',
		'Mid-Level',
		'Senior Level',
		'Managerial',
	];
	const jobTypeOptions: string[] = [
		'Full-time',
		'Part-time',
		'Contract',
		'Freelance',
	];
	const workSetupOptions: string[] = ['On-site', 'Remote', 'Hybrid'];
	const jobTitleOptions1: string[] = [
		'Software Engineer',
		'Frontend Software Engineer',
		'Fullstack Developer (React/Node)',
	];
	const jobTitleOptions2: string[] = [
		'React Developer',
		' Programmer',
		'Web Developer',
	];
	const techStack1: string[] = [
		'MySQL, ExpressJS, ReactJS, NodeJS',
		'ReactJS, NextJS, TypeScript, NodeJS',
		'JavaScript, PHP',
	];
	const techStack2: string[] = [
		'MySQL, ExpressJS, VueJS, NodeJS',
		'VueJS, MySQL, PHP',
		'Java, MySQL',
	];

	return (
		<div className='flex flex-col p-3 pb-6 gap-11 max-md:gap-5'>
			{context?.isMobile ? (
				<>
					<div className='flex flex-col gap-2'>
						<Divider className='m-0   ' orientation='center'>
							<h3 className='font-semibold text-base text-accent-primary  '>
								Experience Level
							</h3>
						</Divider>
						<div className='px-3'>
							{experienceLevelOptions.map((exp, i) => (
								<Checkbox.Group
									className={`${quicksand.className} w-full`}
									options={[exp]}
									value={['Junior Level', 'Mid-Level']}
									key={i}
								/>
							))}
						</div>
					</div>
					<div className='flex flex-col gap-2'>
						<Divider className='m-0   ' orientation='center'>
							<h3 className='font-semibold text-base text-accent-primary  '>
								Job Type
							</h3>
						</Divider>
						<div className='px-3'>
							{jobTypeOptions.map((jobType, i) => (
								<Checkbox.Group
									className={`${quicksand.className} w-full`}
									options={[jobType]}
									value={['Full-time', 'Part-time']}
									key={i}
								/>
							))}
						</div>
					</div>
					<div className='flex flex-col gap-2'>
						<Divider className='m-0   ' orientation='center'>
							<h3 className='font-semibold text-base text-accent-primary  '>
								Work Setup
							</h3>
						</Divider>
						<div className='px-3'>
							{workSetupOptions.map((workSetup, i) => (
								<Checkbox.Group
									className={`${quicksand.className} w-full`}
									options={[workSetup]}
									value={workSetupOptions}
									key={i}
								/>
							))}
						</div>
					</div>
					<div className='flex flex-col gap-2'>
						<Divider className='m-0   ' orientation='center'>
							<h3 className='font-semibold text-base text-accent-primary'>
								Title
							</h3>
						</Divider>
						<div className='px-3'>
							{[...jobTitleOptions1, ...jobTitleOptions2].map(
								(title, i) => {
									return (
										<Checkbox.Group
											className={`${quicksand.className} w-full`}
											options={[title]}
											value={[title]}
											key={i}
										/>
									);
								}
							)}
						</div>
					</div>
					{/* <div className="flex flex-col gap-2">
                  <Divider className='m-0   ' orientation="center">

                     <h3 className='font-semibold text-base text-accent-secondary  '>Availability (Phone call)</h3>
                  </Divider>
                  <div className='flex flex-col items-start px-3 gap-2'>
                     <div className="flex gap-2 items-center flex-1">
                        <p>Weekdays:</p>
                        <span className='font-semibold'>6pm - 8pm</span>
                     </div>
                     <div className="flex gap-2 items-center flex-1">
                        <p>Weekends:</p>
                        <span className='font-semibold'>8am - 8pm</span>
                     </div>
                  </div>
               </div> */}
					<div className='flex flex-col gap-2'>
						<Divider className='m-0   ' orientation='center'>
							<h3 className='font-semibold text-base text-accent-primary'>
								Tech Stack
							</h3>
						</Divider>
						<div className='flex flex-col items-start px-3'>
							{[...techStack1, ...techStack2].map((title, i) => {
								return (
									<Checkbox.Group
										className={`${quicksand.className} w-full`}
										options={[title]}
										value={[
											'MySQL, ExpressJS, ReactJS, NodeJS',
											'ReactJS, NextJS, TypeScript, NodeJS',
											'MySQL, ExpressJS, VueJS, NodeJS',
										]}
										key={i}
									/>
								);
							})}
						</div>
					</div>
				</>
			) : (
				<>
					<motion.div
						className='flex flex-col gap-2'
						variants={cardVariants}
						initial='offscreen'
						whileInView='onscreen'
						viewport={viewportVariant}>
						<Divider className='m-0   ' orientation='center'>
							<h3 className='font-semibold text-base text-accent-primary'>
								Experience Level
							</h3>
						</Divider>
						<div className='px-3'>
							<Checkbox.Group
								className={`${quicksand.className} w-full`}
								options={experienceLevelOptions}
								value={['Mid-Level', 'Senior Level']}
							/>
						</div>
					</motion.div>
					<motion.div
						className='flex flex-col gap-2'
						variants={cardVariants}
						initial='offscreen'
						whileInView='onscreen'
						viewport={viewportVariant}>
						<Divider className='m-0 ' orientation='center'>
							<h3 className='font-semibold text-base text-accent-primary'>
								Job Type
							</h3>
						</Divider>
						<div className='px-3'>
							<Checkbox.Group
								className={`${quicksand.className} w-full`}
								options={jobTypeOptions}
								value={['Full-time', 'Part-time']}
							/>
						</div>
					</motion.div>
					<motion.div
						className='flex flex-col gap-2'
						variants={cardVariants}
						initial='offscreen'
						whileInView='onscreen'
						viewport={viewportVariant}>
						<Divider className='m-0   ' orientation='center'>
							<h3 className='font-semibold text-base text-accent-primary'>
								Work Setup
							</h3>
						</Divider>
						<div className='px-3'>
							<Checkbox.Group
								style={{color: 'green'}}
								className={`${quicksand.className} w-full`}
								options={workSetupOptions}
								value={workSetupOptions}
							/>
						</div>
					</motion.div>
					<motion.div
						className='flex flex-col gap-2'
						variants={cardVariants}
						initial='offscreen'
						whileInView='onscreen'
						viewport={viewportVariant}>
						<Divider className='m-0   ' orientation='center'>
							<h3 className='font-semibold text-base text-accent-primary'>
								Title
							</h3>
						</Divider>
						<div className='px-3 space-y-3'>
							<Checkbox.Group
								className={`${quicksand.className} w-full`}
								options={jobTitleOptions1}
								value={jobTitleOptions1}
							/>
							<Checkbox.Group
								className={`${quicksand.className} w-full`}
								options={jobTitleOptions2}
								value={jobTitleOptions2}
							/>
						</div>
					</motion.div>
					<motion.div
						className='flex flex-col gap-2'
						variants={cardVariants}
						initial='offscreen'
						whileInView='onscreen'
						viewport={viewportVariant}>
						<Divider className='m-0   ' orientation='center'>
							<h3 className='font-semibold text-base text-accent-primary'>
								Tech Stack
							</h3>
						</Divider>
						<div className='flex flex-col items-start px-3 gap-2'>
							<Checkbox.Group
								className={`${quicksand.className} w-full`}
								options={techStack1}
								value={[
									'MySQL, ExpressJS, ReactJS, NodeJS',
									'ReactJS, NextJS, TypeScript, NodeJS',
								]}
							/>
							<Checkbox.Group
								className={`${quicksand.className} w-full`}
								options={techStack2}
								value={['MySQL, ExpressJS, VueJS, NodeJS']}
							/>
						</div>
					</motion.div>
					{/* <div className="flex flex-col gap-2">
                  <Divider className='m-0   ' orientation="center">

                     <h3 className='font-semibold text-base text-accent-primary'>Availability (Phone call)</h3>
                  </Divider>
                  <div className='flex items-center justify-around px-3 gap-2'>
                     <div className="flex gap-2 items-center">
                        <p>Weekdays:</p>
                        <span className='font-semibold'>11:30 AM - 12:30 PM</span>
                     </div>
                     <div className="flex gap-2 items-center">
                        <p>Weekends:</p>
                        <span className='font-semibold'>9:00 AM - 4:00 PM</span>
                     </div>
                  </div>
               </div> */}
				</>
			)}
			{/* <div className="flex flex-col gap-2">
            <Divider className='m-0   ' orientation="center">

               <h3 className='font-semibold text-base text-accent-primary'>Salary Range</h3>
            </Divider>
            <div className='flex flex-col px-3'>
               <Slider
                  tooltip={{ formatter: null }}
                  range={{ draggableTrack: true }}
                  min={50}
                  max={150}
                  value={[75, 110]}
               />
               <div className="flex justify-between items-center">
                  <p>Min: $50k</p>
                  <p>Max: $150k</p>
               </div>
            </div>
         </div> */}
		</div>
	);
};

export default Preferences;
