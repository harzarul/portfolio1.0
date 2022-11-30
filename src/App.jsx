
import styles from './styles';
import {motion} from 'framer-motion';
import {dropDown, zoomIn} from './utils/motion';
import {Hero, AboutMe, Projects} from './containers';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <Hero/>
      <AboutMe/>
      <Projects/>
    </div>
  )
}

export default App