import React from 'react';
import { motion } from 'framer-motion';
import { item } from '@/utils/Resources';
import { Button } from '@nextui-org/react';
import { DownloadOutlined } from '@ant-design/icons';

const DownloadButton = () => {
   const handleDownload = (): void => {
      const filename = 'Ralf Renz Bantilo - Software Engineer Resume';
      try {
         const protocol = 'https';
         const hostname = 'res.cloudinary.com';
         const pathname = 'doprewqnx/image/upload';
         const folderName = 'v1768009949/PDFs';

         const fileUrl = `${protocol}://${hostname}/${pathname}/${folderName}/${filename}.pdf`;

         window.open(fileUrl, '_blank');
      } catch (error) {
         const host = `${window.location.href}`.includes('localhost')
            ? 'http://localhost:3000'
            : 'https://ralf-bantilo-e-resume.vercel.app';
         const element = document.createElement('a');
         const fileUrl = `${host}/Documents/${filename}.pdf`;
         element.href = fileUrl;
         element.download = filename;
         document.body.appendChild(element);
         element.click();
         document.body.removeChild(element);
      }
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
