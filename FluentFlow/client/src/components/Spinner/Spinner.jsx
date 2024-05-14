import React from 'react';

const Spinner = () => {
    // Inline style for SpinnerParent
    const spinnerParentStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',  // Added for vertical centering
    };

    // Inline style for Spinner
    const spinnerStyle = {
        border: '8px solid #ccc', // Assuming var(--main) is similar to #ccc
        borderTopColor: 'white',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        animation: 'spin 1s linear infinite'
    };

    return (
        <div style={{ width: '100%', height: '100vh' }}> {/* Container to fill the viewport */}
            <div style={spinnerParentStyle}>
                <div style={spinnerStyle}></div>
            </div>
        </div>
    );
};

export default Spinner;
