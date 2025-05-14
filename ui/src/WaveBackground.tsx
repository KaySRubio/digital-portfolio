

import long_wave from '@/assets/png/long_wave.png';
import './App.css'

const WaveBackground = () => {
  return (
    <div
      className={`repeat-horiz-background repeat-horiz-background-wave`}
      style={{ backgroundImage: `url(${long_wave})` }}
    ></div>
  )
}

export default WaveBackground;
