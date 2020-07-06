import React from 'react';
import './App.css';

import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Card from './components/contactCard'
import Contact from './components/contact'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <About />
        <Card />
        <Contact />
    </div>
    
  );
}

export default App;
