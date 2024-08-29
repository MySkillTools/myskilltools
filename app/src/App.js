import React, { useState } from 'react';

// Styling
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.bundle';
//import './styles/style.scss';

const keywordGroups = [
    {
        groupName: "Frontend",
        color: "#f06529",
        keywords: ["HTML", "CSS", "JavaScript", "React"]
    },
  {
    groupName: "Backend",
    color: "#6a4c93",
    keywords: ["Java", "Spring", "Node.js", "Express"]
  },
  {
    groupName: "Database",
    color: "#00758f",
    keywords: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    groupName: "Experience",
    color: "#0000FF",
    keywords: ["experience", "year"]
  },
  {
    groupName: "Citizen",
    color: "#FF0000",
    keywords: ["citizen", "permanent residency"]
  },
];

const TextHighlighter = () => {
  const [text, setText] = useState('');
  const [highlightedText, setHighlightedText] = useState('');

  const highlightKeywords = (inputText) => {
    let outputText = inputText;
    keywordGroups.forEach(group => {
      group.keywords.forEach(keyword => {
        const regex = new RegExp(`(${keyword})`, 'gi');
        outputText = outputText.replace(regex, `<b><span style="color: ${group.color};">$1</span></b>`);
      });
    });
    setHighlightedText(outputText);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste text here..."
        rows="10"
        cols="50"
        className='form-control'
      />
      <button onClick={() => highlightKeywords(text)} className='btn btn-outline-primary'>Highlight</button>
      <div
        dangerouslySetInnerHTML={{ __html: highlightedText }}
        style={{ whiteSpace: 'pre-wrap' }}
      />
    </div>
  );
};

export default TextHighlighter;
