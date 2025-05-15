import { useState } from 'react';
import type { ReactNode } from 'react';
import DownArrow  from '@/assets/svg/down-arrow.svg?react';

type DisclosurePanelProps = {
  title?: string;
  //children: ProjectDetailComponent[];
  children: ReactNode;
  index: number | null;
}

export default function DisclosurePanel({title = 'Click to see more information', children, index}: DisclosurePanelProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div key={index} className='disclosure-panel'>
      <dt>
        <button
          className='disclosure-panel-button'
          aria-expanded={expanded}
          aria-controls={`target_${index}`}
          onClick={() => {
            setExpanded(prev => !prev);
          }}
        >
          <span>{title}</span>
          <DownArrow className={`arrow ${expanded ? 'upside-down' : ''}`} />
        </button>
      </dt>
      {expanded && (
        <dd>
          {children}
        </dd>
      )}
  </div>
  )
}
