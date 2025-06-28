import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Project from'./Project';
import Skills from './Skills';
import Experience from './Experience';
import Navbar from './Navbar';
import Club from './Club';
import Contact from './Contact';

const App = () => {
  return (
    <div>
      <center>
        <Navbar/>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/project' element={<Project/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/club' element={<Club/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
      </center>
    </div>
  )
}

export default App
