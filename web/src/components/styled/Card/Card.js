import React from 'react';
import './Card.scss';

const Card = ({ titleText, externalButtons, body }) => {
    return(
        <div className="card">
            <div className='card-header custom-card-header d-flex align-items-center justify-content-between'>
                <h5 className='mb-0'>{titleText}</h5>
                <div className="btn-group" role="group">{externalButtons}</div>
            </div>
            <div className="card-body">{body}</div>
        </div>
    )
};

export default Card;