import { useState } from 'react';
import downloadIcon from '@/assets/svg/download.svg';

type DownloadButtonProps = {
  userInputUrl: string;
  enabled: boolean;
  label?: string;
};

export default function DownloadButton({ userInputUrl, enabled, label = 'Download'
 }: DownloadButtonProps) {
  const [download] = useState('');
  return (
    <a
      download={download}
      href={userInputUrl}
      className={`download-button ${enabled ? 'enabled' : 'disabled'}`}
      aria-label={label}
    >
      <img className='input-icon' alt='' src={downloadIcon} />
    </a>
  );
}
