import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Email = () => {
     const[add,setAdd] =useState("")
     const[mail,setMail]=useState("")
     const[mess,setMess]=useState("")
     
     const form =useRef();

     const sendEmail = (e) => {
       e.preventDefault();
   
       emailjs.sendForm('service_riipsqf', 'template_d2v4dql', form.current, 'yeY6gLA93VTFd-QKE')
         .then((result) => {
             console.log(result.text);
         }, (error) => {
             console.log(error.text);
         });
     };
  return (
    
     <>
      <h1 className="flex justify-center py-4 font-bold text-2xl underline bg-custom-lightblue">Contact Me</h1>
     <section className=" bg-custom-lightblue py-9 flex">

    
    <div className=" w-full flex-col justify-center shadow-lg space-y-2  ">
    
      <div className="  bg-custom-lightpurple transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 rounded-lg">
      
          <i class="fa-brands fa-whatsapp flex justify-center py-2 text-2xl text-white"></i>
         <h1 className='text-lg text-white'>Please Contact Me On My whatsapp Number:-<span className="font-bold text-custom-lightblue">8808032024</span> </h1> 
           
      </div>
     
    
     <div className=" bg-custom-lightpurple transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 rounded-lg">
     
     <i class="fa-regular fa-envelope flex justify-center py-2 text-2xl text-white"></i>
         <h1 className='text-lg text-white'>Please Contact Me On My Email:-<span className="font-bold text-custom-lightblue">prafullps6307@gmail.com</span> </h1> 
         
     </div>
    <div className=" bg-custom-lightpurple transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 rounded-lg">
    <i class="fa-solid fa-mobile-screen-button flex justify-center py-2 text-2xl text-white"></i>
         <h1 className='text-lg text-white'>Please Contact Me My On Mobile Number:-<span className="font-bold text-custom-lightblue">8808032024</span> </h1> 
          </div> 
    
    </div>
    <div className='w-full  '>
          <form ref={form} onSubmit={sendEmail} className='flex-col text-center space-y-2 px-5  '>
      <input type="text" name="name" placeholder='Your Full Name' value={add} onChange={(e)=>setAdd(e.target.value)} required className="rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 bg-white"/>
     <input type="email" email="name" placeholder='Your Email' value={mail} onChange={(e)=>setMail(e.target.value)} required className='w-full rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 bg-white'/>
   <textarea name="message" rows="7" placeholder='Your Message' value={mess} onChange={(e)=>setMess(e.target.value)} required className='w-full rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 bg-white'/>
   <button type="submit"  class=" btn btn-primary focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Send Message</button>
    </form>    
    </div>
   
  
    
    </section>
    </>
  )
}

export default Email