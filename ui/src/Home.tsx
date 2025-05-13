
import FeaturedProjects from './FeaturedProjects';
import Contact from './Contact';
import avatar from '@/assets/svg/avatar.svg';
import long_wave from '@/assets/svg/long_wave.png'
import './App.css'
import { homePageData } from './data/portfolioData';

const Home = () => {

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
      <FeaturedProjects />
      <Contact />
    </div>
    
  )
}

export default Home;
