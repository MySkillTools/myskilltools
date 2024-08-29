import React from 'react';

const TextDisplay = ({ highlightedText }) => {
    return (

        <div className="card">
            
            <div className='card-header custom-card-header d-flex align-items-center justify-content-between'>
                <h5 className='mb-0'>Highlighted Results</h5>
                <button className='btn btn-outline-secondary btn-sm'>Clear</button>
            </div>

            <div className="card-body">
                <div
                    dangerouslySetInnerHTML={{ __html: highlightedText }}
                    style={{ whiteSpace: 'pre-wrap' }}
                />
            </div>
        </div>
    );
};

export default TextDisplay;
