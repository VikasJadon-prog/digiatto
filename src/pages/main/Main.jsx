import React from 'react';
import Header from '../header/Header'
import { Routes,Route } from 'react-router-dom';
import Contact from '../contactUs/Contact';
import Services from '../services/Services';
import About from '../aboutUs/About';
import Home from '../home/Home';
import Portfolio from '../portfolio/Portfolio';
import Blog from '../blog/Blog';
import Industries from '../industries/Industries';
import DedicatedDev from '../dedicatedDev/DedicatedDev';
import Footer from '../../components/footer/Footer';

const Main = () => {
  return (
   <>
   <Header/>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/services" element={<Services/>}/>
   <Route path="/contact" element={<Contact/>}/>
   <Route path="/dedicatedDev" element={<DedicatedDev/>}/>
   <Route path="/industries" element={<Industries/>}/>
   <Route path="/portfolio" element={<Portfolio/>}/>
   <Route path="/blog" element={<Blog/>}/>
  
   </Routes>
   <Footer/>
   </>
  )
}

export default Main