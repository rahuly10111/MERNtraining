import { Route, Routes, BrowserRouter } from "react-router-dom"
import './App.css';
import image from "../src/IMG_0234.jpeg"
import NavBar from "./Components/NavBar";
import PostsForm from "./Components/PostsForm";
import GetPost from "./Components/GetPost";
import ViewPosts from "./Components/ViewPosts";
import EditPosts from "./Components/EditPosts";
import UserRegistration from "./Components/UserRegistration";
import UserLogin from "./Components/UserLogin";
import ViewAllUser from "./Components/ViewAllUser";
import Protected from "./Components/Protected";
import UserProfile from "./Components/UserProfile";
import EditUsers from "./Components/EditUsers";
import ViewUser from "./Components/ViewUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/usersignin" element={<UserRegistration />} />
          <Route path="/userprofile" element={<Protected Component={UserProfile} />} />
          <Route path="/getuser" element={<Protected Component={ViewAllUser} />} />
          <Route path="/addposts" element={<Protected Component={PostsForm} />} />
          <Route path="/getposts" element={<Protected Component={GetPost} />} />
          <Route path="/getpostsid/:id" element={<Protected Component={ViewPosts} />} />
          <Route path="/putposts/:id" element={<Protected Component={EditPosts} />} />
          <Route path="/photos" element />
          <Route path="/putuser/:id" element={<Protected Component={EditUsers} />} />
          <Route path="/viewuser/:id" element={<Protected Component={ViewUser} />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
