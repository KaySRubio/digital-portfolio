import { useLocation } from 'react-router-dom';
import { base_path } from './data/portfolioData';
import document from '@/assets/svg/document.svg?react';
import linkedin from '@/assets/svg/linkedin.svg?react';
import github from '@/assets/svg/github.svg?react';
import './App.css'
import WaveBackground from './WaveBackground';

const Footer = () => {
  
  const location = useLocation();
  const isHomePage = () => {
    if(location.pathname === base_path) {
      return true 
    } else {
      return false;
    } 
  }

  // Check which color scheme to use based on page
  let footerClass;
  let iconClass;
  if(isHomePage()) {
    footerClass = 'sand-background';
    iconClass = 'dark-blue';
  } else {
    footerClass = 'dark-blue-background';
    iconClass = 'white';
  }

  const pathToResume = `${base_path}resume.pdf`;
  const DocumentIcon = document;
  const LinkedInIcon = linkedin;
  const GithubIcon = github;

  return (
    <div>
    {!isHomePage() && <WaveBackground />}
    <footer className={`footer ${footerClass}`}>
      <p>&copy; 2025 Kay Rubio</p>
      <div className={`footer-button-group`}>
        <a href={pathToResume} download='resume.pdf'>
        <DocumentIcon className={`footer-icon ${iconClass}`} />
        </a>
        <a href='https://www.linkedin.com/in/kay-sweeney-rubio-731abb114/'>
          <LinkedInIcon className={`footer-icon ${iconClass}`} />
        </a>
        <a href='https://github.com/KaySRubio'>
          <GithubIcon className={`footer-icon ${iconClass}`} />
        </a>
      </div>
    </footer>
    </div>
  )
}

export default Footer;
