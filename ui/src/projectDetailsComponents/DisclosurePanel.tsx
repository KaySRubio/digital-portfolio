import { useState } from 'react';
import type { ReactNode } from 'react';
import DownArrow  from '@/assets/svg/down-arrow.svg?react';

type DisclosurePanelProps = {
  title: ReactNode;
  children: ReactNode;
  index: number | null;
}

export default function DisclosurePanel({title, children, index}: DisclosurePanelProps) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className='disclosure-panel'>
      <dt>
        <button
          className='disclosure-panel-button'
          aria-expanded={expanded}
          aria-controls={`target_${index}`}
          onClick={() => {
            setExpanded(prev => !prev);
          }}
        >
          {title}
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
