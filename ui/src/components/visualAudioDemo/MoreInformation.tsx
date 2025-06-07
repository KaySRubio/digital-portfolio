type MoreInformationButtonProps = {
  onClick: () => void;
};
export default function MoreInformationButton({ onClick }: MoreInformationButtonProps) {
  return (
    <button aria-label="Show more information" className='more-info-button' onClick={onClick}>
      i
    </button>
  );
}
