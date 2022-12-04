import React, {useState} from 'react'
import styles from '../../styles';
import { faqData } from '../../constants';
import {AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

const Faq = () => {
  const [active, setActive] = useState(false);

  const toggle = (index) => {
    if (index === active){
      setActive(null);
    }
    
    return setActive(index);
}

  return (
    <div className={`${styles.paddings} ${styles.flexCenter} flex-col overlay2`}>
      <h1 className={`${styles.heading} mb-[6rem]`}>
        Faq
      </h1>
      
      {faqData.map((data, index) => (
        <div className='flex flex-col items-start w-[100%] max-w-[1200px]'
          key={index}
          onClick={() => toggle(index)}>
          <div className='w-[100%] flex justify-between'>
            <p className={`${styles.text} text-gold font-bold mb-2`}>
              {data.question}
            </p>
            {active === index ? <AiOutlineMinusCircle className='text-red lg:text-[2rem] text-[1.6rem]'/> : <AiOutlinePlusCircle className='text-green lg:text-[2rem] text-[1.6rem]'/>}
          </div>
          {active === index ? (
            <div>
              <p className={`${styles.text} my-[2rem]`}>
                {data.answer}
              </p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  )
}

export default Faq