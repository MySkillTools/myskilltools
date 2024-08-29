import React, { useState } from 'react';
import Navbar from '../../components/NavBar/Navbar';
import TextInput from '../../components/TextInput/TextInput';
import TextDisplay from '../../components/HighlightedResult/HighlightedResult';
import Statistics from '../../components/Statistics/Statistics';
import { keywordGroups } from '../../data/keywordGroups';

const Home = () => {
    const [text, setText] = useState('');
    const [highlightedText, setHighlightedText] = useState('');
    const [stats, setStats] = useState([]);

    const highlightKeywords = (inputText) => {
        let outputText = inputText;
        let keywordStats = [];

        keywordGroups.forEach(group => {
            group.keywords.forEach(keyword => {
                const regex = new RegExp(`\\b(${keyword})(?:s)?\\b`, 'gi');
                const matches = inputText.match(regex);
                const count = matches ? matches.length : 0;
                if (count > 0) {
                    keywordStats.push({ keyword, count, color: group.color, category: group.category });
                    outputText = outputText.replace(regex, `<span class="fw-bold" style="color: ${group.color};">$1</span>`);
                }
            });
        });

        // Sort stats in descending order by count
        keywordStats.sort((a, b) => b.count - a.count);
        setHighlightedText(outputText);
        setStats(keywordStats);
    };

    return (
        <div>
            <Navbar />

            <div className='container-fluid'>
                <div className='row py-3'>
                    <div className='col-md-6'>
                        <div className='mb-3'>
                            <TextInput text={text} setText={setText} triggerHighlight={() => highlightKeywords(text)} />
                        </div>
                        <div>
                            <Statistics stats={stats} />
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <TextDisplay highlightedText={highlightedText} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;
