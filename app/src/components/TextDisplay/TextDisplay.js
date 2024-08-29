// src/components/TextDisplay.js
import React from 'react';

const TextDisplay = ({ highlightedText }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: highlightedText }}
      style={{ whiteSpace: 'pre-wrap' }}
    />
  );
};

export default TextDisplay;
