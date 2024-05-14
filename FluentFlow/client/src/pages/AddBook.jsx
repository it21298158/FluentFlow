// import React, { useState, useEffect } from 'react';
// import { useSnackbar } from 'notistack';
// import { useNavigate } from "react-router-dom"; 
// import axios from 'axios';

// const AddBook = () => {
//   const [BookTitle, setBookTitle] = useState("");
//   const [BookAuthor, setBookAuthor] = useState("");
//   const [BookImg_Url, setBookImg_Url] = useState("");
//   const [BookDescription, setBookDescription] = useState("");
//   const [LearningTime, setLearningTime] = useState("");
//   const [word, setWord] = useState("");
//   const [sentences, setSentences] = useState("");
//   const [Loading, setLoading] = useState(false);

//   const navigate = useNavigate(); 
//   const { enqueueSnackbar } = useSnackbar();

//   useEffect(() => {
   
//     const originalStyle = document.body.style.cssText;

   
//     document.body.style.backgroundImage = "url('/src/assets/wooden1.jpg')";
//     document.body.style.backgroundSize = "cover";
//     document.body.style.backgroundPosition = "center";
//     document.body.style.backgroundRepeat = "no-repeat";


//     return () => {
//       document.body.style.cssText = originalStyle;
//     };
//   }, []);

//   const SaveBook = () => {
//     const data = {
//       BookTitle,
//       BookAuthor,
//       BookImg_Url,
//       BookDescription,
//       LearningTime,
//       word,
//       sentences
//     };
//     setLoading(true);
//     axios.post("http://localhost:3000/books", data).then((res) => {
//       setLoading(false);
//       enqueueSnackbar('Book Saved Successfully', { variant: 'success' });
//       navigate("/Book Collection"); 
//     }).catch((error) => {
//       setLoading(false);
//       enqueueSnackbar('Failed to Save Book', { variant: 'error' });
//       console.log(error);
//     });
//   };

//   return (
//     <>
//       <section style={{width: '60%', maxWidth: '700px', margin: '20px auto', padding: '20px', backgroundColor: '#efe0ca', borderRadius: '10px', boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)', position: 'relative', overflow: 'hidden'}}>
//         <h4 style={{fontSize: '24px', textAlign: 'center', margin: '0 0 20px'}}>Add a New Book</h4>
//         <input type="text" placeholder="Book Title" value={BookTitle} onChange={(e) => setBookTitle(e.target.value)} style={{width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff'}} />
//         <input type="text" placeholder="Book Image Url" value={BookImg_Url} onChange={(e) => setBookImg_Url(e.target.value)} style={{width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff'}} />
//         <input type="text" placeholder="Book Author" value={BookAuthor} onChange={(e) => setBookAuthor(e.target.value)} style={{width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff'}} />
//         <textarea placeholder="Book Description" value={BookDescription} onChange={(e) => setBookDescription(e.target.value)} style={{width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff', height: '100px', resize: 'vertical'}} />
//         <input type="text" placeholder="Learning Time" value={LearningTime} onChange={(e) => setLearningTime(e.target.value)} style={{width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff'}} />
//         <input type="text" placeholder="Word" value={word} onChange={(e) => setWord(e.target.value)} style={{width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff'}} />
//         <textarea placeholder="Sentences" value={sentences} onChange={(e) => setSentences(e.target.value)} style={{width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff', height: '100px', resize: 'vertical'}} />
//         <button onClick={SaveBook} style={{width: '50%', padding: '10px', margin: '0 auto', display: 'block', backgroundColor: '#0d6cd1', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>Save Book</button>

//       </section>
//     </>
//   );
// };

// export default AddBook;

import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from "react-router-dom"; 
import axios from 'axios';

const AddBook = () => {
  const [BookTitle, setBookTitle] = useState("");
  const [BookAuthor, setBookAuthor] = useState("");
  const [BookImg_Url, setBookImg_Url] = useState("");
  const [BookDescription, setBookDescription] = useState("");
  const [LearningTime, setLearningTime] = useState("");
  const [word, setWord] = useState("");
  const [sentences, setSentences] = useState("");
  const [Loading, setLoading] = useState(false);

  const navigate = useNavigate(); 
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
   
    const originalStyle = document.body.style.cssText;

   
    document.body.style.backgroundImage = "url('/src/assets/wooden1.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";


    return () => {
      document.body.style.cssText = originalStyle;
    };
  }, []);

  const SaveBook = () => {
    const data = {
      BookTitle,
      BookAuthor,
      BookImg_Url,
      BookDescription,
      LearningTime,
      word,
      sentences
    };
    if(data.BookTitle && data.BookAuthor&& data.BookImg_Url&& data.BookDescription&& data.LearningTime&& data.word)
    setLoading(true);
    axios.post("http://localhost:3000/books", data).then((res) => {
      setLoading(false);
      enqueueSnackbar('Book Saved Successfully', { variant: 'success' });
      navigate("/Book Collection"); 
    }).catch((error) => {
      setLoading(false);
      enqueueSnackbar('Failed to Save Book', { variant: 'error' });
      console.log(error);
    });
  };

  return (
    <>
      <section style={{width: '60%', maxWidth: '700px', margin: '100px auto 20px', padding: '20px', backgroundColor: '#efe0ca', borderRadius: '10px', boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)', position: 'relative', overflow: 'hidden'}}>
        <form>
        <h4 style={{fontSize: '24px', textAlign: 'center', margin: '0 0 20px'}}>Add a New Book</h4>
        <input type="text" required placeholder="Book Title" value={BookTitle} onChange={(e) => setBookTitle(e.target.value)} style={{width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff'}} />
        <input type="text" required placeholder="Book Image Url" value={BookImg_Url} onChange={(e) => setBookImg_Url(e.target.value)} style={{width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff'}} />
        <input type="text" required placeholder="Book Author" value={BookAuthor} onChange={(e) => setBookAuthor(e.target.value)} style={{width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff'}} />
        <textarea placeholder="Book Description" value={BookDescription} onChange={(e) => setBookDescription(e.target.value)} style={{width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff', height: '100px', resize: 'vertical'}} />
        <input type="text" required placeholder="Learning Time" value={LearningTime} onChange={(e) => setLearningTime(e.target.value)} style={{width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff'}} />
        <input type="text" required  placeholder="Word" value={word} onChange={(e) => setWord(e.target.value)} style={{width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff'}} />
        <textarea placeholder="Sentences" value={sentences} onChange={(e) => setSentences(e.target.value)} style={{width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff', height: '100px', resize: 'vertical'}} />
        <button onClick={SaveBook} style={{width: '50%', padding: '10px', margin: '0 auto', display: 'block', backgroundColor: '#0d6cd1', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>Save Book</button>
        </form>
      </section>
    </>
  );
};

export default AddBook;
