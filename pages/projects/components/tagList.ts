import { TagListsInterface } from '@/interfaces';

export const tagList: TagListsInterface[] = [
   {
      ID: 1,
      label: 'React JS',
      color: 'cyan',
   },
   {
      ID: 2,
      label: 'JavaScript',
      color: 'yellow',
   },
   {
      ID: 3,
      label: 'Node JS',
      color: 'green',
   },
   {
      ID: 4,
      label: 'MySQL',
      color: 'orange',
   },
   {
      ID: 5,
      label: 'TailwindCSS',
      color: 'blue',
   },
   {
      ID: 6,
      label: 'Vue JS',
      color: 'lime',
   },
   {
      ID: 7,
      label: 'Vuetify',
      color: 'geekblue',
   },
   {
      ID: 8,
      label: 'Photoshop',
      color: 'geekblue',
   },
   {
      ID: 9,
      label: 'Figma',
      color: 'orange',
   },
   {
      ID: 10,
      label: 'Express JS',
      color: 'yellow',
   },
   {
      ID: 11,
      label: 'PHP',
      color: 'orange',
   },
   {
      ID: 12,
      label: 'Java',
      color: 'volcano',
   },
   {
      ID: 13,
      label: 'Next JS',
      color: 'magenta',
   },
   {
      ID: 14,
      label: 'TypeScript',
      color: 'geekblue',
   },
];

export const findTagByID = (tagID: Number) => {
   return tagList.filter((list) => list.ID == tagID)[0];
};
