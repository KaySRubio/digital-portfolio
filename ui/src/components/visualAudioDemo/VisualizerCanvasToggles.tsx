import { useState, useEffect } from 'react';
import { useDemoContext } from "../../context/DemoContext";
import MoreInformation from './MoreInformation';
import { Toggle } from './Toggle';

type Props = {
  setHelp: React.Dispatch<React.SetStateAction<HelpInfo[]>>,
  type: 'waveform' | 'spectrogram',
}

type ToggleSetup = {
  displayText: string,
  onToggle: () => void
  moreInformation: boolean,
  onMoreInformationClick: () => void;
}

type HelpInfo = {
  show: boolean,
  text: string
}

export default function VisualizerCanvasToggles({setHelp, type}: Props) {
  const {
    waveformOverlays,
    spectrogramOverlays,
    showWaveformLineOverlays,
    setShowWaveformLineOverlays,
    showSpectrogramLineOverlays,
    setShowSpectrogramLineOverlays,
    resultFromBackend,
  } = useDemoContext();

  const [toggles, setToggles] = useState<ToggleSetup[]>([]);
  const overlays = type === 'waveform' ? waveformOverlays : spectrogramOverlays;

  // Set up toggles for drawing lines on the waveform or spectrogram
    useEffect(() => {
      const newToggles: ToggleSetup[] = [];
      const helpInfoGroup: HelpInfo[] = [];
      
      overlays.forEach((overlay, i) => {
        const newToggle = {
          displayText: overlay.displayText,
          moreInformation: overlay.moreInfo ? true : false,
          onToggle: () => {
            if(type === 'waveform') {
              setShowWaveformLineOverlays(prev => {
                const updated = [...prev];
                updated[i] = !prev[i];
                return updated;
              })
            } else {
              setShowSpectrogramLineOverlays(prev => {
                const updated = [...prev];
                updated[i] = !prev[i];
                return updated;
              })
            }
          },
          onMoreInformationClick: () => {
            setHelp((prev) => {
              const updated = [...prev];
              updated[i] = {
                ...updated[i],
                show: !updated[i].show,
              };
              return updated;
            })
          }
        }
          
        newToggles.push(newToggle);
  
        const helpInfo = {
          show: false,
          text: overlay.moreInfo ? overlay.moreInfo : ''
        }
        helpInfoGroup.push(helpInfo);
      })
      setToggles(newToggles);
      setHelp(helpInfoGroup);
    }, [overlays])

  return (
    <>
      {toggles.map((toggle, i) => (
          <div className="toggle-option" key={`toggle-option-${i}`}>
            <label htmlFor={`toggle-${i}`}>{toggle.displayText}</label>
            <div className="toggle-and-button">
              <Toggle
                id={`toggle-${i}`}
                checked={
                  resultFromBackend && 
                  (type === 'waveform' ? showWaveformLineOverlays[i] : showSpectrogramLineOverlays[i])
                }
                onChange={toggle.onToggle}
                disabled={!resultFromBackend}
              />
              {toggle.moreInformation && (
                <MoreInformation onClick={toggle.onMoreInformationClick} />
              )}
            </div>
          </div>
        ))}
    </>
  )
}
