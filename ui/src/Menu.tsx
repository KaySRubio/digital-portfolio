import { Link } from 'react-router-dom';
import './App.css'
import { projectList } from './data/portfolioData';

const Menu = () => {
  return (
    <nav>
      {projectList.map(projectGroup => (
        <Link to={projectGroup.path}>{projectGroup.title}</Link>
      ))}
    </nav>
  )
}

export default Menu;