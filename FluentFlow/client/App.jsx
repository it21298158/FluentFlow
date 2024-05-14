import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Navbar_Home from "./components/Navbar/Navbar_Home.jsx";
import HomeHomeBeforeLogin from "./pages/HomeBeforeLogin";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import SynonymsGenerator from "./pages/SynonymsGenerator.jsx";
import SpeechTranscript from "./pages/SpeechTranscript.jsx";
import PrivateRoute from "./components/PrivateRoute";
import AboutUs from "./pages/AboutUs.jsx";

import Navbar_books from './Layout/Navbar_books.jsx'
import Home_books from './pages/Home_books.jsx'
import NewBooks from './pages/NewBooks.jsx'
import BookCollection from './pages/BookCollection.jsx'
import AddBook from './pages/AddBook.jsx'
import ReadBook from './pages/ReadBook.jsx'
import EditDetails from './pages/EditDetails.jsx'
import DeleteDetails from './pages/DeleteDetails.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <><Navbar_Home /><HomeHomeBeforeLogin /> </>} />
        <Route path="/home" element={<><Navbar /><Home /> </>} />
        <Route path="/about" element={<><Navbar /><About /> </>} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<><Navbar /><Profile /> </>} />
        </Route>
        <Route path="/synonymsGenorator" element={<><Navbar /> <SynonymsGenerator /> </>} />
        {/* <Route path="/reminderAll" element={<><Navbar /> <ReminderAll /> </>} /> */}
        <Route path="/speechTranscript" element={<><Navbar /><SpeechTranscript /> </>} />
        {/* <Route path="/reminder" element={<><Navbar /> <Reminder /> </>} /> */}
        <Route path="/aboutUs" element={<><Navbar /><AboutUs /> </>} />

        <Route path="/books" element={<><Navbar /><Home_books/></>}></Route>
        <Route path="/New Books" element={<><Navbar /><NewBooks/></>}></Route>
        <Route path="/Book Collection" element={<><Navbar /><BookCollection/></>}></Route>
        <Route path="/Add Book" element={<><Navbar /><AddBook/></>}></Route>
        <Route path="Read/:id" element={<><Navbar /><ReadBook/></>}></Route>
        <Route path="Edit/:id" element={<><Navbar /><EditDetails/></>}></Route>
        <Route path="Delete/:id" element={<><Navbar /><DeleteDetails/></>}></Route>

        {/* <Route path="/books" element={<><Navbar_books /><Home_books/></>}></Route>
        <Route path="/New Books" element={<><Navbar_books /><NewBooks/></>}></Route>
        <Route path="/Book Collection" element={<><Navbar_books /><BookCollection/></>}></Route>
        <Route path="/Add Book" element={<><Navbar_books /><AddBook/></>}></Route>
        <Route path="Read/:id" element={<><Navbar_books /><ReadBook/></>}></Route>
        <Route path="Edit/:id" element={<><Navbar_books /><EditDetails/></>}></Route>
        <Route path="Delete/:id" element={<><Navbar_books /><DeleteDetails/></>}></Route> */}


      </Routes>
    </BrowserRouter>
  );
}
