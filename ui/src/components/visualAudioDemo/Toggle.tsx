import { useCallback, useState } from 'react';

export type ToggleButtonProps = {
  id?: string,
  onChange: (checked: boolean) => void,
  disabled?: boolean,
  checked: boolean,
  ariaLabel?: string,
}

export type ToggleProps = ToggleButtonProps & {
  className?: string;
  label?: string,
};

export function Toggle({
  id,
  className,
  label,
  disabled = false,
  onChange,
  checked,
}: ToggleProps) {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const onSwitch = useCallback(
    (checked: boolean) => {
      setIsChecked(checked);
      if(onChange) {
        onChange(checked)
      }
    }, [onChange]
  );

  return (
    <div className={className} data-disabled={disabled} data-checked={isChecked}>
      {label && (
        <label htmlFor={`${id}-btn`} className={'toggle-label'}>
          {label}
        </label>
      )}
      <div className="toggle-btn-holder">
        <ToggleButton
          id={id}
          onChange={onSwitch}
          checked={checked}
          disabled={disabled}
          ariaLabel={label}
        />
      </div>
    </div>
  );
}

export function ToggleButton({ id, disabled = false, checked, onChange, ariaLabel }: ToggleButtonProps) {
  return (
    <button
      role="switch"
      className={`toggle-btn ${checked ? 'toggle-btn-on' : 'toggle-btn-off'}`}
      id={`${id}-btn`}
      onClick={() => onChange(!checked)}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-checked={checked}
    >
      <span className={'switch'} />
    </button>
  );
}

Toggle.displayName = 'Toggle';
