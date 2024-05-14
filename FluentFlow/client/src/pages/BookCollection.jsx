// import React, { useState, useEffect, useRef } from 'react';
// import { useReactToPrint } from 'react-to-print';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Spinner from '../components/Spinner/Spinner.jsx';

// const BookCollection = () => {
//     const [books, setBooks] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const printComponentRef = useRef();

//     useEffect(() => {
//         setLoading(true);
//         axios.get('http://localhost:3000/books')
//             .then((res) => {
//                 setBooks(res.data.data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.log(error);
//                 setLoading(false);
//             });
//     }, []);

//     const handlePrint = useReactToPrint({
//         content: () => printComponentRef.current,
//         documentTitle: 'Book details Report',
//         onAfterPrint: () => alert('Book details Report Successfully Downloaded'),
//     });

//     return (
//         <>
//             <style>
//                 {`
//                     @media print {
//                         .noPrint {
//                             display: none;
//                         }
//                     }
//                 `}
//             </style>
//             {loading ? <Spinner /> : (
//                 <div style={{
//                     paddingInline: '200px',
//                     marginTop: '-7px',
//                     backgroundImage: 'url("/src/assets/wooden1.jpg")',
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     backgroundRepeat: 'no-repeat',
//                     height: '600vh',
//                 }}>
//                     <div>
//                         <button onClick={handlePrint} style={{
//                             position: 'absolute',
//                             top: '10px',
//                             right: '40px',
//                             width: '200px',
//                             padding: '5px 8px',
//                             height: 'auto',
//                             fontSize: '1rem',
//                             color: '#ffffff',
//                             backgroundColor: 'transparent',
//                             border: '2px solid',
//                             borderRadius: '10px',
//                             cursor: 'pointer',
//                             transition: 'color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease'
//                         }}>Download Report</button>
//                         <Link to="/Add Book" style={{
//                             fontWeight: '700',
//                             color: 'black',
//                             fontSize: '40px',
//                             textDecoration: 'none',
//                             display: 'block',
//                             textAlign: 'center',
//                             marginBottom: '-10px',
//                             padding: '0px'
//                         }}>Add New Book Now</Link>
//                     </div>
//                     <div ref={printComponentRef} style={{
//                         display: 'grid',
//                         gridTemplateColumns: 'repeat(auto-fit, minmax(32rem, 1fr))',
//                         gap: '10px',
//                         marginBottom: '40px'
//                     }}>
//                         {books.map((item) => (
//                             <div key={item._id} style={{
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 alignItems: 'center',
//                                 boxShadow: 'var(--boxShadow)',
//                                 overflow: 'hidden',
//                                 marginBottom: '30px'
//                             }}>
//                                 <img src={item.BookImg_Url} alt={item.BookTitle} style={{
//                                     width: '100%',
//                                     height: '400px',
//                                     objectFit: 'cover',
//                                     marginBottom: '20px'
//                                 }} />
//                                 <div style={{
//                                     padding: '10px 20px 30px',
//                                     width: '100%',
//                                     backgroundColor: 'rgba(255, 250, 250, 0.8)',
//                                     boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.1)',
//                                     textAlign: 'center',
//                                     borderRadius: '15px',
//                                 }}>
//                                     <h4 style={{
//                                         fontSize: '1.5rem',
//                                         fontWeight: '500',
//                                         margin: '10px 0'
//                                     }}>{item.BookTitle}</h4>
//                                     <h5 style={{
//                                         fontSize: '1.5rem',
//                                         fontWeight: '500',
//                                         margin: '10px 0'
//                                     }}>Written By: {item.BookAuthor}</h5>
//                                     <p style={{
//                                         fontSize: '1rem',
//                                         margin: '10px 0'
//                                     }}>{item.BookDescription}</p>
//                                     <Link to={`/Read/${item._id}`} className="noPrint" style={{
//                                         margin: '20px auto 10px',
//                                         padding: '10px 20px',
//                                         fontSize: '1.4rem',
//                                         color: 'white',
//                                         backgroundColor: '#9e7f54',
//                                         border: 'none',
//                                         borderRadius: '5px',
//                                         cursor: 'pointer',
//                                         transition: 'background-color 0.3s ease',
//                                         textDecoration: 'none'
//                                     }}>Read Book</Link>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default BookCollection;

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";

const BookCollection = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const printComponentRef = useRef();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  

  const handlePrint = useReactToPrint({
    content: () => printComponentRef.current,
    documentTitle: "Book details Report",
    onAfterPrint: () => alert("Book details Report Successfully Downloaded"),
  });

  return (
    <>
      <style>
        {`
          @media print {
            .noPrint {
              display: none;
            }
          }
        `}
      </style>
      {loading ? (
        <Spinner />
      ) : (
        <div
          style={{
            paddingInline: "200px",
            marginTop: "-7px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "600vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link
              to={`/Add Book`}
              className="noPrint"
              style={{
                margin: "20px 10px",
                padding: "4px 16px", // Adjust padding for smaller buttons
                fontSize: "1rem", // Adjust font size for smaller buttons
                color: "#ffffff",
                backgroundColor: "#13293d",
                border: "none",
                borderRadius: "8px", // Adjust border radius for smaller buttons
                cursor: "pointer",
                transition:
                  "color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease",
                textDecoration: "none",
              }}
            >
              Add New Book Now
            </Link>
          </div>

          <div
            ref={printComponentRef}
            style={{
              margin: "40px auto 10px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(32rem, 1fr))",
              gap: "10px",
              marginBottom: "40px",
            }}
          >
            {books.map((item) => (
              <div
                key={item._id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: "var(--boxShadow)",
                  overflow: "hidden",
                  marginBottom: "30px",
                }}
              >
                <img
                  src={item.BookImg_Url}
                  alt={item.BookTitle}
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    marginBottom: "20px",
                  }}
                />
                <div
                  style={{
                    padding: "10px 20px 30px",
                    width: "100%",
                    backgroundColor: "rgba(255, 250, 250, 0.8)",
                    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                    borderRadius: "15px",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "500",
                      margin: "10px 0",
                    }}
                  >
                    {item.BookTitle}
                  </h4>
                  <h5
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "500",
                      margin: "10px 0",
                    }}
                  >
                    Written By: {item.BookAuthor}
                  </h5>
                  <p
                    style={{
                      fontSize: "1rem",
                      margin: "10px 0",
                    }}
                  >
                    {item.BookDescription}
                  </p>
                  <Link
                    to={`/Read/${item._id}`}
                    className="noPrint"
                    style={{
                      margin: "20px auto 10px",
                      padding: "10px 20px",
                      fontSize: "1.4rem",
                      color: "white",
                      backgroundColor: "#9e7f54",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                      textDecoration: "none",
                    }}
                  >
                    Read Book
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handlePrint}
            style={{
              width: "200px",
              padding: "5px 8px",
              fontSize: "1rem",
              color: "#ffffff",
              backgroundColor: "#1a237e", // Dark blue color
              border: "2px solid #1a237e", // Dark blue color
              borderRadius: "10px",
              cursor: "pointer",
              transition:
                "color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease",
              marginTop: "20px", // Add margin top to separate from buttons
            }}
          >
            Download Report
          </button>
        </div>
      )}
    </>
  );
};

export default BookCollection;
