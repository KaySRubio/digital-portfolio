import avatar from '@/assets/svg/avatar.svg';
import './App.css'
import { homePageData } from './data/portfolioData';

const Home = () => {
  return (
    <div className='about'>
      <div className='centeredRow'>
        <h1 className='sr-only'>Home</h1>
        <img className='avatar' src={avatar} alt='Cartoon of woman with brown hair, glasses, smiling while wearing a suit' />
        <div className='headlineDescArea'>
          <p className='headline'>{homePageData.headline}</p>
          <p className='desc'>{homePageData.desc}</p>
      </div>
      </div>
      <p className='long_desc'>{homePageData.long_desc}</p>
    </div>
    
  )
}

export default Home;