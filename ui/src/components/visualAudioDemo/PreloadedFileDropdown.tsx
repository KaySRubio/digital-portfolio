import React from 'react';
import type { SampleFile } from '../../types/portfolioTypes';

type PreloadedFileDropdownProps = {
  options: SampleFile[];
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
          <option value={JSON.stringify(option)} key={option.displayText}>
            {option.displayText}
          </option>
        ))}
      </select>
  )
}
