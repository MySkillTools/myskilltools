import React, { useState } from 'react';

import './Item.scss';

// Function to lighten a color by a given percentage
const lightenColor = (color, percent) => {
  const num = parseInt(color.replace("#",""), 16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) + amt,
        B = (num >> 8 & 0x00FF) + amt,
        G = (num & 0x0000FF) + amt;

  return "#" + (0x1000000 + (R < 255 ? R : 255) * 0x10000 + (B < 255 ? B : 255) * 0x100 + (G < 255 ? G : 255)).toString(16).slice(1);
};

// Function to get text color based on background
const getTextColorBasedOnBackground = (color) => {
  // Dummy function; add actual logic to determine text color based on background
  return color; // Placeholder return
};

function Item({ linkText, textColor, bgColor }) {
    const [overlayBgColor, setOverlayBgColor] = useState('');

    const boxBgColor = lightenColor(bgColor, 40);
    const btnBgColor = getTextColorBasedOnBackground(boxBgColor);

    return (
        
        <div className="col-xl-3 col-lg-4 col-sm-6 menu-col">
            <div className="item p-1">

                {/*
                <div className="banner-container">
                    <img src={imageUrl} alt={linkText} />
                </div>
                */}

                <div>
                    Hello
                </div>

                <div className="overlay" 
                    onMouseOver={() => setOverlayBgColor(boxBgColor)}
                    onMouseOut={() => setOverlayBgColor('')}
                    style={{ backgroundColor: overlayBgColor }}
                >

                    <div className="btn-group" role="group">
                        <button type="button" className={`btn btn-outline-${btnBgColor}`}>
                            Visit
                        </button>

                        <button type="button" className={`btn btn-outline-${btnBgColor}`}>
                            About
                        </button>

                        <button type="button" className={`btn btn-outline-${btnBgColor}`}>
                            Share
                        </button>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Item;
