import React from 'react';
import Button from '../components/Button/button.jsx';
import bookImage from '../assets/Books.jpg'; 


const NewBook = () => {
    return (
        <section style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '90vh',
            margin: '100px 0 0',  // Adjusted margin here
            padding: '0',
            backgroundColor: 'transparent',
            backgroundImage: "url('/src/assets/wooden3.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: 'transparent',
                padding: '10px',
                borderRadius: '8px'
            }}>
                <h1 style={{ margin: '0 0 20px', fontSize: '2.4rem' }}>
                    <p style={{
                        color: '#4c4013',
                        lineHeight: '1.6',
                        fontSize: '24px',
                        padding: '10px',
                        marginTop: '15px'
                    }}>
                        "Unlock new worlds and embark on unforgettable journeys with every turn of the page. 
                        Let each book be a gateway to imagination and knowledge, where stories unfold and horizons expand.
                        Dive into the depths of pages, where characters whisper secrets and landscapes await discovery.
                        Fuel your curiosity, challenge your perceptions, and let the adventure begin. 
                        Every book is a new chapter in the endless story of life;
                        embrace it and let your reading journey transform you."
                    </p>
                </h1>
                <Button style={{
                    textDecoration: 'none',
                    marginTop: '20px',
                    padding: '10px 20px',
                    fontSize: '1.4rem',
                    color: 'white',
                    backgroundColor: '#244879',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    alignSelf: 'center'
                }} LinkText="Read Books" LinkTo="/Book Collection" />
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                <img src={bookImage} alt="Book" style={{
                    maxWidth: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    marginTop: '20px'
                }} />
            </div>
        </section>
    );
}

export default NewBook;
