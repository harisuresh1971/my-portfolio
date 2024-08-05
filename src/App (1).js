import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import ProjectDetail from './components/ProjectDetail';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="container mt-5 pt-5">
          <Routes>
            <Route path="/" element={<>
              <Element name="home"><Home /></Element>
              <Element name="about"><About /></Element>
              <Element name="projects"><Projects /></Element>
              <Element name="skills"><Skills /></Element>
              <Element name="contact"><Contact /></Element>
              <Element name="testimonials"><Testimonials /></Element>
            </>} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
