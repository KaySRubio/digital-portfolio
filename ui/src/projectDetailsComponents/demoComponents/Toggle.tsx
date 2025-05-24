import '../projectDetails.css'

type ToggleProps = {
  isOn: boolean;
  onToggle: () => void;
};

const Toggle = ({ isOn, onToggle }: ToggleProps) => {
  return (
    <div className="toggle-switch">
      <input
        checked={isOn}
        onChange={onToggle}
        className="toggle-checkbox"
        id="toggle"
        type="checkbox"
      />
      <label className="toggle-label" htmlFor="toggle" />
    </div>
  );
};

export default Toggle;