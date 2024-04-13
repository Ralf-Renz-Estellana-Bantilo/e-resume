import React from 'react';
import {motion} from 'framer-motion';
import {container, item} from '@/utils/Resources';
import {Tooltip} from 'antd';
import Image from 'next/image';
import profileIMG from '@/assets/Images/Ralf Pic.jpg';
// import profileIMG from '@/assets/Images/Ralf Renz Bantilo.png'

const Profile = () => {
	return (
		<motion.div
			className='flex flex-col items-center gap-2'
			variants={container}
			initial='hidden'
			animate='visible'>
			<motion.div
				className='flex items-center justify-center border-2 border-green-800 rounded-full hover:border-green-500 transition-colors ease-in-out'
				variants={item}>
				<motion.div className='w-40 h-40 bg-transparent p-[5px] rounded-full'>
					<Tooltip
						placement='bottom'
						color='green'
						title='Open for Part-Time position'
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
					variants={item}>{`< Mid-level Front-End Developer />`}</motion.p>
			</motion.div>
		</motion.div>
	);
};

export default Profile;
