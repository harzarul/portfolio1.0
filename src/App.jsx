
import {Hero, AboutMe, Projects, Faq} from './containers';
import {Footer} from './components';

const App = () => {
  return (
    <div className='bg-secondary w-full overflow-hidden'>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App