import styles from "../../styles";
import {motion} from 'framer-motion';
import { AboutCard1, AboutCard2 } from "../../components";
import { dropDown } from "../../utils/motion";
import { aboutData } from "../../constants";

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

      {aboutData.map((data,index) => (
        (index % 2 == 0 ? <AboutCard1 {...data} key={index} /> : <AboutCard2 {...data} key={index}/>)
      ))}
    </section>
  )
}

export default AboutMe