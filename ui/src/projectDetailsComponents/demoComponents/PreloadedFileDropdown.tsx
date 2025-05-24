import React from 'react';
// import styles from '../speechSandbox.module.css';
// import { categoricalDropdownDataType, preloadedAudioFileData } from '../types/type';
import type { sampleFile } from '../../types/portfolioTypes';

type PreloadedFileDropdownProps = {
  // options: string[] | sampleFile[];
  // options: string[];
  options: sampleFile[];
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultOption?: string;
  className?: string;
};

export default function PreloadedFileDropdown({
  options,
  name,
  handleChange,
  defaultOption = '-- Select a file --',
  className,
}: PreloadedFileDropdownProps) {

  return(
    <select 
      className={`dropdown ${className}`}
      name={name}
      id={name}
      onChange={handleChange}
      defaultValue='default'
    >
       {defaultOption && (
          <option value='default' disabled hidden>
            {defaultOption}
          </option>
        )}
        {options.map(option => (
          <option value={JSON.stringify(option)} key={option.display_text}>
            {option.display_text}
          </option>
        ))}
      </select>
  )
}

// <option value={option.location} key={option.display_text}>

/*
if (Array.isArray(options)) {
    return (
      <select className={`dropdown ${className}`} name={name} id={name} onChange={handleChange}>
        {options.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    );
  } else {
    return (
      <select
        className={`dropdown ${className}`}
        name="preloaded"
        id="preloaded"
        onChange={handleChange}
        defaultValue=""
      >
        {defaultOption && (
          <option value="" disabled hidden>
            {defaultOption}
          </option>
        )}

        {Object.entries(options).map(([category, items], index) => (
          <optgroup label={category} key={index}>
            {items.map((item, itemIndex) => (
              <option value={JSON.stringify(item)} key={itemIndex}>
                {item.display_text}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    );
  }
*/