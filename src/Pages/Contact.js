import React from 'react'
import { useEffect } from 'react';
import Contact from "../Components/Contact/Cont";

const Contact2 = () => {
  useEffect(()=>{ 
    window.scrollTo(0,0);
},[])
  return (
    <div>
      <Contact></Contact>
    </div>
  )
}

export default Contact2;