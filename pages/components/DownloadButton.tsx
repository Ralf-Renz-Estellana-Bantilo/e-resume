import React from 'react';
import {motion} from 'framer-motion';
import {item} from '@/utils/Resources';
import {Button} from '@nextui-org/react';
import {DownloadOutlined} from '@ant-design/icons';

const DownloadButton = () => {
	const handleDownload = (): void => {
		const host = `${window.location.href}`.includes('localhost')
			? 'http://localhost:3000'
			: 'https://ralf-bantilo-e-resume.vercel.app';
		const element = document.createElement('a');
		const fileUrl = `${host}/Documents/Ralf Renz Bantilo - Software Development Team Leader Resume.pdf`;
		element.href = fileUrl;
		element.download = 'Ralf Renz Bantilo - Software Development Team Leader Resume';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	};

	return (
		<motion.div className='flex w-11/12 mx-auto' variants={item}>
			<Button
				color='primary'
				className='w-full'
				onClick={handleDownload}
				startContent={<DownloadOutlined />}>
				Download Resume
			</Button>
		</motion.div>
	);
};

export default DownloadButton;
