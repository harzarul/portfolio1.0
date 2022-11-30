import styles from '../../styles';
import {motion} from 'framer-motion';

const Navbar = () => {
  return (
    <nav className='w-full flex justify-between items-center p-6'>
      <h1 className={`${styles.heading}`}>
        Tapir
      </h1>

      <ul className='lg:flex hidden flex-1 '>

      </ul>
    </nav>
  )
}

export default Navbar