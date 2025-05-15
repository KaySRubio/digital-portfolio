import type { ReactNode } from 'react';
import type { TechStackComponent } from '../types/portfolioTypes';
import { techStackData } from '../data/portfolioData';

type TechStackProps = {
  data: TechStackComponent,
  index: number | null,
}

export default function TechStack({data, index}: TechStackProps) {
  console.log('data: ', data);

  // From the list of project tech stack, retrieve the data that includes the name
  // and icon
  /*
  const filteredTechStackData = Object.fromEntries(
    Object.entries(techStackData).filter(([key]) => data.techList.includes(key))
  );
  */

  return (<div></div>)
  /*
  return (
    <div key={index} className='project-details-tech-stack'>
      {Object.entries(filteredTechStackData).map((tech, index) => {
      console.log('tech: ', tech);
      // const Icon = tech.iconComponent;

      return (
        <div key={index}>
          <p>{tech.name}</p>
          <Icon />
        </div>
      )})}
      
    </div>
  ) */
}