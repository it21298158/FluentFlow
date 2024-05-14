// import React from 'react';
// import book3 from '/src/assets/book3.jpg';
// import Button from '../components/Button/button.jsx';
import BookCollection from "./BookCollection";

const Home = () => {
    return (
        // <section style={{
        //     display: 'flex',
        //     flexDirection: 'column',
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //     height: '100vh',
        //     textAlign: 'center',
        //     backgroundImage: `url(${book3})`,
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //     backgroundRepeat: 'no-repeat',
        //     fontFamily: "'Outfit', sans-serif"
        // }}>
        //     <h1 style={{
        //         color: 'rgb(255, 255, 255)',
        //         backgroundColor: 'rgba(0, 0, 0, 0.6)',
        //         padding: '20px',
        //         borderRadius: '10px',
        //         fontWeight: 'bold',
        //         fontSize: '2.5rem',
        //         marginBottom: '20px'
        //     }}>Time to collect Library</h1>
        //     <p style={{
        //         color: 'white',
        //         padding: '15px',
        //         borderRadius: '8px',
        //         fontSize: '30px',
        //         maxWidth: '60%'
        //     }}>
        //         Books and doors are the same thing. You open them, 
        //         and you go through into another world.
        //         Discover your life from books.
        //     </p>
        //     <p style={{
        //         fontSize: '2.5rem',
        //         fontWeight: 'bold',
        //         marginTop: '20px',
        //         color: 'white',
        //         padding: '15px',
        //         borderRadius: '8px'
        //     }} className="quote">
        //         "A book is a gift you can open again and again."
        //     </p>

        //     <Button style={{
        //         marginTop: '20px',
        //         padding: '10px 20px',
        //         fontSize: '1.4rem',
        //         color: 'white',
        //         backgroundColor: '#9e7f54',
        //         border: 'none',
        //         borderRadius: '5px',
        //         cursor: 'pointer',
        //         transition: 'background-color 0.3s ease',
        //         textDecoration: 'none'
        //     }} className="button" LinkText="Read Books" LinkTo="/Book Collection" />
        // </section>
        <div>
            <div className="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
        <img src="https://images.pexels.com/photos/4144926/pexels-photo-4144926.jpeg?auto=compress&cs=tinysrgb&w=600/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o" className="absolute top-0 left-0 min-h-full ob" alt="" />
        <div className="relative z-10 max-w-screen-lg mx-auto grid grid-cols h-full items-center mt-20 mb-20 text-center">
          <div className="col-span-6">
          <h1 className="text-red-300 font-extrabold text-6xl mb-8"> Time to collect Library</h1>
            <h1 className="text-white font-extrabold text-4xl mb-8">Books and doors are the same thing. You open them, 
                 and you go through into another world.
                 Discover your life from books.</h1>
            <p className="text-stone-100 text-base">
            A book is a gift you can open again and again
            </p>
            <button
              className="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10"
              onClick={() => {
                document.getElementById("progress-section").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Get started
            </button>
          </div>
        </div>
      </div>

      <div>
      <div className="bg-gray-200 p-6 m-20 rounded-md shadow-lg mb-8">
        <div className="text-center">
          <h1 className="text-black dark:text-black text-3xl md:text-5xl font-extrabold mb-4">
            Book Collection
          </h1>
        </div>  
          <BookCollection/>
      </div>
        
      </div>
        </div>
    );
};

export default Home;







