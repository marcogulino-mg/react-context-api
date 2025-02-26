import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  const [post, setPost] = useState({});

  return (
    <PostContext.Provider value={post}>
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
