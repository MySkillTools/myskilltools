//import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

const keywordGroups = {
  red: ['HTML', 'CSS'],
  green: ['Java', 'Spring']
};

const Highlighter = () => {
  const [text, setText] = useState('');
  const [highlightedText, setHighlightedText] = useState('');

  const highlightText = (inputText) => {
    let outputText = inputText;
    Object.entries(keywordGroups).forEach(([color, keywords]) => {
      keywords.forEach(keyword => {
        const regex = new RegExp(`(${keyword})`, 'gi');
        outputText = outputText.replace(regex, `<span style="color: ${color};">$1</span>`);
      });
    });
    setHighlightedText(outputText);
  };

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => highlightText(text)}>Highlight</button>
      <div dangerouslySetInnerHTML={{ __html: highlightedText }} />
    </div>
  );
};

//export default Highlighter;


function App() {
  return (
    <Highlighter />
  );
}

export default App;
