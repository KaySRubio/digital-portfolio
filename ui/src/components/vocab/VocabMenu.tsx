import type { Topic } from '../../types/vocabTypes';

type VocabMenuProps = {
  setSelectedTopic: React.Dispatch<React.SetStateAction<Topic>>;
}

// todo - set up menu

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const VocabMenu = ({ setSelectedTopic }: VocabMenuProps) => {

  return (
    <p>Menu</p>
  )
}
  
export default VocabMenu;