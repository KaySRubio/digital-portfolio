type MoreInformationButtonProps = {
  onClick: () => void;
  label?: string;
};
export default function MoreInformationButton({ onClick, label = 'Show more information' }: MoreInformationButtonProps) {
  return (
    <button aria-label={label} className='more-info-button' onClick={onClick}>
      i
    </button>
  );
}