import {Anchor, Button, Divider, Tabs, TabsProps} from 'antd';
import Image from 'next/image';
import React, {useState} from 'react';
import {Quicksand} from 'next/font/google';
import profileIMG from '@/assets/Images/Ralf Renz Bantilo.png';
import {DownloadOutlined} from '@ant-design/icons';
// import Personal from '@/pages/components/Personal';
import Projects from '@/pages/components/Projects';
// import OtherInfo from '@/pages/components/OtherInfo';

const quicksand = Quicksand({subsets: ['latin']});

const MobileView = () => {
	return (
		<div className='min-h-screen flex flex-col'>
			{/* <div className="flex flex-col">
            <div className="flex flex-col items-center justify-between bg-background-primary   " style={{ position: 'sticky', top: 0, zIndex: 11 }}>
               <h2 className='font-bold text-lg text-primary p-2'>Personal</h2>
               <Divider className='m-0  ' />
            </div>
            <div>
               <Personal />
            </div>
         </div> */}
			<div className='flex flex-col'>
				<div
					className='flex flex-col items-center justify-between bg-background-primary   '
					style={{position: 'sticky', top: 0, zIndex: 11}}>
					<h2 className='font-bold text-lg text-primary p-2'>Projects</h2>
					<Divider className='m-0  ' />
				</div>
				<div>
					<Projects />
				</div>
			</div>
			{/* <div className="flex flex-col">
            <div className="flex flex-col items-center justify-between bg-background-primary   " style={{ position: 'sticky', top: 0, zIndex: 11 }}>
               <h2 className='font-bold text-lg text-primary p-2'>Others</h2>
               <Divider className='m-0  ' />
            </div>
            <div>
               <OtherInfo />
            </div>
         </div> */}
		</div>
	);
};

export default MobileView;
