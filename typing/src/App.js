import React from 'react';
import Word from './components/Word';
import wordList from './resources/words.json';

const getWords = () => {
  const index = Math.floor(Math.random() * wordList.length);
  const word = wordList[index];
  return word.toLowerCase();
}

const isValidKey = (key, word) => {
  if (!word) return false;
  const result = word.split('').includes(key);
  return result;
}

function App() {
  const[typedKeys, setTypedKeys] = React.useState([]);
  const[validKeys, setValidKeys] = React.useState([]);
  const[word, setWord] = React.useState('');
  const Max_Limit = 30;

  const handleKeyDown = (e) => {
    e.preventDefault();
    const { key } = e;
    setTypedKeys((prevTypedKeys) =>  [...prevTypedKeys, key].slice(Max_Limit * -1));

    if(isValidKey(key, word)) {
      setValidKeys((prev) => {
        const isValidLength = prev.length <= word.length;
        const isNextChar = isValidLength && word[prev.length] === key;
        return isNextChar ? [...prev, key] : prev;
      })
    }
  };

  React.useEffect(() => {
    setWord(getWords());
  }, []);

  return (
    <div className="container" tabIndex="0" onKeyDown={handleKeyDown}>
      <div className="valid-keys">
        <Word word={word} validKeys={validKeys} />
      </div>
      <div className="typed-keys">
        { typedKeys? typedKeys.join(" ") : null}
      </div>
      <div className="completed-words">
        <ol>
          <li>carros </li>
          <li> motos </li>
          <li> oixalbkhkh </li>
        </ol>
      </div>
      
    </div>
  );
}

export default App;
