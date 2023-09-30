import React, { useCallback, useState } from 'react'
import Image from 'next/image';
import { SendOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
import { motion } from "framer-motion";
import { ContactFormDataType } from '@/interfaces';
import { cardVariants, viewportVariant } from '@/utils/Resources';

import { Quicksand } from 'next/font/google'
import { ToastContainer, toast } from 'react-toastify';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com'
const quicksand = Quicksand( { subsets: ['latin'] } )

const { TextArea } = Input;

const ContactForm = () =>
{

   const [formData, setFormData] = useState<ContactFormDataType>( {
      from_name: '',
      from_email: '',
      message: '',
   } );

   const [isDisableBtn, setDisableBtn] = useState( false )

   const successNotification = ( message: string ) => toast.success( message );
   const errorNotification = ( message: string ) => toast.error( message );
   const warningNotification = ( message: string ) => toast.warning( message );

   const handleSubmit = async ( e: React.FormEvent<HTMLFormElement | string | null> ) =>
   {
      setDisableBtn( true )
      e.preventDefault();

      const { from_name, from_email, message } = formData;
      const isValid = from_name !== '' && from_email !== '' && message !== ''

      const serviceId = 'gmail';
      const templateId = 'template_0kdw8xu';
      const userId = 'user_d4MCLJciZKPbKaM472IEi';

      if ( isValid )
      {
         try
         {
            const response: EmailJSResponseStatus = await emailjs.send(
               serviceId,
               templateId,
               { from_name, from_email, message },
               userId
            );

            const { status } = response

            if ( status === 200 )
            {
               successNotification( 'Successfully sent an email to Ralf!' )
               setFormData( { from_name: '', from_email: '', message: '' } );
            }

            setDisableBtn( false )
         } catch ( error )
         {
            errorNotification( 'Error sending an email to Ralf!' )
            setDisableBtn( false )
         }

      } else
      {
         warningNotification( 'You have to fill in all the fields!' )
         setDisableBtn( false )
      }

   };

   const handleChange = useCallback( ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) =>
   {
      const { name, value } = e.target;
      setFormData( { ...formData, [name]: value } );
   }, [formData] )

   return (
      <>
         <div className="flex flex-col justify-center items-center p-3 gap-2" >
            <motion.div className="flex p-2 gap-2 w-full max-md:flex-col" variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={viewportVariant}>
               <div className="flex items-center justify-center flex-[5]">
                  <Image src={require( '@/assets/Icons/3d.png' ).default} alt='illustration' width={200} height={200} />
               </div>
               <form
                  className="flex flex-col p-2 gap-1 flex-[6]"
                  onSubmit={handleSubmit}
               >
                  <Input placeholder="Your Full Name" className={`${quicksand.className} font-medium`} name='from_name' value={formData.from_name} onChange={handleChange} />
                  <Input placeholder="Your Email Address" className={`${quicksand.className} font-medium`} name='from_email' value={formData.from_email} onChange={handleChange} />
                  <TextArea rows={3} placeholder="Your Message" maxLength={500} className={`${quicksand.className} font-medium`} name='message' value={formData.message} onChange={handleChange} />
                  <Button shape="round" icon={<SendOutlined className={`${quicksand.className} relative bottom-[2px]`} />} disabled={isDisableBtn} htmlType="submit">
                     {isDisableBtn ? 'Sending Message...' : 'Send Message'}
                  </Button>
               </form>
            </motion.div>
            <motion.small className='text-center text-dark-blue-secondary' variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={viewportVariant}>Your potential best hire awaits!</motion.small>
         </div>
         <ToastContainer position='bottom-right' />
      </>
   )
}

export default ContactForm