import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Navbar from './components/navbar/Navbar';
import BlogListing from './pages/blogs/BlogListing';
import About from './pages/about/About';


function App() {
  
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path="/blogs" element={<BlogListing />} />

            
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;