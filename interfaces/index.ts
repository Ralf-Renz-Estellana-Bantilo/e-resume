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
}

