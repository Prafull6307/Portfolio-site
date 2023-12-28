import React from 'react'
import Resume from '../assets/Resume.pdf'
const Me = () => {
  return (
    <> <div className="bg-custom-lightblue py-10 ">
      <h1 className="flex justify-center text-3xl font-semibold underline my-5   ">About Me</h1>
      <div className='w-full flex ' >
        <div className=" w-full me1 flex justify-center">
          <div className="shadow-xl border bg-custom-lightpurple">
          <i className="fa-solid fa-medal flex justify-center text-2xl text-custom-lightwrinkle"></i>
           <h1 className="font-extrabold flex justify-center text-custom-lightwrinkle ">Internship</h1>
           <p className="text-custom-lightwrinkle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque enim aperiam inventore sint. Ad fugit, sunt assumenda incidunt doloribus atque possimus sed rerum optio fugiat quaerat at iusto impedit officiis.</p>
          </div>
          <div className=" bg-custom-lightpurple shadow-xl border">
          <i class="fa-solid fa-school flex justify-center text-2xl text-custom-lightwrinkle"></i>
          <h1 className="flex justify-center font-extrabold text-custom-lightwrinkle">Graduation</h1>
          <p className="text-custom-lightwrinkle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptate nisi, adipisci iure eum aut incidunt illo minima sit quae necessitatibus labore reiciendis sed architecto eius voluptates consequuntur. Id, modi.</p>
          </div>
          <div className=" bg-custom-lightpurple shadow-xl border">
          <i class="fa-solid fa-venus-mars flex justify-center text-2xl text-custom-lightwrinkle"></i>
          <h1 className="text-custom-lightwrinkle font-extrabold flex justify-center ">Projects</h1>
          <p className="text-custom-lightwrinkle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque omnis, assumenda nulla corporis reiciendis veritatis, quisquam deleniti a quidem quibusdam hic necessitatibus facere minus, ea velit quasi? Nam, quae nihil?</p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full ">
        <div><a href={Resume} download><button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Download Resume</button></a>
         </div>
        <div> <button type="button" class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Lets Talk..</button> </div>
        </div>
      </div>
      </div>
    </>  
  )
}

export default Me