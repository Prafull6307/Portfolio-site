import React from 'react'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import aboutImage from '../assets/photo.png'


const About = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend-Developer...","Backend-Developer..."], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 500,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 100,
      loop:true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
   
    <>
    <div className="main-container  flex justify-center bg-custom-lightblue   ">
     <div  className="data w-full bg-custom-lightblue   ">
      <div className="  flex justify-center content-center mx-5 my-36   ">
          <div>
          <h3 className="text-white text-2xl font-semibold">Hi, I am</h3>
          <h1 className=" text-5xl font-bold font-sarif animate-pulse delay-75 text-custom-lightpurple	">Prafull Srivastava</h1>
          <h2 className=" text-white text-2xl font-semibold">And I am a <span className="text-3xl underline" ref={el}></span></h2>
         <p className="text-white"> Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eius dolor nisi maiores nam quis dicta nihil. Magni asperiores totam ipsam reiciendis odit! Cupiditate, 
          minus? Quia quos maiores magnam distinctio voluptas?</p>
          </div></div>
          <div></div>
          <div className="flex justify-center content-center  space-x-5 my-2  ">
          <a href="https://www.linkedin.com/in/prafull-srivastava-a0298a24a/" className=" px-3 py-3 text-3xl bg-gray-800 rounded-full hover:bg-blue-700 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"> <i  className=" fa-brands fa-linkedin "></i></a>
          <a href="https://github.com/Prafull6307" className="px-3 py-3 text-3xl  bg-gray-800 rounded-full hover:bg-blue-700 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><i className=" fa-brands fa-github "></i></a>
          <a href="hello" className="px-3 py-3 text-3xl  bg-gray-800 rounded-full hover:bg-blue-700 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  "><i class="  fa-brands fa-whatsapp "></i></a>
          </div>
         
          <div className="flex justify-center"><button type="button" class="text-white bg-custom-lightpurple hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-3 me-2 mb-2  dark:hover:bg-custom-blue focus:outline-none dark:focus:ring-blue-800 shadow hover:shadow-2xl delay-100 animate-bounce 				">Contact Us</button>
          </div>
          </div>
          
     <div className=" relative photo w-full flex transition ease-in-out delay-150 hover:-translate-x-5 hover:scale-40 duration-300 hover:origin-bottom "><img className=" rounded-full  border-4 border-custom-lightpurple shadow-2xl   " src={aboutImage}/></div>
     
    </div></>
  )
}

export default About