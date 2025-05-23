import GithubIcon from '@/assets/svg/github.svg?react';
import type { ReactNode } from 'react';
import './projectDetails.css'

type GoalAndGithubProps = {
  children: ReactNode;
  className?: string;
  href: string;
}

export default function GoalAndGithub({children, className = '', href}: GoalAndGithubProps) {

  return (
    <div className={`align-row ${className}`}>
      <div className='project-details-left-column'>
        {children}
      </div>
      <a className={`align-column center`} href={href}>
        <GithubIcon className='width90px' />
        View code on GitHub
      </a>
      
    </div>
  );
}