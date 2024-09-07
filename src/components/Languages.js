import React from 'react';
import OIP from './pics/11.png';
import OIPS from './pics/22.png';
import PYTHO from './pics/33.png';
import CS from './pics/44.png';
import BS from './pics/55.png';
import IT from './pics/66.png';
import REACT from './pics/88.png';
import NODE from './pics/99.png';

const Languages = () => {
    const logos = [OIP, OIPS, PYTHO, CS, BS, IT, REACT, NODE];

    const marqueeContainerStyle = {
        display: 'flex',
        overflow: 'hidden',
        width: '100%',
    };

    const marqueeStyle = {
        display: 'flex',
        animation: 'marquee 15s linear infinite', // Adjust speed here
    };

    const marqueeItemStyle = {
        flexShrink: 0,
        padding: '0 0.5rem', // Smaller padding for tighter margins
    };

    return (
        <div className="w-full bg-gradient-to-r from-gray-200 via-gray-200 to-gray-200 py-12">
            <div className="container mx-auto">
                <div style={marqueeContainerStyle}>
                    <div style={{ ...marqueeStyle, width: `${logos.length * 200}%` }}>
                        {logos.concat(logos).map((logo, index) => (
                            <div key={index} className="p-4" style={marqueeItemStyle}>
                                <div className="p-6">
                                    <img src={logo} alt={`Logo ${index + 1}`} className="mx-auto max-h-24" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Languages;

// Adding keyframes using template literals
const styleSheet = document.styleSheets[0];
const keyframes = `
@keyframes marquee {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-220%);
    }
}
`;

styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    