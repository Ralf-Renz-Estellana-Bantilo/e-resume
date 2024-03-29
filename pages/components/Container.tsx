import React from 'react';
import {ContainerPropsInterface, ContextValueType} from '@/interfaces';
import {Divider} from 'antd';

const Container = ({title, className, children}: ContainerPropsInterface) => {
	return (
		<div className={`flex flex-col px-5 gap-2 ${className && className}`}>
			<div className='flex flex-col py-2 gap-2'>
				<h2 className={`font-bold text-lg text-accent-primary`}>{title}</h2>
				<Divider className='m-0  '></Divider>
			</div>
			{children}
		</div>
	);
};

export default Container;
