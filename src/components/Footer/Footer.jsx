
import {motion} from 'framer-motion';
import styles from '../../styles';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { TypingText } from "../CustomText/CustomText";
import { staggerContainer } from '../../utils/motion';
import {FaCopyright} from 'react-icons/fa';


const Footer = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <footer className={`footer__overlay bg-fixed flex flex-col justify-between items-center`} id='contact'>
      <div className={`overlay w-[100%] lg:justify-start ${styles.flexCenter}`}>
        <h1 className={`flex flex-row lg:text-[3rem] text-[1.5rem] text-secondary my-1 ml-[2rem] border-b-[1px]`}>
          Contact Me
        </h1>
      </div>
      <motion.div className='w-[100%] overlay flex lg:flex-row flex-col justify-between lg:items-start items-center'
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount: 0.25}}>
        <form className={`flex flex-col items-start justify-center ${styles.xPaddings} py-2 w-[80%]`}
          ref={form}
          onSubmit={sendEmail}>
          <div className='mb-3 w-[100%] flex flex-col justify-start items-start'>
            <label className={`${styles.text} text-secondary font-bold`}>
              <TypingText title={'Name'} textStyles={'text-start'}/>
            </label>
            <input className='h-[2rem] ss:w-[80%] w-[80%] max-w-[20rem] rounded-lg px-2'
              type="text"
              name="user_name" />
          </div>
          <div className='mb-3 w-[100%] flex flex-col justify-start items-start'>
            <label className={`${styles.text} text-secondary font-bold`}>
              <TypingText title={'Email'} textStyles={'text-start'}/>
            </label>
            <input className='h-[2rem] ss:w-[80%] w-[80%] max-w-[20rem] rounded-lg px-2'
              type="email"
              name="user_email" />
          </div>
          <div className='mb-3 w-[100%] flex flex-col justify-start items-start'>
            <label className={`${styles.text} text-secondary font-bold`}>
              <TypingText title={'Message'} textStyles={'text-start'}/>
            </label>
            <textarea className='h-[7rem] w-[70%] rounded-lg max-w-[25rem] p-2'
              name="message" />
          </div>
          <input className='bg-green px-[2rem] py-[.2rem] cursor-pointer rounded-md text-[1.3rem] mb-5'
            type="submit"
            value="Send" />
        </form>
      </motion.div>
      <div className={`bg-primary w-[100%] ${styles.flexCenter}`}>
        <h1 className='flex flex-row lg:text-[1.2rem] text-[1rem] text-secondary mt-1'>
          <FaCopyright className='text-[1rem]'/> Harzarul since 2022
        </h1>
      </div>
    </footer>
  )
}

export default Footer