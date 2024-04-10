import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import AboutPage from './components/pages/AboutPage/AboutPage';
import ProjectsPage from './components/pages/ProjectsPage/ProjectsPage';
import ContactPage from './components/pages/ContactPage/ContactPage';
import ResumePage from './components/pages/ResumePage/ResumePage';
import ExperiencePage from './components/pages/ExperiencePage/ExperiencePage';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
