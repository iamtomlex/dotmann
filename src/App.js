import './App.css'

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Event from './pages/Event'
import Project from './pages/Project'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/event' element={<Event />} />
        <Route path='/project' element={<Project />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
