import useScreenWidth from '@/hooks/useScreenWidth';

export function setTimestamp(mm: number, yyyy: number): string {
    let result: string = '';
    let stampNumber: number = 0;
    let currentMonth: number = new Date().getMonth() + 1;
    let currentYear: number = new Date().getFullYear();

    let stampString: string = '';

    if (yyyy > currentYear || (yyyy === currentYear && mm > currentMonth)) {
        return `Invalid TimeStamp!`;
    }

    if (currentYear > yyyy || (currentYear === yyyy && currentMonth > mm)) {
        stampNumber = (currentYear - yyyy) * 12 + currentMonth - mm;

        if (stampNumber >= 12) {
            const years = Math.floor(stampNumber / 12);
            const remainingMonths = stampNumber % 12;
            stampNumber = years;

            if (years === 1) {
                if (remainingMonths >= 7) {
                    if (remainingMonths >= 9) {
                        result = `${years + 1} years`;
                    } else {
                        result = `almost ${years + 1} years`;
                    }
                } else {
                    let concatenator =
                        remainingMonths > 0
                            ? `and ${
                                  remainingMonths > 1
                                      ? `${remainingMonths} months`
                                      : 'month'
                              }`
                            : '';
                    result = `${years} year ${concatenator}`;
                }
            } else {
                if (remainingMonths >= 7) {
                    if (remainingMonths >= 9) {
                        result = `${years + 1} years`;
                    } else {
                        result = `almost ${years + 1} years`;
                    }
                } else {
                    result = `${years}+ years`;
                }
            }
        } else {
            stampString = stampNumber > 1 ? 'months' : 'month';
            result = `${stampNumber} ${stampString}`;
        }
    }

    return result;
}

export const SM_BREAKPOINT = 576;
export const MD_BREAKPOINT = 768;
export const LG_BREAKPOINT = 992;
export const XL_BREAKPOINT = 1200;
export const XXL_BREAKPOINT = 1400;

export const MONTHLIST = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export const monthDescriptionShortener = (monthIndex: number) => {
    const screenWidth = useScreenWidth();

    return screenWidth <= SM_BREAKPOINT
        ? MONTHLIST[monthIndex - 1].slice(0, 3)
        : MONTHLIST[monthIndex - 1];
};

export const experienceLevelOptions: string[] = [
    'Junior Level',
    'Mid-Level',
    'Senior Level',
    'Managerial',
];

export const jobTypeOptions: string[] = [
    'Full-time',
    'Part-time',
    'Contract',
    'Freelance',
];

export const workSetupOptions: string[] = ['On-site', 'Remote', 'Hybrid'];

export const jobTitleOptions1: string[] = [
    'Software Engineer',
    'Frontend Developer',
    'Fullstack Developer',
];

export const jobTitleOptions2: string[] = [
    'Senior Software Engineer',
    'Senior Front End Developer',
    'Senior Fullstack Developer',
];

export const techStackOptions1: string[] = [
    'MySQL, ExpressJS, ReactJS, NodeJS',
    'ReactJS, NextJS, TypeScript, NodeJS',
    'JavaScript, PHP',
];

export const techStackOptions2: string[] = [
    'MySQL, ExpressJS, VueJS, NodeJS',
    'VueJS, MySQL, PHP',
    'Java, MySQL',
];
