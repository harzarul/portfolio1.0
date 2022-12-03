
import {Hero, AboutMe, Projects, Faq} from './containers';

const App = () => {
  return (
    <div className='bg-secondary w-full overflow-hidden'>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Faq/>
    </div>
  )
}

export default App