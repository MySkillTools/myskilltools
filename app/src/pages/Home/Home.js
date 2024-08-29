// src/components/Home.js
import React, { useState } from 'react';
import Navbar from '../../components/NavBar/Navbar';
import TextInput from '../../components/TextInput/TextInput';
import TextDisplay from '../../components/TextDisplay/TextDisplay';
import KeywordSelector from '../../components/KeywordSelector/KeywordSelector';
import { keywordGroups } from '../../data/keywordGroups';

const Home = () => {
    const [text, setText] = useState('');
    const [highlightedText, setHighlightedText] = useState('');

    const highlightKeywords = (inputText) => {
        let outputText = inputText;
        keywordGroups.forEach(group => {
        group.keywords.forEach(keyword => {
        const regex = new RegExp(`(${keyword})`, 'gi');
        outputText = outputText.replace(regex, `<span class="fw-bold "style="color: ${group.color};">$1</span>`);
      });
    });
    setHighlightedText(outputText);
  };

    return (
    <div>
        <Navbar />

        <div className='container-fluid row'>
            <div className='col-md-6'>
                <KeywordSelector />
                <TextInput text={text} setText={setText} triggerHighlight={() => highlightKeywords(text)} />
            </div>

            <div className='col-md-6'>
                <TextDisplay highlightedText={highlightedText} />
            </div>

        </div>

    
    </div>
  );
};

export default Home;
