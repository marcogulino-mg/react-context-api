import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// IMPORT CSS Files
import "./App.css";
// IMPORT Layouts
import Defaultlayout from "./layouts/DefaultLayout";
// PAGES
import Postpage from "./pages/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Defaultlayout}>
          <Route index Component={Postpage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
