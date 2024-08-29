// src/components/TextInput.js
import React from 'react';
import { Link } from 'react-router-dom';

const TextInput = ({ text, setText, triggerHighlight }) => {
    return (
        <div className="card">
                
            <div className='card-header custom-card-header d-flex align-items-center justify-content-between'>
                <h5 className='mb-0'>Text input</h5>
                <Link className='btn btn-outline-primary btn-sm' to="/">Set Keywords</Link>
            </div>

            <div className="card-body">
                <div className='mb-3'>
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Type or paste text here..."
                        rows="12"
                        className='form-control'
                    />
                </div>
                
                <div className='d-flex justify-content-center'>
                    <button onClick={triggerHighlight} className='btn btn-outline-primary'>Highlight Me!</button>
                </div>
                
            </div>
        </div>
    );
};

export default TextInput;
