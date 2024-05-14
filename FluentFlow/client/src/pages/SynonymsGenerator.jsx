// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../index.css";

// const TextToButtons = () => {
//   const [text, setText] = useState("");
//   const [clickableWords, setClickableWords] = useState([]);
//   const [synonyms, setSynonyms] = useState([]);
//   const [clickedWord, setClickedWord] = useState(null);
//   const [replacements, setReplacements] = useState({});

//   useEffect(() => {
//     document.body.classList.add("synonyms-page");
//     return () => {
//       document.body.classList.remove("synonyms-page");
//     };
//   }, []);

//   const handleInputChange = (value) => {
//     setText(value);
//     const words = value.split(" "); // Split the text into words
//     const clickable = words.filter((word) =>
//       ["help", "tool", "book", "task"].includes(word.toLowerCase())
//     );
//     setClickableWords(clickable);
//   };

//   const handleButtonClick = (synonym) => {
//     if (!clickedWord) return;

//     const newReplacements = { ...replacements };
//     if (!newReplacements[clickedWord.toLowerCase()]) {
//       newReplacements[clickedWord.toLowerCase()] = [];
//     }
//     newReplacements[clickedWord.toLowerCase()].push(synonym);
//     setReplacements(newReplacements);

//     const newWords = text.split(" ").map((word) => {
//       return newReplacements[word.toLowerCase()]?.[0] || word;
//     });

//     setText(newWords.join(" "));
//   };

//   const handleResetClick = () => {
//     const newReplacements = { ...replacements };
//     const replacedWord =
//       newReplacements[clickedWord.toLowerCase()]?.slice(-1)[0];
//     if (replacedWord) {
//       newReplacements[clickedWord.toLowerCase()].pop();
//       setReplacements(newReplacements);

//       const newWords = text.split(" ").map((word) => {
//         return word.toLowerCase() === replacedWord.toLowerCase()
//           ? clickedWord
//           : word;
//       });

//       setText(newWords.join(" "));
//     }
//   };

//   const fetchSynonyms = async (word) => {
//     try {
//       const response = await axios.get(`http://localhost:5555/words/${word}`);
//       if (response.data && response.data.length > 0) {
//         setSynonyms(response.data);
//         setClickedWord(word);
//       } else {
//         setSynonyms([]);
//         setClickedWord(null);
//       }
//     } catch (error) {
//       console.error("Error fetching synonyms:", error);
//       setSynonyms([]);
//       setClickedWord(null);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 text-center">
//       <h1 className="text-3xl font-bold mb-4">Synonyms Generator</h1>
//       <p className="text-lg mb-8">
//         Ensure your writing is mistake-free with the help of this online grammar
//         checker.
//         <br /> Paste your text or start typing below to pinpoint grammatical
//         errors, spelling mistakes, and punctuation inaccuracies.
//       </p>
//       <div className="flex flex-col items-center">
//         <div className="w-1/2">
//           <textarea
//             value={text}
//             onChange={(e) => handleInputChange(e.target.value)}
//             placeholder="Start writing here..."
//             className="bg-gray-100 p-4 rounded w-full max-w-lg mb-4 shadow-md"
//             style={{
//               minHeight: "250px",
//               minWidth: "750px",
//               resize: "none",
//               border: "none",
//               marginLeft: "-60px",
//             }}
//           />
//         </div>
//         <div className="text-left">
//           {clickableWords.map((word, index) => (
//             <button
//               key={index}
//               onClick={() => {
//                 fetchSynonyms(word.trim());
//               }}
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
//             >
//               {word.trim()}
//             </button>
//           ))}
//         </div>
//         {synonyms.length > 0 && (
//           <div className="w-1/2">
//             <div className="bg-gray-200 p-4 rounded-lg mb-4">
//               <h3 className="text-lg font-bold mb-2">
//                 Synonyms for "{clickedWord}"
//               </h3>
//               <div className="bg-gray-100 p-4 rounded mt-4 synonyms-box flex flex-wrap justify-center">
//                 {synonyms.map((synonym, index) => (
//                   <button
//                     key={index}
//                     className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-2 rounded mr-2 mb-2"
//                     onClick={() => handleButtonClick(synonym)}
//                     style={{ minWidth: "100px", margin: "4px" }}
//                   >
//                     {synonym}
//                   </button>
//                 ))}
//                 <button
//                   className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2 mb-2"
//                   onClick={handleResetClick}
//                   style={{ minWidth: "100px", margin: "4px" }}
//                 >
//                   Reset
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TextToButtons;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { IconButton } from "@mui/material";
// import { FileCopy, Delete, Restore } from "@mui/icons-material";
// import "../index.css";

// const TextToButtons = () => {
//   const [text, setText] = useState("");
//   const [clickableWords, setClickableWords] = useState([]);
//   const [synonyms, setSynonyms] = useState([]);
//   const [clickedWord, setClickedWord] = useState(null);
//   const [replacements, setReplacements] = useState({});
//   const [originalText, setOriginalText] = useState("");

//   useEffect(() => {
//     document.body.classList.add("synonyms-page");
//     return () => {
//       document.body.classList.remove("synonyms-page");
//     };
//   }, []);

//   const handleInputChange = (value) => {
//     setText(value);
//     const words = value.split(" "); // Split the text into words
//     const clickable = words.filter((word) =>
//       ["help", "tool", "book", "task"].includes(word.toLowerCase())
//     );
//     setClickableWords(clickable);
//   };

//   const handleCopyText = () => {
//     navigator.clipboard.writeText(text);
//   };

//   const handleDeleteText = () => {
//     setOriginalText(text);
//     setText("");
//     setClickableWords([]);
//     setReplacements({});
//   };

//   const handleRestoreText = () => {
//     setText(originalText);
//     setClickableWords(findClickableWords(originalText));
//     setReplacements({});
//   };

//   const findClickableWords = (text) => {
//     const words = text.split(" "); // Split the text into words
//     return words.filter((word) =>
//       ["help", "tool", "book", "task"].includes(word.toLowerCase())
//     );
//   };

//   const handleButtonClick = (synonym) => {
//     if (!clickedWord) return;

//     const newReplacements = { ...replacements };
//     if (!newReplacements[clickedWord.toLowerCase()]) {
//       newReplacements[clickedWord.toLowerCase()] = [];
//     }
//     newReplacements[clickedWord.toLowerCase()].push(synonym);
//     setReplacements(newReplacements);

//     const newWords = text.split(" ").map((word) => {
//       return newReplacements[word.toLowerCase()]?.[0] || word;
//     });

//     setText(newWords.join(" "));
//   };

//   const handleResetClick = () => {
//     const newReplacements = { ...replacements };
//     const replacedWord = newReplacements[clickedWord.toLowerCase()]?.slice(-1)[0];
//     if (replacedWord) {
//       newReplacements[clickedWord.toLowerCase()].pop();
//       setReplacements(newReplacements);

//       const newWords = text.split(" ").map((word) => {
//         return word.toLowerCase() === replacedWord.toLowerCase() ? clickedWord : word;
//       });

//       setText(newWords.join(" "));
//     }
//   };

//   const fetchSynonyms = async (word) => {
//     try {
//       const response = await axios.get(`http://localhost:5555/words/${word}`);
//       if (response.data && response.data.length > 0) {
//         setSynonyms(response.data);
//         setClickedWord(word);
//       } else {
//         setSynonyms([]);
//         setClickedWord(null);
//       }
//     } catch (error) {
//       console.error("Error fetching synonyms:", error);
//       setSynonyms([]);
//       setClickedWord(null);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 text-center">
//       <h1 className="text-3xl font-bold mb-4">Synonyms Generator</h1>
//       <p className="text-lg mb-8">
//         Ensure your writing is mistake-free with the help of this online grammar
//         checker.<br/> Paste your text or start typing below to pinpoint grammatical
//         errors, spelling mistakes, and punctuation inaccuracies.
//       </p>
//       <div className="flex flex-col items-center">
//         <div className="w-1/2">
//           <textarea
//             value={text}
//             onChange={(e) => handleInputChange(e.target.value)}
//             placeholder="Start writing here..."
//             className="bg-gray-100 p-4 rounded w-full max-w-lg mb-4 shadow-md"
//             style={{ minHeight: "250px", minWidth: "750px", resize: "none", border: "none", marginLeft: "-60px"}}
//           />
//           <div className="flex justify-between">
//             <IconButton onClick={handleCopyText}>
//               <FileCopy />
//             </IconButton>
//             <IconButton onClick={handleDeleteText}>
//               <Delete />
//             </IconButton>
//             <IconButton onClick={handleRestoreText}>
//               <Restore />
//             </IconButton>
//           </div>
//         </div>
//         <div className="text-left">
//           {clickableWords.map((word, index) => (
//             <button
//               key={index}
//               onClick={() => {
//                 fetchSynonyms(word.trim());
//               }}
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
//             >
//               {word.trim()}
//             </button>
//           ))}
//         </div>
//         {synonyms.length > 0 && (
//           <div className="w-1/2">
//             <div className="bg-gray-200 p-4 rounded-lg mb-4">
//               <h3 className="text-lg font-bold mb-2">Synonyms for "{clickedWord}"</h3>
//               <div className="bg-gray-100 p-4 rounded mt-4 synonyms-box flex flex-wrap justify-center">
//                 {synonyms.map((synonym, index) => (
//                   <button
//                     key={index}
//                     className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-2 rounded mr-2 mb-2"
//                     onClick={() => handleButtonClick(synonym)}
//                     style={{ minWidth: "100px", margin: "4px" }}
//                   >
//                     {synonym}
//                   </button>
//                 ))}
//                 <button
//                   className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2 mb-2"
//                   onClick={handleResetClick}
//                   style={{ minWidth: "100px", margin: "4px" }}
//                 >
//                   Reset
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TextToButtons;

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CopyOutlined,
  DeleteOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Input } from "antd";

const TextToButtons = () => {
  const [text, setText] = useState("");
  const [clickableWords, setClickableWords] = useState([]);
  const [synonyms, setSynonyms] = useState([]);
  const [clickedWord, setClickedWord] = useState(null);
  const [replacements, setReplacements] = useState({});
  const [originalText, setOriginalText] = useState("");

  useEffect(() => {
    document.body.classList.add("synonyms-page");
    return () => {
      document.body.classList.remove("synonyms-page");
    };
  }, []);

  const handleInputChange = (value) => {
    setText(value);
    const words = value.split(" ");
    const clickable = words.filter((word) =>
      [
        "help",
        "tool",
        "book",
        "task",
        "graceful",
        "humble",
        "journey",
        "novice",
        "resilience",
        "invention",
      ].includes(word.toLowerCase())
    );
    setClickableWords(clickable);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
  };

  const handleDeleteText = () => {
    setOriginalText(text);
    setText("");
    setClickableWords([]);
    setReplacements({});
  };

  const handleRestoreText = () => {
    setText(originalText);
    setClickableWords(findClickableWords(originalText));
    setReplacements({});
  };

  const findClickableWords = (text) => {
    const words = text.split(" ");
    return words.filter((word) =>
      [
        "help",
        "tool",
        "book",
        "task",
        "graceful",
        "humble",
        "journey",
        "novice",
        "resilience",
        "invention",
      ].includes(word.toLowerCase())
    );
  };

  const handleButtonClick = (synonym) => {
    if (!clickedWord) return;

    const newReplacements = { ...replacements };
    if (!newReplacements[clickedWord.toLowerCase()]) {
      newReplacements[clickedWord.toLowerCase()] = [];
    }
    newReplacements[clickedWord.toLowerCase()].push(synonym);
    setReplacements(newReplacements);

    const newWords = text.split(" ").map((word) => {
      return newReplacements[word.toLowerCase()]?.[0] || word;
    });

    setText(newWords.join(" "));
  };

  const handleResetClick = () => {
    const newReplacements = { ...replacements };
    const replacedWord =
      newReplacements[clickedWord.toLowerCase()]?.slice(-1)[0];
    if (replacedWord) {
      newReplacements[clickedWord.toLowerCase()].pop();
      setReplacements(newReplacements);

      const newWords = text.split(" ").map((word) => {
        return word.toLowerCase() === replacedWord.toLowerCase()
          ? clickedWord
          : word;
      });

      setText(newWords.join(" "));
    }
  };

  const fetchSynonyms = async (word) => {
    try {
      const response = await axios.get(`http://localhost:3000/words/${word}`);
      if (response.data && response.data.length > 0) {
        setSynonyms(response.data);
        setClickedWord(word);
      } else {
        setSynonyms([]);
        setClickedWord(null);
      }
    } catch (error) {
      console.error("Error fetching synonyms:", error);
      setSynonyms([]);
      setClickedWord(null);
    }
  };

  return (
    <div>
      <div className="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
        <img
          src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="absolute top-0 left-0 min-h-full ob"
          alt=""
        />
        <div className="relative z-10 max-w-screen-lg mx-auto grid grid-cols h-full items-center mt-20 mb-20 text-center">
          <div className="col-span-6">
            <h1 className="text-red-300 font-extrabold text-6xl mb-8">
              {" "}
              Improve Your Vocabulary and Writing Skills
            </h1>
            <h1 className="text-white font-extrabold text-4xl mb-8">
              Want to enrich your vocabulary and improve your English fluency?
            </h1>
            <p className="text-stone-100 text-base">
              Elevate your language proficiency with our synonym generator!
              Enhance your writing, expand your vocabulary, and communicate more
              effectively in English.
            </p>
            <button
              className="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10"
              onClick={() => {
                document.getElementById("synonyms-section").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      <div
        id="synonyms-section"
        className="container mx-auto px-4 py-8 text-center mt-10 background-pattern"
      >
        <div className="bg-gray-100 rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Synonyms Finder
          </h1>

          <div className="bg-white rounded-lg p-6 mb-6 shadow-md">
            <h2 className="text-xl text-gray-700 mb-4">Instructions</h2>
            <ol className="list-decimal pl-6 text-left">
              <li>
                <strong>Enter or Copy-Paste Your Sentence:</strong> Start by
                typing or pasting your sentence into the provided text area.
              </li>
              <li>
                <strong>View Detected Words:</strong> The system will
                automatically detect the words in your sentence and display them
                as buttons below the text area.
              </li>
              <li>
                <strong>Click on Word Buttons:</strong> Click on any word button
                to view a list of synonyms for that word.
              </li>
              <li>
                <strong>Choose a Synonym:</strong> From the list of synonyms,
                click on the synonym you want to replace the word with in your
                sentence.
              </li>
              <li>
                <strong>Replace the Word:</strong> The system will automatically
                replace the word in your sentence with the selected synonym.
              </li>
              <li>
                <strong>Reset to Original:</strong> If you want to revert to the
                original word, click the reset button in the synonyms list.
              </li>
              <li>
                <strong>Additional Options:</strong> Use the buttons below the
                text area to copy the text, delete the text, or restore deleted
                text.
              </li>
              <li>
                <strong>Repeat as Needed:</strong> You can repeat this process
                for any word in your sentence, replacing multiple words with
                synonyms as desired.
              </li>
            </ol>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full md:w-1/2">
              <Input.TextArea
                value={text}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="Start writing here..."
                className="mb-4"
                autoSize={{ minRows: 8, maxRows: 100 }} // Adjust these values for your desired height
                style={{
                  width: "800px", // Increase the width as needed
                  minHeight: "200px",
                  maxHeight: "400px",
                }}
              />
              <div className="flex justify-between mb-4">
                <button
                  onClick={handleCopyText}
                  className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300"
                >
                  <CopyOutlined /> Copy Text
                </button>
                <button
                  onClick={handleDeleteText}
                  className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300"
                >
                  <DeleteOutlined /> Delete Text
                </button>
                <button
                  onClick={handleRestoreText}
                  className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300"
                >
                  <ReloadOutlined /> Restore Text
                </button>
              </div>
            </div>
            <div className="w-full">
              {clickableWords.map((word, index) => (
                <button
                  key={index}
                  onClick={() => {
                    fetchSynonyms(word.trim());
                  }}
                  className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mr-2 mb-2 shadow-md transition duration-300"
                >
                  {word.trim()}
                </button>
              ))}
            </div>
            {synonyms.length > 0 && (
  <div className="w-full mt-4"> {/* Adjust the margin-top value as needed */}
    <div className="bg-gray-100 p-2 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2">
        Synonyms for "{clickedWord}"
      </h3>
      {synonyms.map((synonym, index) => (
        <button
          key={index}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-2 rounded mr-2 mb-2 shadow-md transition duration-300"
          onClick={() => handleButtonClick(synonym.toLowerCase())}
        >
          {synonym.toLowerCase()}
        </button>
      ))}
      <button
        className="bg-red-800 hover:bg-red-900 text-white font-bold py-1 px-2 rounded mt-2 shadow-md transition duration-300"
        onClick={handleResetClick}
      >
        <ReloadOutlined /> Reset
      </button>
    </div>
  </div>
)}

          </div>
        </div>
      </div>
    </div>
  );
};

export default TextToButtons;
