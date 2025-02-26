import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
// IMPORT CSS Files
import "./App.css";
// IMPORT Contexts
import PostContext from "./contexts/PostContext";
// IMPORT Layouts
import Defaultlayout from "./layouts/DefaultLayout";
// PAGES
import Postpage from "./pages/PostPage";

function App() {
  // State VARs
  const [post, setPost] = useState([]);

  function showsPosts() {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => showsPosts(), []);

  return (
    <PostContext.Provider value={{ post }}>
      <BrowserRouter>
        <Routes>
          <Route Component={Defaultlayout}>
            <Route index Component={Postpage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostContext.Provider>
  );
}

export default App;
