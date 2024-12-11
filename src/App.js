import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FeaturedPost from './components/FeaturedPost';
import LatestPosts from './components/LatestPosts';
import Advertisement from './components/Advertisement';
import Footer from './components/Footer';
import SinglePostPage from './components/SinglePostPage'; // Import SinglePostPage component

import SignUp from './components/SignUp';
import Login from './components/Login';
import Contact from './components/Contact';
import './App.css'; // Import the CSS file here



const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<FeaturedPost />} />
          <Route path="/blog" element={<LatestPosts />} />
          <Route path="/single-post" element={<SinglePostPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

        </Routes>
       
      
      <Footer />



      </div>
    </Router>
  );
};

export default App;
