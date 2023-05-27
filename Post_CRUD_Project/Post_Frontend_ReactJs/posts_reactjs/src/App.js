import { Route, Routes, BrowserRouter } from "react-router-dom"
import './App.css';
import NavBar from "./Components/NavBar";
import PostsForm from "./Components/PostsForm";
import GetPost from "./Components/GetPost";
import ViewPosts from "./Components/ViewPosts";
import EditPosts from "./Components/EditPosts";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<PostsForm />} />
          <Route path="/getposts" element={<GetPost />} />
          <Route path="/getpostsid/:id" element={<ViewPosts/>} />
          <Route path="/putposts/:id" element={<EditPosts/>} />
          <Route path="/photos" element />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
