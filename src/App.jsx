import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// IMPORT CSS Files
import "./App.css";
// PAGES
import Postpage from "./pages/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={Postpage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
