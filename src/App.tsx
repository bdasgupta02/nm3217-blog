import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Assignment1 from "./pages/Assignment1";

import PageWrapper from "./components/PageWrapper";
const Placeholder = () => (
  <PageWrapper>
    <a style={{ color: '#000' }} href='https://bikramjit-dasgupta-nm3217.blog/'>Oops, you might be lost! Please access the website by clicking here.</a>
    <div style={{ width: "1px", height: "3000px" }}></div>
  </PageWrapper>
);

function App() {
  return (
    <Router>
      <div style={{ flexGrow: 1, display: "flex", height: "100vh" }}>
        <Navbar />
        <Routes>
          {/* Add pages here with Routes */}
          <Route path="/assignments" element={<Placeholder />} />
          <Route path="/assignment/1" element={<Assignment1 />} />
          <Route path="/assignment/2" element={<Placeholder />} />
          <Route path="/assignment/3" element={<Placeholder />} />
          <Route path="/lecture_exercises" element={<Placeholder />} />
          <Route path="/lecture_exercise/:id" element={<Placeholder />} />
          <Route path="/final_project" element={<Placeholder />} />

          {/* Keep the last one for the home page */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
