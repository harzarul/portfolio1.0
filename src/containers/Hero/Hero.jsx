import {Navbar} from '../../components';
import styles from '../../styles';
import {motion} from 'framer-motion';
import { TypingText} from '../../components';
import {staggerContainer } from '../../utils/motion';

const Hero = () => {
  return (
    <div className='hero__background' id='home'>
      <div className='overlay'>
        <Navbar/>
        <motion.div className={`lg:h-[90vh] h-[50vh] flex flex-col justify-center lg:items-center items-start ${styles.xPaddings}`}
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{once: false, amount: 0.25}}>
          <h1 className={`${styles.heading}`}>
            Build to Adapt
          </h1>
          <div className='mt-4'>
            <TypingText title='psychologist - trader - permaculturist' textStyles='text-center'/>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero