// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useSnackbar } from 'notistack';
// import axios from 'axios';
// import wooden1 from '/src/assets/wooden1.jpg'; 

// const DeleteDetails = () => {
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();
//     const { enqueueSnackbar } = useSnackbar();
//     const { id } = useParams();
    
//     const handleDelete = () => {
//         setLoading(true);
//         axios.delete(`http://localhost:3000/books/${id}`)
//             .then((res) => {
//                 setLoading(false);
//                 enqueueSnackbar('Book Deleted Successfully', { variant: 'success' });
//                 navigate("/Book Collection");
//             })
//             .catch((error) => {
//                 setLoading(false);
//                 enqueueSnackbar('Failed to Delete Book', { variant: 'error' });
//                 console.log(error);
//             });
//     }

//     return (
//         <div style={{
//             width: '100%',
//             height: '90vh',
//             display: 'flex',
//             justifyContent: 'center', 
//             alignItems: 'center',
//             backgroundImage: `url(${wooden1})`, 
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat'
//         }}>
//             <div style={{
//                 maxWidth: '400px', 
//                 padding: '20px',
//                 backgroundColor: '#efe0ca', 
//                 borderRadius: '8px',
//                 boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
//                 textAlign: 'center'
//             }}>
//                 <h1 style={{
//                     fontSize: '28px', 
//                     color: '#d32f2f',
//                     marginBottom: '20px'
//                 }}>Are you sure you want to delete this book?</h1>
//                 <button onClick={handleDelete} disabled={loading} style={{
//                     padding: '10px 20px',
//                     backgroundColor: '#d32f2f',
//                     color: '#fff',
//                     border: 'none',
//                     borderRadius: '5px',
//                     cursor: 'pointer',
//                     fontSize: '20px',
//                     transition: 'background-color 0.3s'
//                 }}>
//                     Delete Now
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default DeleteDetails;

import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import wooden1 from '/src/assets/wooden1.jpg'; 

const DeleteDetails = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const { id } = useParams();
    
    const handleDelete = () => {
        setLoading(true);
        axios.delete(`http://localhost:3000/books/${id}`)
            .then((res) => {
                setLoading(false);
                enqueueSnackbar('Book Deleted Successfully', { variant: 'success' });
                navigate("/Book Collection");
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('Failed to Delete Book', { variant: 'error' });
                console.log(error);
            });
    }

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundImage: `url('${wooden1}')`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div style={{
                maxWidth: '400px', 
                padding: '20px',
                backgroundColor: '#efe0ca', 
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                textAlign: 'center'
            }}>
                <h1 style={{
                    fontSize: '28px', 
                    color: '#d32f2f',
                    marginBottom: '20px'
                }}>Are you sure you want to delete this book?</h1>
                <button onClick={handleDelete} disabled={loading} style={{
                    padding: '10px 20px',
                    backgroundColor: '#d32f2f',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '20px',
                    transition: 'background-color 0.3s'
                }}>
                    Delete Now
                </button>
            </div>
        </div>
    );
}

export default DeleteDetails;