import React, {useCallback, useState} from 'react';
import Image from 'next/image';
import {SendOutlined} from '@ant-design/icons';
import {motion} from 'framer-motion';
import {ContactFormDataType} from '@/interfaces';
import {cardVariants, viewportVariant} from '@/utils/Resources';

import {Quicksand} from 'next/font/google';
import {ToastContainer, toast} from 'react-toastify';
import emailjs, {EmailJSResponseStatus} from 'emailjs-com';
import {Button, Input, Textarea} from '@nextui-org/react';

const ContactForm = () => {
	const [formData, setFormData] = useState<ContactFormDataType>({
		from_name: '',
		from_email: '',
		message: '',
	});

	const [isDisableBtn, setDisableBtn] = useState(false);

	const successNotification = (message: string) => toast.success(message);
	const errorNotification = (message: string) => toast.error(message);
	const warningNotification = (message: string) => toast.warning(message);

	const handleSubmit = async (
		e: React.FormEvent<HTMLFormElement | string | null>
	) => {
		setDisableBtn(true);
		e.preventDefault();

		const {from_name, from_email, message} = formData;
		const isValid = from_name !== '' && from_email !== '' && message !== '';

		const serviceId = 'gmail';
		const templateId = 'template_0kdw8xu';
		const userId = 'user_d4MCLJciZKPbKaM472IEi';

		if (isValid) {
			try {
				const response: EmailJSResponseStatus = await emailjs.send(
					serviceId,
					templateId,
					{from_name, from_email, message},
					userId
				);

				const {status} = response;

				if (status === 200) {
					successNotification('Successfully sent an email to Ralf!');
					setFormData({from_name: '', from_email: '', message: ''});
				}

				setDisableBtn(false);
			} catch (error) {
				errorNotification('Error sending an email to Ralf!');
				setDisableBtn(false);
			}
		} else {
			warningNotification('You have to fill in all the fields!');
			setDisableBtn(false);
		}
	};

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const {name, value} = e.target;
			setFormData({...formData, [name]: value});
		},
		[formData]
	);

	return (
		<>
			<div className='flex flex-col justify-center items-center p-3 gap-2'>
				<motion.div
					className='flex p-2 gap-2 w-full max-md:flex-col'
					variants={cardVariants}
					initial='offscreen'
					whileInView='onscreen'
					viewport={viewportVariant}>
					<div className='flex items-center justify-center flex-[5]'>
						<Image
							src={require('@/assets/Icons/3d.png').default}
							alt='illustration'
							width={200}
							height={200}
						/>
					</div>
					<form
						className='flex flex-col p-2 gap-1 flex-[6]'
						onSubmit={handleSubmit}>
						<Input
							label='Your Full Name'
							name='from_name'
							variant='bordered'
							value={formData.from_name}
							onChange={handleChange}
						/>
						<Input
							label='Your Email Address'
							type='email'
							name='from_email'
							variant='bordered'
							value={formData.from_email}
							onChange={handleChange}
						/>
						<Textarea
							label='Your Message'
							placeholder='Enter your message'
							name='message'
							variant='bordered'
							value={formData.message}
							onChange={handleChange}
						/>
						<Button
							color='primary'
							type='submit'
							startContent={<SendOutlined />}>
							{isDisableBtn ? 'Sending Message...' : 'Send Message'}
						</Button>
					</form>
				</motion.div>
				<motion.small
					className='text-center text-accent-secondary  '
					variants={cardVariants}
					initial='offscreen'
					whileInView='onscreen'
					viewport={viewportVariant}>
					Your potential best hire awaits!
				</motion.small>
			</div>
			<ToastContainer position='bottom-right' theme='dark' />
		</>
	);
};

export default ContactForm;
