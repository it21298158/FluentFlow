// ReadBook.jsx

// eslint-disable-next-line no-unused-vars
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ReadBook.module.css';

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ReadBook = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:3000/books/${id}`)
            .then((res) => {
                setBooks(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

        document.body.style.backgroundImage = "url('/src/assets/wooden1.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";


    return (
        <div className="bg-gray-200">
            <div className="p-10 m-20 rounded-md shadow-lg mb-10">
                <div>
                    <div className={styles.ReadBook_Row}>

                        <div>
                            <img src={books.BookImg_Url} alt={books.BookTitle} />
                            <div className={styles.Icons}>
                                <Link to={`/Edit/${books._id}`}>
                                    <button className='bg-blue-500 hover:bg-blue-600 text-white mt-3 px-4 py-2 rounded'><FaEdit /><span>Edit Details</span></button>
                                </Link><br />
                                <Link to={`/Delete/${books._id}`}>
                                    <button className='bg-red-500 hover:bg-red-600 text-white mt-0 px-3 py-2 rounded'><MdDelete /><span>Delete Details</span></button>
                                </Link>
                            </div>
                        </div>
                        <div className="text-left mb-20 mx-auto p-4" style={{ width: '60%', maxWidth: '2000px', border: '2px solid black', borderRadius: '20px' }}>
                            <ln>
                                <strong>Written By: </strong>{books.BookAuthor}
                            </ln><br /><br />
                            <ln>
                                <strong>Description:</strong>{books.BookDescription}
                            </ln><br /><br />
                            <ln>
                                <strong>Learning Time:</strong>{books.LearningTime}
                            </ln><br /><br />
                            <ln>
                                <strong>Words:</strong>{books.word}
                            </ln><br /><br />
                            <ln>
                                <strong>Sentences:</strong>{books.sentences}
                            </ln><br /><br />

                            <ln>
                                <strong>Choose a Synonym:</strong>From the list of synonyms, click on the synonym you want to replace the word with in your sentence.
                            </ln><br /><br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReadBook;

