import React, {useState} from 'react';
import {motion} from 'framer-motion';
import styles from '../../styles';
import { projectsData } from '../../constants';
import { ProjectCard } from '../../components';


const Projects = () => {
  const [active, setActive] = useState('restaurant')

  return (
    <section className={`projects__background bg-fixed overlay`} id='projects'>
      <div className={`overlay ${styles.paddings} ${styles.flexStart} flex-col `}>
        <h1 className={`${styles.heading}`}>
          Projects
        </h1>
        <div className='mt-[2rem] flex lg:flex-row flex-col min-h-[70vh] w-[100%] gap-5'>
          {projectsData.map((data, index) => (
            <ProjectCard
              key={data.id}
              {...data}
              index={index}
              active={active}
              handleClick={setActive}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects