import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Navbar } from './NavbarAndFooter/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage/HomePage';
import { SearchPage } from './SearchPage/SearchPage';

function App() {
  return (
    <div >
   
   <BrowserRouter>
   <Navbar/>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/another" element={<div>Another</div>} />
        <Route path="/page" element={<div>Page</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<div>Contact</div>} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
