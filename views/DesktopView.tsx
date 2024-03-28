import Image from 'next/image';
import {useContext, useEffect, useState} from 'react';
import profileIMG from '@/assets/Images/Ralf Pic.jpg';
// import profileIMG from '@/assets/Images/Ralf Renz Bantilo.png'
import {Button, Tabs, Spin, TabsProps, Divider} from 'antd';
import {DownloadOutlined} from '@ant-design/icons/lib/icons';
import StickyBox from 'react-sticky-box';
import {Quicksand} from 'next/font/google';
import dynamic from 'next/dynamic';
import {
	ContextValueType,
	LinksInterface,
	PanelsInterface,
	PersonalInformationInterface,
} from '@/interfaces';
import 'react-toastify/dist/ReactToastify.css';
import {motion} from 'framer-motion';
import {ComponentContext} from '@/context/context';
import TechSkills from '@/pages/components/TechSkills';
import {container, item} from '@/utils/Resources';

const Personal = dynamic<{}>(() => import('@/pages/components/Personal'), {
	ssr: false,
});
const Projects = dynamic<{}>(() => import('@/pages/components/Projects'), {
	ssr: false,
});
const OtherInfo = dynamic<{}>(() => import('@/pages/components/OtherInfo'), {
	ssr: false,
});
const MobileView = dynamic<{}>(() => import('./MobileView'), {
	ssr: false,
});

const quicksand = Quicksand({subsets: ['latin']});

const DesktopView = () => {
	const context = useContext<ContextValueType | null>(ComponentContext);

	const [personalInformation] = useState<PersonalInformationInterface[]>([
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
	]);
	const [panels] = useState<PanelsInterface[]>([
		{
			label: `Personal`,
			key: `${Math.floor(Math.random() * 100) + 1}`,
			children: <Personal />,
		},
		{
			label: `Projects`,
			key: `${Math.floor(Math.random() * 100) + 1}`,
			children: <Projects />,
		},
		{
			label: `Others`,
			key: `${Math.floor(Math.random() * 100) + 1}`,
			children: <OtherInfo />,
		},
	]);
	const [links] = useState<LinksInterface[]>([
		{
			icon: 'linkedin',
			path: 'https://linkedin.com/in/ralfrenzbantilo',
		},
		{
			icon: 'github',
			path: 'https://github.com/Ralf-Renz-Estellana-Bantilo',
		},
		{
			icon: 'facebook',
			path: 'https://www.facebook.com/rr.bantilo2000',
		},
		{
			icon: 'messenger',
			path: 'https://m.me/rr.bantilo2000',
		},
	]);
	const [loader, setToggleLoader] = useState<boolean>(!false);

	const renderTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => (
		<StickyBox
			offsetTop={0}
			offsetBottom={20}
			style={{
				zIndex: 110,
			}}>
			<DefaultTabBar
				{...props}
				style={{
					zIndex: 110,
					background: `#E7F1F3`,
				}}
			/>
		</StickyBox>
	);

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

	useEffect(() => {
		setToggleLoader(true);
		setTimeout(() => {
			setToggleLoader(false);
		}, 1000);
	}, []);

	return (
		<div
			className={`${quicksand.className} bg-background-primary relative flex min-h-screen max-lg:flex max-lg:flex-col`}>
			{/* LEFT PANEL */}
			<div
				className='flex flex-col justify-between py-5 px-4 gradient-background h-screen overflow-auto max-lg:min-h-[100vh] max-lg:justify-evenly max-lg:gap-3'
				style={{flex: 2}}>
				<div className='flex flex-col gap-3 '>
					<motion.div
						className='flex flex-col items-center gap-2'
						variants={container}
						initial='hidden'
						animate='visible'>
						<motion.div
							className='flex items-center justify-center border-2 border-red-800 rounded-full hover:border-red-500 transition-colors ease-in-out'
							variants={item}
							onClick={context?.toggleTheme}>
							<motion.div className='w-40 h-40 bg-transparent p-[5px] rounded-full'>
								<Image
									className='object-cover w-full h-full mx-auto rounded-full'
									src={profileIMG}
									alt='Ralf Renz Bantilo'
									title='Unavailable at the moment'
									priority
								/>
							</motion.div>
						</motion.div>
						<motion.div
							className='flex flex-col justify-center'
							variants={container}
							initial='hidden'
							animate='visible'>
							<motion.h3
								className='text-center text-background-primary text-2xl font-bold tiktok-effect'
								variants={item}>
								RALF RENZ BANTILO
							</motion.h3>
							<motion.p
								className='text-center text-background-secondary'
								variants={
									item
								}>{`< Mid-level Front-End Developer />`}</motion.p>
						</motion.div>
					</motion.div>
					<Divider className='m-0  '></Divider>

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
								</motion.div>
							);
						})}
					</motion.div>

					<Divider className='m-0  '></Divider>
					<motion.div
						className='flex flex-col rounded-lg border-2 border-slate-600 text-background-primary'
						variants={container}
						initial='hidden'
						animate='visible'>
						<div className='flex justify-center border-2 border-transparent border-b-slate-600 px-2 py-1'>
							<h4 className='text-center'>Information</h4>
						</div>
						<div className='flex flex-col p-2 gap-2'>
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
											className='text-background-primary text-sm font-semibold'>
											{info.label}
										</p>
									</motion.div>
								);
							})}
						</div>
					</motion.div>
				</div>
				<motion.div className='flex' variants={item}>
					<Button
						type='primary'
						shape='round'
						icon={
							<DownloadOutlined
								className={`${quicksand.className} relative bottom-1`}
							/>
						}
						style={{flex: 1}}
						size='large'
						onClick={handleDownload}>
						Download Resume
					</Button>
				</motion.div>
			</div>

			{/* CONTENT PANEL */}
			<div
				className={`${
					context?.isMobile ? 'h-screen' : 'h-screen overflow-y-scroll'
				}`}
				style={{flex: 5}}>
				{loader ? (
					<>
						<div className='h-screen flex items-center justify-center'>
							<Spin size='large' />
						</div>
					</>
				) : (
					<>
						{context?.isMobile ? (
							<MobileView />
						) : (
							<Tabs
								defaultActiveKey='1'
								centered
								animated={{inkBar: true}}
								className={`${quicksand.className}`}
								renderTabBar={renderTabBar}
								items={panels}
							/>
						)}
					</>
				)}
			</div>

			{/* RIGHT PANEL */}
			<div
				className='gradient-background py-5 px-4 h-screen max-lg:min-h-[100vh]'
				style={{flex: 1.8}}>
				<TechSkills />
			</div>
		</div>
	);
};

export default DesktopView;
