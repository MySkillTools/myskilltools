// src/components/TextInput.js
import React from 'react';

const TextInput = ({ text, setText, triggerHighlight }) => {
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
      <button onClick={triggerHighlight} className='btn btn-outline-primary'>Highlight</button>
    </div>
  );
};

export default TextInput;
