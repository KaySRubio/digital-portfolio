type VocabAddSpecialCharProps = {
  onClick: (char: string) => void;
}

const VocabAddSpecialChar = ({
  onClick,
}: VocabAddSpecialCharProps) => {

  const specialChars = ['\u00E1', '\u00E9', '\u00ED', '\u00F3', '\u00FA', '\u00F1', '\u00FC', '\u00A1', '\u00BF'];

  return (
    <div className='vocab-special-char-row'>
      {specialChars.map((char, index) => (
        <button 
          className='vocab-special-char-button'
          type="button"
          key={index}
          onClick={() => onClick(char)}
        >
          {char}
        </button>
      ))}
    </div>
  );
}
  
export default VocabAddSpecialChar;
