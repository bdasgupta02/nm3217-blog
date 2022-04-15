import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Assignment1 from './pages/Assignment1';
import Assignment2 from './pages/Assignment2';
import Assignment3 from './pages/Assignment3';

import LEA from './pages/LEA';

import PageWrapper from './components/PageWrapper';
import LEB from './pages/LEB';
import LEC from './pages/LEC';
import LED from './pages/LED';
import LEE from './pages/LEE';
import LEF from './pages/LEF';
import LEG from './pages/LEG';
import FinalProject from './pages/FinalProject';
const Placeholder = () => (
    <PageWrapper>
        <a style={{ color: '#000' }} href="https://bikramjit-dasgupta-nm3217.blog/">
            Oops, you might be lost! Please access the website by clicking here.
        </a>
        <div style={{ width: '1px', height: '3000px' }}></div>
    </PageWrapper>
);

function App() {
    return (
        <Router>
            <div style={{ flexGrow: 1, display: 'flex', height: '100vh' }}>
                <Navbar />
                <Routes>
                    <Route path="/assignments" element={<Placeholder />} />
                    <Route path="/assignment/1" element={<Assignment1 />} />
                    <Route path="/assignment/2" element={<Assignment2 />} />
                    <Route path="/assignment/3" element={<Assignment3 />} />
                    <Route path="/le/1" element={<LEA />} />
                    <Route path="/le/2" element={<LEB />} />
                    <Route path="/le/3" element={<LEC />} />
                    <Route path="/le/4" element={<LED />} />
                    <Route path="/le/5" element={<LEE />} />
                    <Route path="/le/6" element={<LEF />} />
                    <Route path="/le/7" element={<LEG />} />
                    <Route path="/final_project" element={<FinalProject />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
