import { Link } from 'react-router-dom';
import './App.css'
import { projectList, base_path } from './data/portfolioData';

const Menu = () => {

  
  return (
    <nav className='largeMenu'>
      <Link className='largeMenuHomeButton' to='/'>Kay Rubio</Link>
      <div className='largeMenuProjectButtonGroup'>
        {projectList.map(projectGroup => (
          <Link to={`${base_path}${projectGroup.path}`} key={projectGroup.title} className="largeMenuButton">
            <img className='largeMenuIcon' src={projectGroup.icon} alt='' />
            {projectGroup.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Menu;