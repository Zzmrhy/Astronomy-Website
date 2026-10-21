import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './css/App.css'
import {Routes, Route} from 'react-router-dom';
import ModulusFormula from './pages/Modulus';
import Home from './pages/Home';
import NavBar from './components/NavBar'

function App() {

  return (
    <main>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/modulus" element={<ModulusFormula />} />
      </Routes>
    </main>
  )
}

export default App
