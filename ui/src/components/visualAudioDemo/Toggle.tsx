type ToggleProps = {
  isOn: boolean;
  onToggle: () => void;
  id: string;
};

const Toggle = ({ isOn, onToggle, id }: ToggleProps) => {
  return (
    <div className="toggle-switch">
      <input
        checked={isOn}
        onChange={onToggle}
        className="toggle-checkbox"
        id={id}
        type="checkbox"
      />
      <label className="toggle-label" htmlFor={id} />
    </div>
  );
};

export default Toggle;