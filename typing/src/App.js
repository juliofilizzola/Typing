import React from 'react';

function App() {
  const[typedKeys, setTypedKeys] = React.useState([]);
  const handleKeyDown = (e) => {
    e.preventDefault();
    const { key } = e;
    setTypedKeys((prevTypedKeys) => {
      return [...prevTypedKeys, key];
    });

  }

  return (
    <div className="container" tabIndex="0" onKeyDown={handleKeyDown}>
      <div className="valid-keys">
        <span className="matched">emer</span>
        <span className="remainder">son</span>
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
