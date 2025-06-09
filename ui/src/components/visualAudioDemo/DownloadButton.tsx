import { useState } from 'react';
import downloadIcon from '@/assets/svg/download.svg';

type DownloadButtonProps = {
  userInputUrl: string;
  enabled: boolean;
};

export default function DownloadButton({ userInputUrl, enabled }: DownloadButtonProps) {
  const [download] = useState('');
  return (
    <a
      download={download}
      href={userInputUrl}
      className={`download-button ${enabled ? 'enabled' : 'disabled'}`}
      aria-label="Download audio"
    >
      <img className='input-icon' alt='' src={downloadIcon} />
    </a>
  );
}
