import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Whiskey from './components/Whiskey'
import Categories from './components/Categories'
import AddWhiskey from './components/AddWhiskey'
import Nav from './components/Nav'
import Home from './components/Home'
import Profile from './components/Profile'




function App() {
  return (
    <>
      <BrowserRouter >
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />      
          <Route path='/whiskies' element={<Whiskey />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/newwhiskey' element={<AddWhiskey />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
