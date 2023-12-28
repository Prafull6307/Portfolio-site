import React from 'react'
import IMG1 from '../assets/IMG1.png'
import IMG2 from '../assets/IMG2.png'
const Recent = () => {
  return (
     <>
    <section className="bg-custom-lightblue">
   <h5 className="flex justify-center py-4 font-semibold text-2xl text-slate-600"> My Recent Work</h5>
   <h2 className="flex justify-center py-2 font-bold text-2xl underline my-5">Portfolio</h2>
   <div className=" justify-center content-center grid grid-cols-2 gap-4 px-2 py-2 rounded bg-custom-lightpurple  ">
   <article>
    <div>
      <img src={IMG1} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"></img>
    </div>
   <h1 className="my-4 font-semibold text-white">This is my portfolio</h1>
   <a href="https://github.com/Prafull6307" className="btn bg-slate-400 rounded px-2  py-1 mx-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600 duration-300  ">Github</a>
   <a href="https://prafull6307.github.io/Bubble-game/" className="btn  rounded px-2 py-1 bg-cyan-400 text-white font-medium transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Demo</a>
  </article>
  <article>
    <div>
      <img src={IMG2} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"></img>
    </div>
   <h1 className="my-4 font-semibold text-white mx-2 ">This is my portfolio</h1>
   <a href="https://github.com/Prafull6307" className="btn bg-slate-400 rounded px-2 py-1 mx-2   transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600 duration-300">Github</a>
   <a href="" className="btn bg-cyan-400 rounded px-2 py-1 text-white font-medium transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Demo</a>
  </article>
   </div>



    </section>
    </>
  )
}

export default Recent