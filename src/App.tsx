import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Navbar } from './NavbarAndFooter/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage/HomePage';
import { SearchPage } from './SearchPage/SearchPage';
import { VenueDetailPage } from './VenueDetailPage/VenueDetailPage';
import { Footer } from './NavbarAndFooter/Footer';
import { Booking } from './VenueDetailPage/Components/Booking';



function App() {
  return (
    <div className="main-content" style={{ paddingBottom: "60px" }}>
   
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
        <Route path="/booking/:venueId" element={<Booking/>} />
        <Route path="/view/:venueId" element={<VenueDetailPage/>}></Route>

      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
