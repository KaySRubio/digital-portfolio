
// import type { ProjectTechStackComponent } from '../types/portfolioTypes';
import { techStackData } from '../data/portfolioData';

type TechStackProps = {
  techList: string[],
  className?: string;
}

export default function TechStack({techList, className}: TechStackProps) {
  // Filter the techStackData, which includes all possible tech stack items and icons,
  // to just those for this project
  const filteredTechStackData = techStackData.filter(item =>
    techList.includes(item.type)
  );

  // Check for any in the project list that don't exist in the data
  const techStackTypes = techStackData.map(item => item.type);
  techList.forEach(type => {
    if(!techStackTypes.includes(type)) {
      console.log('Error: ', type, ' is not in the techStackData so this item will not be rendered');
    }
  })

  // TODO simplify this, the project-card is already a Link so it can't hold <a>
  let returnComponent;
  if(className==='project-card-tech-stack-row') {
    returnComponent = (
      <div className={`${className} tech-stack-row`}>
      {filteredTechStackData.map((tech, index) => {
        const Icon = tech.iconComponent;
        return (
          <div key={index}>
            <Icon />
          </div>
      )})}
    </div>
    )
  } else {
    returnComponent = (
      <div className={`${className} tech-stack-row`}>
      {filteredTechStackData.map((tech, index) => {
        const Icon = tech.iconComponent;
        return (
          <a href={tech.href} key={index}>
            {/*<p>{tech.name}</p>*/}
            <Icon />
          </a>
      )})}
    </div>
    )
  }
  return returnComponent;
}