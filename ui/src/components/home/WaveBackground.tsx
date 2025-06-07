

import long_wave from '@/assets/png/long_wave.png';

type WaveBackgroundProps = {
  className?: string;
}

const WaveBackground = ({className = 'repeat-horiz-background-large'}: WaveBackgroundProps) => {
  return (
    <div
      className={`repeat-horiz-background repeat-horiz-background-wave ${className}`}
      style={{ backgroundImage: `url(${long_wave})` }}
    ></div>
  )
}

export default WaveBackground;
