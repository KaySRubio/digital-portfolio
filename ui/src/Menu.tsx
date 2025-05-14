import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import { topics, base_path } from './data/portfolioData';
import hamburger from '@/assets/svg/hamburger.svg?react';

const Menu = () => {
  const Hamburger = hamburger;
  const [menuOpen, setMenuOpen]= useState(false);

  const onClick = () => {
    setMenuOpen(prev => !prev);
  }
  
  return (
    <nav className='large-menu'>
      <Link className='large-menu-home-button' to={base_path}>Kay Rubio</Link>
      <div className='large-menu-project-button-group'>
        {topics.map(topic => {
          const Icon = topic.iconComponent;
          return (
            <Link to={`${base_path}${topic.path}`} key={topic.title} className={`large-menu-button dark-blue-icon`}>
              <Icon className={`large-menu-icon dark-blue-icon`} />
              {topic.title}
            </Link>
          );
        })}
      </div>
      <button className='hamburger-button'>
        <Hamburger 
          className={`dark-blue-icon hamburger-icon`}
          onClick={onClick}
          onKeyDown={onClick}
        />
      </button>
      { menuOpen &&
        <div className='dropdown-menu'>
          <button onClick={onClick} className={`dropdown-menu-close-button white-icon`}>
            x
          </button>
          <ul className='dropdown-menu-contents'>
            {topics.map(topic => {
            const Icon = topic.iconComponent;
            return (
              <li key={topic.title}>
                <Link to={`${base_path}${topic.path}`} className={`dropdown-menu-button dark-blue-icon`}>
                  <Icon className={`dropdown-menu-icon white-icon`} />
                  {topic.title}
                </Link>
              </li>
            );
          })}
          </ul>
        </div>
      }
    </nav>
  )
}

export default Menu;
