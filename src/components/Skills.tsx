
import React from 'react'

function Skill() {
  return (
   
      <div id='Skills' className='container pt-32'>
        <div data-aos="flip-right"></div>
          <img className='p-3 m-auto' src="skill.jpg"  alt="" srcSet="" width={700} height={100} />
          <br />
          <h1 className="text-4xl font-extrabold text-center underline text-purple-700 justify-between " data-aos="zoom-in-left">"Skills"</h1>
          <br />
          <p className=" justify-items-center text-center justify-between text-2xl " data-aos="zoom-in-left">Skills 
              Front-End Development: Proficient in HTML, CSS, and JavaScript, using frameworks like React or Vue.js to build responsive and dynamic interfaces.
              <br />
              Version Control: Familiar with Git for tracking changes and collaborating with other developers.
              <br />
              Problem-Solving: Strong troubleshooting skills, ensuring code is efficient and bug-free.;</p>
          <br />
          </div>
  )
}

export default Skill