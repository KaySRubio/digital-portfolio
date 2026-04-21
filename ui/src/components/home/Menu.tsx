import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { topics, projectPaths } from '../../data/portfolioData';
import hamburger from '@/assets/svg/hamburger.svg?react';
import Breadcrumbs from './Breadcrumbs';
import WaveBackground from './WaveBackground';

const Menu = () => {
  const Hamburger = hamburger;
  const [menuOpen, setMenuOpen]= useState(false);

  const location = useLocation();
  // use white menu on home page and topic pages, blue menu on project details pages
  const useWhiteMenu = () => {
    const crumbs = location.pathname
    if(projectPaths.some(path => crumbs.includes(path))) {
      return false;
    } else {
      return true;
    }
  }

  const isHomePage = () => {
    const crumbs = location.pathname;
    if(crumbs === '/') return true;
    else return false;
  }

  // Check which color scheme to use based on page
  let backgroundColor;
  let color;
  if(useWhiteMenu()) {
    backgroundColor = 'white-background';
    color = 'dark-blue';
  } else {
    backgroundColor = 'dark-blue-background';
    color = 'white';
  }

  const onClick = () => {
    console.log('onclick ran')
    setMenuOpen(prev => !prev);
  }
  
  return (
    <div>
    <nav className={`large-menu ${backgroundColor}`} aria-label='Main'>
      <div>
        <Link className={`large-menu-home-button ${color}`} to={''}>Kay Rubio</Link>
        <Breadcrumbs className={color} />
      </div>
      <div className='large-menu-project-button-group'>
        {isHomePage() && <a className='large-menu-button-short'
          href="#about"
          // prevent HashRouter inteference
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({behavior: 'smooth'});
          }}
        >About</a>}
        {isHomePage() && <a className='large-menu-button-short'
          href="#contact"
          // prevent HashRouter inteference
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
          }}
        >Contact</a>}
        {!isHomePage() && <Link to={''} className={`large-menu-button-short`}>Home</Link>}
        {topics.map(topic => {
          return (
            <Link to={topic.path} key={topic.title} className={`large-menu-button ${color}`}>
              
              {topic.title}
            </Link>
          );
        })}
      </div>
      <button className='hamburger-button' onClick={onClick} >
        <Hamburger 
          className={`${color} ${backgroundColor} hamburger-icon`}
        />
      </button>
      { menuOpen &&
        <div className='dropdown-menu'>
          <button onClick={onClick} className={`dropdown-menu-close-button white`}>
            x
          </button>
          <ul className='dropdown-menu-contents'>

          {isHomePage() && <li><a className={`dropdown-menu-button dark-blue`}
            href="#about"
            // prevent HashRouter inteference
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({behavior: 'smooth'});
            }}
          >About</a></li>}
          
          {isHomePage() && <li><a className={`dropdown-menu-button dark-blue`}
            href="#contact"
            // prevent HashRouter inteference
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
            }}
          >Contact</a></li>}
          {!isHomePage() && <li><Link to={''} className={`dropdown-menu-button dark-blue`}>Home</Link></li>}

          {topics.map(topic => {
            return (
              <li key={topic.title}>
                <Link onClick={() => setMenuOpen(false)} to={topic.path} className={`dropdown-menu-button dark-blue`}>
                  {topic.title}
                </Link>
              </li>
            );
          })}
          </ul>
        </div>
      }
    </nav>
    { !useWhiteMenu() && <WaveBackground className='repeat-horiz-background-small upside-down' />}
    </div>
  )
}

export default Menu;
// <Icon className={`large-menu-icon ${color}`} />
//const Icon = topic.iconComponent;
// <Icon className={`dropdown-menu-icon white`} />