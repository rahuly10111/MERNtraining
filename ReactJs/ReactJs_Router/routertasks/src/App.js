import { Route, Routes, BrowserRouter } from "react-router-dom"
import './App.css';
import NavBar from "./Component/NavBar";
import Photos from "./Component/Photos";
import Commnets from "./Component/Comments";
import UserProfile from "./Component/UserProfile"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<UserProfile />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/comments" element={<Commnets />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
