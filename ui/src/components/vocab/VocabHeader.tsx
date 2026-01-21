import VocabMenu from './VocabMenu';
import home from '@/assets/svg/home.svg?react';
import questionMark from '@/assets/svg/question-mark.svg?react';
import logout from '@/assets/svg/logout.svg?react';
import refresh from '@/assets/svg/refresh.svg?react';

import type { Topic, CurrentPage } from '../../types/vocabTypes';

type VocabHeaderProps = {
  loggedIn: boolean;
  // categories: string[];
  selectedTopic: Topic;
  setSelectedTopic: React.Dispatch<React.SetStateAction<Topic>>;
  currentPage: CurrentPage;
  setCurrentPage: React.Dispatch<React.SetStateAction<CurrentPage>>;
  getAndFormatWords: () => void;
  email: string;
  handleLogout: () => void;
  useSupabase: boolean;

}

const VocabHeader = ({
  loggedIn,
  selectedTopic,
  setSelectedTopic,
  currentPage, 
  setCurrentPage,
  getAndFormatWords,
  email, 
  handleLogout,
  useSupabase
}: VocabHeaderProps) => {
  
  const Home = home;
  const QuestionMark = questionMark;
  const Refresh = refresh;
  const Logout = logout;

  return (
    <div className='vocab-header'>
      <h1>Vocab</h1>
      { (loggedIn || !useSupabase) && <VocabMenu 
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        setCurrentPage={setCurrentPage}
      /> }
      { (loggedIn || !useSupabase) && 
        <div className='vocab-header-details'>
          <p>Logged in as <br />{email}</p>
          <div className='vocab-menu-circle-buttons'>
            {currentPage !== 'Categories' && 
              <button className='vocab-menu-circle-button' onClick={() => {setCurrentPage('Categories')}}>
                <Home className='header-icon' />
              </button>
            }
            <button className='vocab-menu-circle-button' onClick={() => {setCurrentPage('Update')}}>
              <QuestionMark className='header-icon' />
            </button>
            <button className='vocab-menu-circle-button' onClick={getAndFormatWords}>
              <Refresh className='header-icon' />
            </button>
            <button className='vocab-menu-circle-button' onClick={handleLogout}>
              <Logout className='header-icon' />
            </button>
          </div>
        </div>
       }
    </div>
  )
}
  
export default VocabHeader;


