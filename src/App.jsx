import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Produtos' element={<Produtos/>}/>
        <Route path='/Sobre' element={<Sobre/>}/>
      </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
