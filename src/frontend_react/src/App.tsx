import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/consult" element={<div>Consultation Page</div>} />
            <Route path="/healthcare" element={<div>Healthcare Page</div>} />
            <Route path="/health-support" element={<div>Health Support Page</div>} />
            <Route path="/know-yourself" element={<div>Know Yourself Page</div>} />
            <Route path="/donations" element={<div>Donations Page</div>} />
            <Route path="/signin" element={<div>Sign In Page</div>} />
            <Route path="/login" element={<div>Login Page</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
