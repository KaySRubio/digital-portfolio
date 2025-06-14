import React, { useRef, useState } from 'react';
import type { ReactNode, ReactElement } from 'react';
import { Popover } from 'react-tiny-popover'
import type { JSX } from 'react';

type PopoverWrapperProps = {
  title: string;
  openButton: ReactElement<JSX.IntrinsicElements['button']>;
  body: ReactNode;
};
/* Example use:
  const openButton = (
    <button
      aria-label="Show more information"
    >
      i
    </button>
  )

  const body = (
    <p>Here's some info!.</p>
  )
  const title = 'Info'

  <PopoverWrapper title={title} openButton={openButton} body={body} />
*/

export default function PopoverWrapper({ title, openButton, body }: PopoverWrapperProps) {
  const spanRef=useRef<HTMLSpanElement>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const enhancedOpenButton = React.cloneElement(openButton, {
    onClick: 
      () => setPopoverOpen((prev) => !prev)
  });

  const content = (
    <div className='popover'>
      <div className='popover-header'>
        {title}
        <button onClick={() => setPopoverOpen(false)} className='popover-close-button'>
          X
        </button>
      </div>
      <div className='popover-body'>
        {body}
      </div>
    </div>
  )

  return (
    <span ref={spanRef}>
      <Popover
        isOpen={popoverOpen}
        parentElement={spanRef.current ?? undefined}
        positions={['bottom', 'left', 'right']}
        padding={10}
        reposition={true}
        onClickOutside={() => setPopoverOpen(false)}
        content={content}
        align='start'
      >
        {enhancedOpenButton}
      </Popover>
    </span>
  );
}
