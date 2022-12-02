
import {Hero, AboutMe, Projects} from './containers';

const App = () => {
  return (
    <div className='bg-secondary w-full overflow-hidden'>
      <Hero/>
      <AboutMe/>
      <Projects/>
    </div>
  )
}

export default App