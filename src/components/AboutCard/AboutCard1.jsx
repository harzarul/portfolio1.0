
import styles from "../../styles";
import {staggerContainer} from '../../utils/motion';
import {motion} from 'framer-motion';
import { TypingText } from "../CustomText/CustomText";

const AboutCard1 = ({title, years, imgUrl, summary}) => {
  
  return (
    <div className={`flex lg:flex-row flex-col lg:justify-between justify-center lg:items-start items-center ${styles.paddings} card__background w-full my-[2rem] max-w-[1700px]`}>
      <img className="w-[18rem] h-[18rem] rounded-[50%]"
        src={imgUrl}
        alt="psychologist"/>

      <motion.div className="lg:w-[50%] w-[100%] flex flex-col justify-start lg:items-end items-center lg:my-0 my-2"
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 0.25}}>
        <p className={`mb-3 ${styles.text} text-secondary font-bold`}>
          <TypingText title={`${title} exp: ${years}`} textStyles='text-center font-bold'/>
        </p>
        <p className="lg:text-[1.3rem] text-[1.1rem] text-secondary">
          {summary}
        </p>
      </motion.div>
    </div>
  )
}

export default AboutCard1