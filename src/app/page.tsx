"use client"

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skill from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Footer from "@/components/Footer";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";



export default function use() {
  useEffect (() =>{
    AOS.init ({
      easing:"ease-out-back",
      duration:1200,
      delay:100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,
    })
    AOS.refresh()
  },[])
  return (
    <main> 
      
      
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Experience />
      <Education />
      <Contact />
      <Footer />
      
      
    
      
      
    
    </main>
  );
}
