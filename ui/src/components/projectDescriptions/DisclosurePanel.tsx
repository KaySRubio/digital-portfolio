import { useState } from 'react';
import type { ReactNode } from 'react';
import DownArrow  from '@/assets/svg/down-arrow.svg?react';

type DisclosurePanelProps = {
  title? : string;
  titleEl?: string;
  children: ReactNode;
  index: number | null;
  className?: string;
  expandedByDefault?: boolean;
}

export default function DisclosurePanel({
  title,
  titleEl,
  children,
  index,
  className='disclosure-panel',
  expandedByDefault=false,
}: DisclosurePanelProps) {
  const [expanded, setExpanded] = useState(expandedByDefault);

  const renderTitle = () => {
    if (!titleEl) {
      return title;
    } else if (titleEl === 'h1') {
      return (<h1>{title}</h1>)
    } else if (titleEl === 'h2') {
      return (<h2>{title}</h2>)
    } else if (titleEl === 'h3') {
      return (<h3>{title}</h3>)
    } else if (titleEl === 'h4') {
      return (<h4>{title}</h4>)
    }
  }
  
  return (
    <div className={className}>
      <div>
        <button
          className='disclosure-panel-button'
          aria-expanded={expanded}
          aria-controls={`target_${index}`}
          onClick={() => {
            setExpanded(prev => !prev);
          }}
        >
          <DownArrow className={`arrow ${expanded ? 'upside-down' : ''}`} />
          { renderTitle() }
        </button>
      </div>
      {expanded && (
        <div id={`target_${index}`} className='disclosure-panel-body'>
          {children}
        </div>
      )}
    </div>
  )
}
