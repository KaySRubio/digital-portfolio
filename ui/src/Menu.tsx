import { Link } from 'react-router-dom';
import './App.css'
import { topics, base_path } from './data/portfolioData';

const Menu = () => {

  
  return (
    <nav className='large-menu'>
      <Link className='large-menu-home-button' to={base_path}>Kay Rubio</Link>
      <div className='large-menu-project-button-group'>
        {topics.map(topic => (
          <Link to={`${base_path}${topic.path}`} key={topic.title} className="large-menu-button">
            <img className='large-menu-icon' src={topic.icon} alt='' />
            {topic.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Menu;