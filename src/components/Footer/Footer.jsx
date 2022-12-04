
import {motion} from 'framer-motion';
import styles from '../../styles';
import { FooterImg } from '../../constants/images';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2vxllqq', 'template_k6d9zjl', form.current, 'zy062JBqLtv57Qo-5')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <footer className={`footer__overlay bg-fixed flex lg:flex-row flex-col justify-between items-center ${styles.paddings}`}>
      <div className='w-[100%] max-w-[1200px]'>
        <form className='flex flex-col items-start justify-center'
          ref={form}
          onSubmit={sendEmail}>
          <div className='mb-3 ss:w-[60%] w-[100%] flex flex-col justify-start items-start'>
            <label className={`${styles.text} text-primary font-bold`}>
              Name
            </label>
            <input className='h-[2rem] ss:w-[50%] w-[80%] rounded-lg'
              type="text"
              name="user_name" />
          </div>
          <div className='mb-3 ss:w-[60%] w-[100%] flex flex-col justify-start items-start'>
            <label className={`${styles.text} text-primary font-bold`}>
              Email
            </label>
            <input className='h-[2rem] ss:w-[50%] w-[80%] rounded-lg'
              type="email"
              name="user_email" />
          </div>
          <div className='mb-3 ss:w-[60%] w-[100%] flex flex-col justify-start items-start'>
            <label className={`${styles.text} text-primary font-bold`}>
              Message
            </label>
            <textarea className='h-[7rem] w-[70%] rounded-lg'
              name="message" />
          </div>
          <input className='bg-green px-[2rem] py-[.2rem] cursor-pointer rounded-md text-[1.3rem]'
            type="submit"
            value="Send" />
        </form>
      </div>
    </footer>
  )
}

export default Footer