import { ReactNode, SetStateAction } from 'react';

export interface LinksInterface {
   icon: string;
   path: string;
}
export interface PanelsInterface {
   label: string;
   key: string;
   children: JSX.Element;
}
export interface SkillsInterface {
   icon: string;
   description: string;
   category: string;
   proficiency: string;
}
export interface PersonalInformationInterface {
   icon: string;
   label: string;
}
export interface ScreenSizeInterface {
   width: number;
   height: number;
}
export interface ServicesInterface {
   category: string;
   items: string[];
}

export interface TagListsInterface {
   ID: number;
   label: string;
   color: string;
}
export interface ProjectsInterface {
   title: string;
   description: string;
   tagIDs: number[];
   coverURLs: string[];
   duties?: string[];
}

export interface ContainerPropsInterface {
   title: string;
   className?: string;
   children: ReactNode;
}

export interface QualificationInterface {
   title: string;
   description: string[];
}

export type viewportType = {
   once: boolean;
   amount: number;
};

export type ThemeType = 'dark' | 'light';

export type ContextValueType = {
   theme: ThemeType;
   toggleTheme: () => void;
   isMobile: boolean;
};

export type ContactFormDataType = {
   from_name: string;
   from_email: string;
   message: string;
};

export type KeyPointsType = {
   title: string;
   description: string;
   path: string;
   align?: string;
};
