import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import {Divider} from 'antd';
import Profile from './Profile';
import BasicInformation from './BasicInformation';
import Socials from './Socials';
import DownloadButton from './DownloadButton';

const LeftContainer = (
   props?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) => {
   return (
      <div
         {...props}
         className={`h-screen overflow-auto flex flex-col justify-between py-3 ${props?.className} md-breakpoint:justify-around`}>
         <Profile />
         <div className='flex flex-col gap-3 '>
            <Divider className='m-0'></Divider>
            <Socials />
            <Divider className='m-0'></Divider>
         </div>
         <BasicInformation />

         <DownloadButton />
      </div>
   );
};

export default LeftContainer;
