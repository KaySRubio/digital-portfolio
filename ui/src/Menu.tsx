import { Link } from 'react-router-dom';
import './App.css'
import { projectList } from './data/portfolioData';

const Menu = () => {

  
  return (
    <nav className='largeMenu'>
      <Link className='largeMenuHomeButton' to='/'>Kay Rubio</Link>
      <div className='largeMenuProjectButtonGroup'>
        {projectList.map(projectGroup => (
          <Link to={projectGroup.path} key={projectGroup.title} className="largeMenuButton">
            <img className='largeMenuIcon' src={projectGroup.icon} alt='' />
            {projectGroup.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Menu;