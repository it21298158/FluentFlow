// import React, { useState, useEffect } from 'react';
// import { useSnackbar } from 'notistack';
// import { useNavigate, useParams } from "react-router-dom";
// import axios from 'axios';

// const EditDetails = () => {
//     const [BookTitle, setBookTitle] = useState("");
//     const [BookAuthor, setBookAuthor] = useState("");
//     const [BookImg_Url, setBookImg_Url] = useState("");
//     const [BookDescription, setBookDescription] = useState("");
//     const [LearningTime, setLearningTime] = useState("");
//     const [word, setWord] = useState("");
//     const [sentences, setSentences] = useState("");

//     const [loading, setLoading] = useState(false);
  
//     const navigate = useNavigate();
//     const { enqueueSnackbar } = useSnackbar();
//     const { id } = useParams();

//     useEffect(() => {
//         setLoading(true);
//         axios.get(`http://localhost:3000/books/${id}`)
//             .then((res) => {
//                 const data = res.data;
//                 setBookTitle(data.BookTitle);
//                 setBookAuthor(data.BookAuthor);
//                 setBookImg_Url(data.BookImg_Url);
//                 setBookDescription(data.BookDescription);
//                 setLearningTime(data.LearningTime);
//                 setWord(data.word);
//                 setSentences(data.sentences);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.log(error);
//                 setLoading(false);
//             });

       
//         document.body.style.backgroundImage = "url('/src/assets/wooden1.jpg')";
//         document.body.style.backgroundSize = "cover";
//         document.body.style.backgroundPosition = "center";
//         document.body.style.backgroundRepeat = "no-repeat";

       
//         return () => {
//             document.body.style.backgroundImage = '';
//             document.body.style.backgroundSize = '';
//             document.body.style.backgroundPosition = '';
//             document.body.style.backgroundRepeat = '';
//         };
//     }, [id]); 

//     const saveChanges = () => {
//         setLoading(true);
//         axios.put(`http://localhost:3000/books/${id}`, {
//             BookTitle,
//             BookAuthor,
//             BookImg_Url,
//             BookDescription,
//             LearningTime,
//             word,
//             sentences
//         })
//         .then((res) => {
//             setLoading(false);
//             enqueueSnackbar('Book updated successfully!', { variant: 'success' });
//             navigate('/Book Collection'); 
//         })
//         .catch((error) => {
//             setLoading(false);
//             enqueueSnackbar('Failed to update book', { variant: 'error' });
//             console.log(error);
//         });
//     };

//     return (
//         <>
//             <section style={{
//                 width: '60%', 
//                 maxWidth: '700px', 
//                 margin: '20px auto', 
//                 padding: '20px', 
//                 backgroundColor: '#efe0ca', 
//                 borderRadius: '10px', 
//                 boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)', 
//                 position: 'relative', 
//                 overflow: 'hidden', 
//                 display: 'flex', 
//                 flexDirection: 'column', 
//                 justifyContent: 'space-between'
//             }}>
//                 <h4 style={{ fontSize: '24px', textAlign: 'center', margin: '0 0 20px' }}>Update Details</h4>
//                 <input type="text" placeholder="Book Title" value={BookTitle} onChange={(e) => setBookTitle(e.target.value)} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff', resize: 'vertical' }} />
//                 <input type="text" placeholder="Book Image Url" value={BookImg_Url} onChange={(e) => setBookImg_Url(e.target.value)} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff', resize: 'vertical' }} />
//                 <input type="text" placeholder="Book Author" value={BookAuthor} onChange={(e) => setBookAuthor(e.target.value)} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff', resize: 'vertical' }} />
//                 <textarea placeholder="Book Description" value={BookDescription} onChange={(e) => setBookDescription(e.target.value)} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff', height: '100px', resize: 'vertical' }} />
//                 <input type="text" placeholder="Learning Time" value={LearningTime} onChange={(e) => setLearningTime(e.target.value)} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff', resize: 'vertical' }} />
//                 <input type="text" placeholder="Word" value={word} onChange={(e) => setWord(e.target.value)} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff', resize: 'vertical' }} />
//                 <textarea placeholder="Sentences" value={sentences} onChange={(e) => setSentences(e.target.value)} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff', height: '100px', resize: 'vertical' }} />
//                 <button onClick={saveChanges} disabled={loading} style={{ padding: '10px', display: 'block', backgroundColor: '#0d6cd1', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: 'auto', width: '50%', alignSelf: 'center' }}>
//                     Edit Details
//                 </button>
//             </section>
//         </>
//     );
// };

// export default EditDetails;


import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const EditDetails = () => {
    const [BookTitle, setBookTitle] = useState("");
    const [BookAuthor, setBookAuthor] = useState("");
    const [BookImg_Url, setBookImg_Url] = useState("");
    const [BookDescription, setBookDescription] = useState("");
    const [LearningTime, setLearningTime] = useState("");
    const [word, setWord] = useState("");
    const [sentences, setSentences] = useState("");

    const [loading, setLoading] = useState(false);
  
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:3000/books/${id}`)
            .then((res) => {
                const data = res.data;
                setBookTitle(data.BookTitle);
                setBookAuthor(data.BookAuthor);
                setBookImg_Url(data.BookImg_Url);
                setBookDescription(data.BookDescription);
                setLearningTime(data.LearningTime);
                setWord(data.word);
                setSentences(data.sentences);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });

            document.body.style.backgroundImage = "url('/src/assets/wooden1.jpg')";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundRepeat = "no-repeat";
     

        return () => {
            document.body.style.backgroundImage = '';
            document.body.style.backgroundSize = '';
            document.body.style.backgroundPosition = '';
            document.body.style.backgroundRepeat = '';
        };
    }, [id]); 

    

    const saveChanges = () => {
        setLoading(true);
        axios.put(`http://localhost:3000/books/${id}`, {
            BookTitle,
            BookAuthor,
            BookImg_Url,
            BookDescription,
            LearningTime,
            word,
            sentences
        })
        .then((res) => {
            setLoading(false);
            enqueueSnackbar('Book updated successfully!', { variant: 'success' });
            navigate('/Book Collection'); 
        })
        .catch((error) => {
            setLoading(false);
            enqueueSnackbar('Failed to update book', { variant: 'error' });
            console.log(error);
        });
    };

    return (
        <>
            <section style={{
                width: '60%', 
                maxWidth: '700px', 
                margin: '100px auto 20px',  // Adjusted margin here
                padding: '20px', 
                backgroundColor: '#efe0ca', 
                borderRadius: '10px', 
                boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)', 
                position: 'relative', 
                overflow: 'hidden', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between'
            }}>
                <h4 style={{ fontSize: '24px', textAlign: 'center', margin: '0 0 20px' }}>Update Details</h4>
                <input type="text" placeholder="Book Title" value={BookTitle} onChange={(e) => setBookTitle(e.target.value)} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff', resize: 'vertical' }} />
                <input type="text" placeholder="Book Image Url" value={BookImg_Url} onChange={(e) => setBookImg_Url(e.target.value)} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff', resize: 'vertical' }} />
                <input type="text" placeholder="Book Author" value={BookAuthor} onChange={(e) => setBookAuthor(e.target.value)} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff', resize: 'vertical' }} />
                <textarea placeholder="Book Description" value={BookDescription} onChange={(e) => setBookDescription(e.target.value)} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff', height: '100px', resize: 'vertical' }} />
                <input type="text" placeholder="Learning Time" value={LearningTime} onChange={(e) => setLearningTime(e.target.value)} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff', resize: 'vertical' }} />
                <input type="text" placeholder="Word" value={word} onChange={(e) => setWord(e.target.value)} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff', resize: 'vertical' }} />
                <textarea placeholder="Sentences" value={sentences} onChange={(e) => setSentences(e.target.value)} style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff', height: '100px', resize: 'vertical' }} />
                <button onClick={saveChanges} disabled={loading} style={{ padding: '10px', display: 'block', backgroundColor: '#0d6cd1', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: 'auto', width: '50%', alignSelf: 'center' }}>
                    Edit Details
                </button>
            </section>
        </>
    );
};

export default EditDetails;
