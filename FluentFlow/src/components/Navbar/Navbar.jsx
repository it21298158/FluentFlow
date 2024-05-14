import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/FluentFlowLogo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Import the useSelector hook

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser); // Get currentUser from the Redux store

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });

    // Simulate setting currentUser after some asynchronous operation (e.g., fetching user data)
    setTimeout(() => {
      setCurrentUser({ profilePicture: "profile-picture-url" });
    }, 1000); // Simulating a delay of 1 second
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <Link to="/home">
      <img src={logo} alt="" className="logo" />
      </Link>
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/speechTranscript">
          <li>Speaking</li>
        </Link>
        <Link to="/books">
          <li>Reading</li>
        </Link>
        <Link to="/synonymsGenorator">
          <li>Find Synonyms</li>
        </Link>
        <Link to="/about">
          <li>Vocabulary</li>
        </Link>
        <Link to="/aboutUs">
          <li>About Us</li>
        </Link>
        <Link to="/profile">
          <li>{currentUser ? (
            <img
              src={currentUser.profilePicture}
              alt="profile"
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <li>Sign In</li>
          )}
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

//Import useState, useEffect, and useContext
// import React, { useEffect, useState, useContext } from "react";
// import "./Navbar.css";
// import logo from "../../assets/FluentFlowLogo.png";
// import { Link } from "react-router-dom";

// // Import AuthContext (assuming you have a context for managing authentication)
// //import { AuthContext } from "../../contexts/AuthContext";


// const Navbar = () => {
//   const [sticky, setSticky] = useState(false);
//   const { currentUser } = useContext(AuthContext); // Use context to access currentUser

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       window.scrollY > 50 ? setSticky(true) : setSticky(false);
//     });
//   }, []);

//   return (
//     <nav className={`container ${sticky ? "dark-nav" : ""}`}>
//       <img src={logo} alt="" className="logo" />
//       <ul>
//         <Link to="/home">
//           <li>Home</li>
//         </Link>
//         <Link to="/speechTranscript">
//           <li>Speaking</li>
//         </Link>
//         <Link to="/books">
//           <li>Reading</li>
//         </Link>
//         <Link to="/synonymsGenorator">
//           <li>Find Synonyms</li>
//         </Link>
//         <Link to="/about">
//           <li>Vocabulary</li>
//         </Link>
//         <Link to="/profile">
//           <li>
//             {currentUser ? (
//               <img
//                 src={currentUser.profilePicture}
//                 alt="profile"
//                 className="h-7 w-7 rounded-full object-cover"
//               />
//             ) : (
//               "Sign In"
//             )}
//           </li>
//         </Link>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
