import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Button = ({ LinkTo, LinkText }) => {
    const [hover, setHover] = useState(false);

  
    const buttonStyle = {
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '1.4rem',
        color: 'white',
        backgroundColor: hover ? '#b59b6e' : '#9e7f54', 
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        textDecoration: 'none'
    };

    return (
        <Link
            to={LinkTo}
            style={buttonStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {LinkText}
        </Link>
    );
}

export default Button;
