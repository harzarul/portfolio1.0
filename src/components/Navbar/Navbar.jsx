import { useState } from 'react';
import { navLinks } from '../../constants';
import {Menu, Close, Logo} from '../../constants/images';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex justify-between items-center p-6'>
      <img  className='w-[135px] h-[60px]'
        src={Logo}
        alt="logo"/>

      <ul className='lg:flex hidden flex-1 justify-end items-center'>
        {navLinks.map((nav,index) => (
          <li className={`font-poppins font-normal text-[2rem] cursor-pointer ${active === nav.id ? 'text-gold' : 'text-secondary'} ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'}`}
            key={nav.id}
            onClick={() => setActive(nav.id)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='lg:hidden flex flex-1 justify-end items-center'>
          <img className='w-[28px] h-[28px] object-contain'
            src={toggle ? Close : Menu}
            alt="icon" 
            onClick={() => setToggle(!toggle)}/>
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 mx-4 my-2 min-w-[140px] rounded-xl absolute top-20 right-0`}>
            <ul className='flex flex-col flex-1 justify-end items-start'>
              {navLinks.map((nav,index) => (
                <li className={`font-poppins font-normal text-[2rem] cursor-pointer ${active === nav.id ? 'text-gold' : 'text-secondary'} ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'}`}
                  key={nav.id}
                  onClick={() => (setActive(nav.id), setToggle(!toggle))}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar