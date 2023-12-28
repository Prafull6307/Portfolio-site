
import React from 'react'
import './Header.css'

const Header = () => { 
  return (
    <div className="con  ">
     <div className='head1 font-semibold text-base font-serif px-2 py-2 '><h1 className="text-2xl text-white">Prafull Srivastava</h1></div>
     <div className="head2 space-x-4 scroll-smooth	">
      <a href="/Home" className="  font-semibold text-lg hover:text-blue-600   cursor-default">Home</a>
      <a href="/About" className="  font-semibold text-lg hover:text-blue-600   cursor-default">About</a>
      <a href="/Skills"  className="  font-semibold text-lg hover:text-blue-600  cursor-default">Skills</a>
      <a href="/Portfolio" className="  font-semibold text-lg hover:text-blue-600  cursor-default" >Portfolio</a>
      <a href="/Contact" className= "  font-semibold text-lg hover:text-blue-600  cursor-default">Contact</a>
     </div>
     <div className="head3"><button className= "but bg-blue-500 px-2 py-2 hover:text-2xl  rounded-full shadow-md hover:text-white hover:bg-custom-lightblue transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Hire</button></div>
    </div>
  )
}

export default Header


