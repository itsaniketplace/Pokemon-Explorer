import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
