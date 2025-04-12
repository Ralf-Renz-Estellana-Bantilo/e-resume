import {Divider} from 'antd';
// import Personal from '@/pages/components/Personal';
import Projects from '@/pages/components/Projects';
// import OtherInfo from '@/pages/components/OtherInfo';

const MobileView = () => {
   return (
      <div className='flex flex-col min-h-screen'>
         {/* <div className="flex flex-col">
            <div className="flex flex-col items-center justify-between bg-background-primary " style={{ position: 'sticky', top: 0, zIndex: 11 }}>
               <h2 className='p-2 text-lg font-bold text-primary'>Personal</h2>
               <Divider className='m-0 ' />
            </div>
            <div>
               <Personal />
            </div>
         </div> */}
         <div className='flex flex-col'>
            <div
               className='flex flex-col items-center justify-between bg-background-primary '
               style={{position: 'sticky', top: 0, zIndex: 11}}>
               <h2 className='p-2 text-lg font-bold text-primary'>Projects</h2>
               <Divider className='m-0 ' />
            </div>
            <div>
               <Projects />
            </div>
         </div>
         {/* <div className="flex flex-col">
            <div className="flex flex-col items-center justify-between bg-background-primary " style={{ position: 'sticky', top: 0, zIndex: 11 }}>
               <h2 className='p-2 text-lg font-bold text-primary'>Others</h2>
               <Divider className='m-0 ' />
            </div>
            <div>
               <OtherInfo />
            </div>
         </div> */}
      </div>
   );
};

export default MobileView;
