import React from "react";
import { Link } from 'react-router-dom';

const NavLink = [
    {
        LinkText: 'Home',
        LinkTo: '/',
    },
    {
        LinkText: 'New Books',
        LinkTo: '/New Books',
    },
    {
        LinkText: 'Book Collection',
        LinkTo: '/Book Collection',
    },
];

const Navbar = () => {
    return (
        <>
            <div>
                <nav style={{
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'left',
                    padding: '0 20px',
                    paddingBottom: '10px',
                    boxShadow: '0 3px 8px rgba(0, 0, 0, 0.35)',
                    fontSize: '1.3rem',
                    backgroundImage: "url('/src/assets/wooden1.jpg')", 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    {NavLink.map((item, index) => (
                        <li key={index} style={{
                            display: 'inline-block',
                            listStyleType: 'none',
                            marginRight: '20px'
                        }}>
                            <Link to={item.LinkTo} style={{
                                textDecoration: 'none',
                                color: 'white',
                                padding: '15px 20px',
                                display: 'block'
                            }}>{item.LinkText}</Link>
                        </li>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Navbar;
