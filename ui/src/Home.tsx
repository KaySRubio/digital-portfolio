import ProjectCard from './ProjectCard'
import avatar from '@/assets/svg/avatar.svg';
import long_wave from '@/assets/svg/long_wave.png'
import './App.css'
import { homePageData, projects } from './data/portfolioData';

const Home = () => {

  // find only the featured projects from the projectList
  const featured_projects = projects
  .filter(project => project.featured); // filter only featured


  return (
    <div>
      <div className='about'>
        <div className='centered-row'>
          <h1 className='sr-only'>Home</h1>
          <h2 className='sr-only'>About</h2>
          <img className='avatar' src={avatar} alt='Cartoon of woman with brown hair, glasses, smiling while wearing a suit' />
          <div className='headline-desc-area'>
            <p className='headline'>{homePageData.headline}</p>
            <p className='desc'>{homePageData.desc}</p>
          </div>
        </div>
        <p className='long-desc'>{homePageData.long_desc}</p>
      </div>
      <div
        className="wave-background"
        style={{ backgroundImage: `url(${long_wave})` }}
      ></div>
      <div className="featured-projects-section">
        <h2>Featured Projects</h2>
        <div className='centered-row'>
          {featured_projects.map(project => ( <ProjectCard key={project.path} project={project} />))}
        </div>
        <p>See more projects</p>
        <div className='centered-row'>
          <p> buttons here </p>
        </div>
      </div>
    </div>
    
  )
}

export default Home;
