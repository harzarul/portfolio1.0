import styles from "../../styles";
import {motion} from 'framer-motion';
import { AboutCard1, AboutCard2 } from "../../components";
import { dropDown } from "../../utils/motion";
import { Psy, Perma, Trader } from "../../constants/images";

const AboutMe = () => {
  return (
    <section className={`${styles.paddings} ${styles.flexStart} flex-col overlay2`}
      id='aboutme'>
      <motion.h1 className={`${styles.heading} text-secondary mt-[2rem] mb-[2rem]`}
        variants={dropDown}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 0.25}}>
        About Me
      </motion.h1>
      <AboutCard1 exp='2012 - Current' title='Psychologist' imgUrl={Psy}/>
      <AboutCard2 exp='2018 - Current' title='Trader' imgUrl={Trader}/>
      <AboutCard1 exp='2015 - 2019' title='Permaculturist' imgUrl={Perma}/>
    </section>
  )
}

export default AboutMe