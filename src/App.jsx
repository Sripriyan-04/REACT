
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/sections/Navbar';
import Header from './components/sections/Header';
import About from './components/sections/About';
import Work from './components/sections/Work';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import Express from './components/sections/Express';
import './index.css';
const App = () => {
  return (
    <>
    <Header />
     <Navbar/>
   <About/>
   <Express/>
    <Work/>
    <Contact/>
    <Footer/>
    </>
   

  )
}

export default App;
