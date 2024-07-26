import { useState,useEffect } from 'react';
import React from 'react';


import  './Corepin.css';

import Fade from 'react-reveal/Fade';

import T1 from '../../Assets/guide-bush.jpg';
import T2 from '../../Assets/liner bushes1.webp';
import T3 from '../../Assets/linearboshe.webp';


const Ttc = () => {

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
                  <h1>Tool room  Component </h1>
                  <p>Tool room components, including cutting tools, gauges, and molds, are essential in precision engineering. They facilitate accurate machining processes, quality inspections, and mold production. These components are crucial for maintaining manufacturing standards and ensuring the production of precise and high-quality products.</p>
             
               </div>
               </Fade>

    <div className='AccHold'>
    <Fade left>
   <div className='left'>
       <button className={r1 ? 'AccBtn1 AccBtn11' : 'AccBtn'} onClick={clkHnd1}>Guide Bush </button>
       <button className={r2 ? 'AccBtn1  AccBtn11' : 'AccBtn'} onClick={clkHnd2}>Linear Bush</button>
     
       
   </div>
   </Fade>
   <Fade right>
   <div className='right'>

       {r1 && <div className='right1'>
           <div className='accContainIn'>
               
           <div className= 'SProduct1'> 
                 
                 <img src={T1} className='Product1'></img>

           
                 <table>
                        <tr>
                         <th>Name</th>
                         <th>Detail</th>
            
                       </tr>
           
                          <tr>
                            <td>Matrial</td>
                            <td>H13,THAISON,ORVAR SEPREAM</td>
                           </tr>
                                 
                                 <tr>
                                 <td>Head Shape</td>
                                 <td>Round</td>
            
                                   </tr>
                  
                                    <tr>
                                 <td>Size</td>
                                 <td>Customized</td>
            
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

           <div className= 'SProduct11'>
                    
                              <div className='pd'>
                                        <h4>Product Decription</h4>
                                       <p>To let patrons have best products, experts offer Guide Bush. This bush is light in weight and superior in finishing. These products have longer life and accessibility from the market in many sizes. Easy to install, offered bush is damage resistant quality ensured by industry professionals.</p>
                             </div>


                             <div className='aji'>
                              <div>
                               <h4>Features</h4>
                                    <ul className='bro'>
                                     <li>Small size</li>  
                                     <li>Durable</li>
                                     <li>Anti corrosive</li>
                                    </ul>
                                    </div>
                             </div>
                          
           </div>

           </div>
           
       </div>}

       {r2 && <div className='right1'>
           <div className='accContainIn'>

           <div className= 'SProduct1'> 
                 
                 <img src={T3} className='Product1'></img>

           
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
                                 <td>Shape</td>
                                 <td>Cylindrical</td>
            
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

           <div className= 'SProduct11'>
                      
                              <div className='pd'>
                                        <h4>Product Decription</h4>
                                       <p>Small in size, these Liner Bushes are made of ductile metal that is recommended by industry experts. This bush is superior in finishing and made by industry professionals using highly technical machines and ductile metal. These bushes are available in the market in various sizes and at genuine price</p>
                             </div>


                             <div className='aji'>
                              <div>
                               <h4>Features</h4>
                                    <ul className='bro'>
                                     <li>Best finish</li>  
                                     <li>Light weight</li>
                                     <li>Longer life</li>
                                    </ul>
                             </div>
                             </div>
                          
           </div>

              
           </div>
       </div>}


       
   </div>
   </Fade>
  </div>

</section>
  )
}

export default Ttc