import React from 'react';

const Statistics = ({ stats }) => {
    return (
        <div className="card">
            
            <div className='card-header custom-card-header d-flex align-items-center justify-content-between'>
                <h5 className='mb-0'>Statistics</h5>
            </div>

            <div className="card-body">
            {stats.length > 0 ? (
                <ul>
                    {stats.map((stat, index) => (
                        <li key={index} style={{ color: stat.color }}>
                            {stat.keyword}: {stat.count} hits
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No keywords to display.</p>
            )}
            </div>
        </div>
  );
};

export default Statistics;
