
import React from 'react'



function Navbar() {
  return (

    <nav>
      <div>
        <header className='text-white body-font'>
          <div className='container'>

            <img src="/logo.png" alt="logo" className='w-24 h-11 rounded-full' />
            <span className="ml-3 text-xl underline">Portfolio</span>
          </div>
        </header>
      
      <ul className=' gap-3 underline font-bold  px-4 py-5 justify-end  h-auto  sm:h-12 md:h-16 lg:h-16 flex flex-col sm:flex-row bg-violet-700 rounded-full'>

        <li className=" hover:text-purple-400"><a href="#Home">Home</a></li>
        <li className=" hover:text-purple-400"><a href="#About">About Us</a></li>
        <li className=" hover:text-purple-400"><a href="#Skills">Skills</a></li>
        <li className=" hover:text-purple-400"><a href="#Experience">Experience</a></li>
        <li className=" hover:text-purple-400"><a href="#Education">Education</a></li>
        <li className=" hover:text-purple-400"><a href="#Contact">Contact</a></li>

      </ul>

  
</div>

    </nav>
    

   
    
  )
}

export default Navbar