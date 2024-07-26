import { useState,useEffect } from 'react';
import React from 'react';

import  './Corepin.css';
import Fade from 'react-reveal/Fade';

import CH1 from '../../Assets/valve-seat-adapter-.webp';
import CH2 from '../../Assets/clamp-rod-.webp';

const Vsa = () => {
  const [r1, setR1] = useState(true);
  const [r2, setR2] = useState(false);
  
  const clkHnd1 = () => {
    setR1(true);
    setR2(false);
    
   
};

const clkHnd2 = () => {
    setR1(false);
    setR2(true);
   
   
};

useEffect(()=>{
  window.scrollTo(0,0)
},[])
  return (
    <section className='s1'>
       <Fade top>
               <div className='Productmains'>
                  <h1>Valve Seat Adapter</h1>
                  <p>Valve Seat Adapters are essential components in automotive engineering, facilitating precise machining of valve seats in cylinder heads. They ensure accurate alignment and provide stability during the cutting or grinding process. These adapters are crucial for enhancing engine performance, fuel efficiency, and overall combustion quality.</p>
               </div>
               </Fade>
    <div className='AccHold'>
    <Fade left>
   <div className='left'>

       <button className={r1 ? 'AccBtn1 AccBtn11' : 'AccBtn'} onClick={clkHnd1}>Valve Seat Adapter</button>
      {/* <button className={r2 ? 'AccBtn1' : 'AccBtn'} onClick={clkHnd2}>Clamp Rod</button> */}
       
   </div>
   </Fade>
   <Fade right>
   <div className='right'>

       {r1 && <div className='right1'>
           <div className='accContainIn'>
               
           <div className= 'SProduct1'> 
                 
                 <img src={CH1} className='Product1'></img>

           
                 
                 <div className='pd'>
                                        <h4>Product Decription</h4>
                                       <p>With dexterous team of professionals, we are able to a qualitative collection of Valve Seat Adapter. The provided adapter is for connecting various devices to a system. Under the guidance of dedicated professionals, provided slot adaptor is manufactured using the best grade basic material with the aid of modern methodology. Also, our esteemed patrons can buy this slot adapter in varied dimensions and specifications.</p>
                             </div>
         
    
           </div>

         
           </div>
           
       </div>}

{/*
       {r2 && <div className='right2'>
           <div className='accContainIn'>

           <div className= 'CH2'> 
                 
                 <img src={CH2} className='Product2'></img>

           
                 <table>
                        <tr>
                         <th>Name</th>
                         <th>Detail</th>
            
                       </tr>
           
                          <tr>
                            <td>Usage/Application</td>
                            <td>Industrial</td>
                           </tr>
                                 
                                 <tr>
                                 <td> Corrosion Resistance</td>
                                 <td>yes</td>
            
                                   </tr>
                  
                                  
           
                                 <tr>
                                 <td>Country of Origin</td>
                                 <td>Made in INDIA</td>
             
                                 </tr>
                                 
                                  <tr>
                                  <td>Location</td>
                                  <td>Pune</td>
             
                                  </tr>
                                   
                                  
           
                    </table>

         
    
           </div>

           <div>
                       <div className='lala'>
                              <div className='PD'>
                                        <h4>Product Decription</h4>
                                       <p>Our vast industry experience enable us a wide range of Clamp Rod. Our hardworking professionals make use of progressive technology and the superior quality metal alloy to manufacture this rod with high precision the offered rod is mainly used to hold an object in a fixed position. In addition, this rod is can be purchased from us at feasible rates.</p>
                             </div>


                             <div className='aji'>
                                        <h4>Features</h4>
                                             <ul className='bro'>
                                              <li>Compact design</li>  
                                              <li>Smooth finish</li>
                                              <li>Light weight</li>
                                             </ul>
                                      </div>
                            </div>  
           </div>

              
           </div>
  </div>}  */}

       

      

       
   </div>
   </Fade>
</div>


   
</section>
  )
}

export default Vsa