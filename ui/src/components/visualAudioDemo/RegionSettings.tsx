import { useEffect } from 'react';
import { useDemoContext } from "../../context/DemoContext";
import MoreInformation from './MoreInformation';
import { Toggle } from './Toggle';
import type { RegionSetup } from '../../types/portfolioTypes';

type Props = {
  data: RegionSetup[],
  setRegionHelp: React.Dispatch<React.SetStateAction<HelpInfo[]>>
}

type HelpInfo = {
  show: boolean,
  text: string
}

export default function RegionSettings({data, setRegionHelp}: Props) {
  const {
    showRegionGroups,
    setShowRegionGroups,
    resultFromBackend,
  } = useDemoContext();

  const regionGroups = data;

  // Set up toggles for groups of regions and regionHelp
  useEffect(() => {
    const helpInfoGroup: HelpInfo[] = []
    regionGroups.forEach((regionGroup, i) => {

      // Set up default setting, if toggle starts on or off
      let toggleShouldStartOn = false;
      if (regionGroup.default === 'on' || regionGroup.default === 'userToggleStartOn') {
        toggleShouldStartOn = true;
      }
      setShowRegionGroups(prev => {
        const updated = [...prev];
        updated[i] = toggleShouldStartOn;
        return updated;
      }) 
      
      const helpInfo = {
        show: false,
        text: regionGroup.moreInfo ? regionGroup.moreInfo : ''
      }
      helpInfoGroup.push(helpInfo);
      
    }) 
    setRegionHelp(helpInfoGroup);
  }, [data])

  return (
    <>
      {
        regionGroups.map((toggle, i) => (
          <div className="toggle-option" key={`toggle-region-${i}`}>
            <label htmlFor={`toggle-${i}`}>{toggle.displayText}</label>
            <div className="toggle-and-button">
              <Toggle
                id={`toggle-${i}`}
                checked={resultFromBackend && showRegionGroups[i]}
                onChange={() => {
                  setShowRegionGroups(prev => {
                    const updated = [...prev];
                    updated[i] = !prev[i];
                    return updated;
                  })
                }}
                disabled={!resultFromBackend}
              />
              {toggle.moreInfo && (
                <MoreInformation 
                  onClick={() => {
                    setRegionHelp((prev) => {
                      const updated = [...prev];
                      updated[i] = {
                        ...updated[i],
                        show: !updated[i].show,
                      };
                      return updated;
                      })
                  }}
                  label={`Show more information about ${toggle.displayText}`}
                />
              )}
            </div>
          </div>
        ))
      }
    </>
  )
}
