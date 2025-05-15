import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import { topics, base_path, projectPaths } from './data/portfolioData';
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
    setMenuOpen(prev => !prev);
  }
  
  return (
    <div>
    <nav className={`large-menu ${backgroundColor}`}>
      <div>
        <Link className={`large-menu-home-button ${color}`} to={base_path}>Kay Rubio</Link>
        <Breadcrumbs className={color} />
      </div>

      <div className='large-menu-project-button-group'>
        {topics.map(topic => {
          const Icon = topic.iconComponent;
          return (
            <Link to={`${base_path}${topic.path}`} key={topic.title} className={`large-menu-button ${color}`}>
              <Icon className={`large-menu-icon ${color}`} />
              {topic.title}
            </Link>
          );
        })}
      </div>
      <button className='hamburger-button'>
        <Hamburger 
          className={`${color} ${backgroundColor} hamburger-icon`}
          onClick={onClick}
          onKeyDown={onClick}
        />
      </button>
      { menuOpen &&
        <div className='dropdown-menu'>
          <button onClick={onClick} className={`dropdown-menu-close-button white`}>
            x
          </button>
          <ul className='dropdown-menu-contents'>
            {topics.map(topic => {
            const Icon = topic.iconComponent;
            return (
              <li key={topic.title}>
                <Link to={`${base_path}${topic.path}`} className={`dropdown-menu-button dark-blue`}>
                  <Icon className={`dropdown-menu-icon white`} />
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
