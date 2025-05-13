import './App.css'

type FooterProps = {
  theme?: string;
}

const Footer = ({theme='white'}: FooterProps) => {

  const pathToResume = '/digital-portfolio/resume.pdf';

  return (
    <footer className={`large-menu ${theme}`}>
      <p>&copy; 2025 Kay Rubio</p>
      <div className='large-menu-project-button-group'>
        <a href={pathToResume} download='resume.pdf'>
          Resume
        </a>
        <a href='https://www.linkedin.com/in/kay-rubio-731abb114'>
          LinkedIn
        </a>
        <a href='https://github.com/KaySRubio'>
          Github
        </a>
      </div>
    </footer>
  )
}

export default Footer;
