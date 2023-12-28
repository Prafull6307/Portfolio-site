import { useState } from 'react'
import './App.css'
import Me from './components/Me'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Recent from './components/Recent'
import Email from './components/Email'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
 <Header></Header>
  <About></About>
  <Me></Me>
  <Skills></Skills>
  <Recent></Recent>
  <Email></Email>
  <Footer></Footer>
    </>
  )
}

export default App
