import {useEffect} from 'react'
import type { Topic, CurrentPage } from '../../types/vocabTypes';

type VocabMenuProps = {
  setSelectedTopic: React.Dispatch<React.SetStateAction<Topic>>;
  selectedTopic: Topic;
  setCurrentPage: React.Dispatch<React.SetStateAction<CurrentPage>>;
}

// todo - set up menu

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const VocabMenu = ({ selectedTopic, setSelectedTopic, setCurrentPage }: VocabMenuProps) => {

  const topics = ['Spanish', 'Science']

  useEffect(() => {
    console.log('selected topic updated to ', selectedTopic)

  }, [selectedTopic])

  return (
    <div className='vocab-menu'>
      <ul>
        {topics.map((topic) => (
          <li key={topic}>
            <button 
              className={topic === selectedTopic ? 'vocab-active-button' : ''}
              onClick={() => {setSelectedTopic(topic as Topic); setCurrentPage('Categories')}}
            >
              {topic}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
  
export default VocabMenu;