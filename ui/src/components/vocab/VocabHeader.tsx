import VocabMenu from './VocabMenu';

import type { Topic, CurrentPage } from '../../types/vocabTypes';

type VocabHeaderProps = {
  loggedIn: boolean;
  // categories: string[];
  setSelectedTopic: React.Dispatch<React.SetStateAction<Topic>>;
  currentPage: CurrentPage;
  setCurrentPage: React.Dispatch<React.SetStateAction<CurrentPage>>;
  getAndFormatWords: () => void;
  email: string;
  handleLogout: () => void;
}

const VocabHeader = ({
  loggedIn,
  setSelectedTopic,
  currentPage, 
  setCurrentPage,
  getAndFormatWords,
  email, 
  handleLogout
}: VocabHeaderProps) => {

  return (
    <div>
      <h1>Vocab</h1>
      { loggedIn && <div>
        <VocabMenu setSelectedTopic={setSelectedTopic} />

        <div>
          {currentPage !== 'Categories' && <button onClick={() => {setCurrentPage('Categories')}}>Home</button>}
          <button onClick={() => {setCurrentPage('Update')}}>?</button>
          <button onClick={getAndFormatWords}>Refresh</button>
          <p>Logged in as {email}</p>
          <button onClick={handleLogout}>Logout</button>

        </div>

      </div> }
    </div>
  )
}
  
export default VocabHeader;