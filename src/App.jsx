// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Blogs from './pages/blogs/Blogs';
import BlogDetail from './pages/blogs/BlogDetail';
import Layout from './components/layout/Layout';
import Services from './pages/services/Services';
import Portfolio from './pages/portfolio/Portfolio';
import Careers from './pages/Careers/Careers';
import ProjectDiscussion from './pages/discuss/ProjectDiscussion';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/discuss" element={<ProjectDiscussion />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
