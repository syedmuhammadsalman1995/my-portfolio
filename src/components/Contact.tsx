import React from 'react'
import { MdEmail } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
function Contact() {
  return (
    <div id='Contact' className='container pt-32'>
          <img className='p-3 m-auto' src="contact.jpg " alt="" srcSet="" width={700} height={100} />
              <br />
              <h1 className='text-center underline font-bold text-4xl text-purple-700 justify-between'  data-aos="zoom-in-left"> "Contact Us" </h1><br />
  
              <div className="flex gap-3 items-center p-3  "  data-aos="zoom-in-left"><MdContactPhone size={30}/> +92-303-2903896 ;</div>
              <div className='flex gap-3 items-center p-3  '  data-aos="zoom-in-left"><MdEmail size={30}/> salmansharf66@gmail.com; </div>
              
            <div>   
                  <div className='space-y-8'  data-aos="zoom-in-left">
                  <div className='flex flex-col  gap-3 p-3 '>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-accent'
                    id='name' />
                    </div>

                    <div className='flex flex-col  gap-3 p-3'>
                    <label htmlFor="email">Email</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-accent '
                    id='email' />
                    </div>

                    <div className='flex flex-col  gap-3 p-3'>
                    <label htmlFor="message">Message</label>
                    <textarea
                    className='bg-transparent border border-accent'
                    id='message' rows={8} />

                    
                    </div>
                    <button className='bg-violet-700 p-2 m-3 px-8'>Send</button>
                     
                     </div>
                </div>      
         </div> 

  )
}

export default Contact