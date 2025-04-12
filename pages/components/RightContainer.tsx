import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import TechSkills from './TechSkills';

const RightContainer = (
   props?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) => {
   return (
      <div
         {...props}
         className={`h-screen overflow-auto ${props?.className} md-breakpoint:overflow-visible md-breakpoint:h-auto`}>
         <TechSkills />
      </div>
   );
};

export default RightContainer;
