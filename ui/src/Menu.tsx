import { Link } from 'react-router-dom';
import './App.css'
import { topics, base_path } from './data/portfolioData';

const Menu = () => {

  
  return (
    <nav className='large-menu'>
      <Link className='large-menu-home-button' to={base_path}>Kay Rubio</Link>
      <div className='large-menu-project-button-group'>
      {topics.map(topic => {
        const Icon = topic.icon; // move this outside of JSX
        return (
          <Link to={`${base_path}${topic.path}`} key={topic.title} className={`large-menu-button dark-blue`}>
            <Icon className={`large-menu-icon dark-blue`} />
            {topic.title}
          </Link>
        );
      })}
      </div>
    </nav>
  )
}

export default Menu;
