import { useState } from 'react';
// import { ICONS } from '../icons';
import '../projectDetails.css'
import downloadIcon from '@/assets/svg/download.svg';

type DownloadButtonProps = {
  recordedUrl: string;
  enabled: boolean;
};

export default function DownloadButton({ recordedUrl, enabled }: DownloadButtonProps) {
  const [download] = useState('');
  return (
    <a
      download={download}
      href={recordedUrl}
      className={`download-button ${enabled ? 'enabled' : 'disabled'}`}
      aria-label="Download audio"
    >
      <img className='input-icon' alt='' src={downloadIcon} />
    </a>
  );
}
