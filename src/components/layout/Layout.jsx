// src/components/layout/Layout.jsx
import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div data-scroll-container>
        <Navbar />
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
