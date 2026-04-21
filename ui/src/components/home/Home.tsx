// import {useReveal} from '../../hooks/useReveal';
import FeaturedProjects from './FeaturedProjects';
import Contact from './Contact';
import { homePageData } from '../../data/portfolioData';
import WaveBackground from './WaveBackground';
import whale_music from '@/assets/png/whale_music2.png';
import sand from '@/assets/png/sand.png';

const Home = () => {
  /* Try this again later
  const leftRef = useReveal("left");
  const rightRef = useReveal("right");
  className={`headline-desc-area reveal-from-left`}
  className='reveal-from-right'
  ref={leftRef}
  ref={rightRef}
  */

  return (
    <div>
      <title>Kay Rubio Software Engineering and Bioacoustics Portfolio</title>
      <meta name="description" content="Software engineering portfolio showing projects in bioacoustics, machine learning, and web development. Includes live demos and GitHub links." />
      <h1>Digital Portfolio</h1>
      <FeaturedProjects />
      <WaveBackground />
      <div className='about'>
        <h2>About me</h2>
        <div className='about-centered-row'>
          <div className='centered-row'>
            <h1 className='sr-only'>Home</h1>
            <div className={`headline-desc-area`}>
              <p className='headline'>{homePageData.headline}</p>
              <p className='desc'>{homePageData.desc}</p>
            </div>
            <div>
              <img className='avatar' src={whale_music} alt='A whale swimming upwards with a wave of musical notes coming from it' />
            </div>
          </div>
          <p className='long-desc'>{homePageData.long_desc}</p>
        </div>
      </div>
      <div
        className={`repeat-horiz-background repeat-horiz-background-sand`}
        style={{ backgroundImage: `url(${sand})` }}
      ></div>
      <Contact />
    </div>
  )
}

export default Home;
