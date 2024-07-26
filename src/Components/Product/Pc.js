import { useState,useEffect } from 'react';
import React from 'react';

import './Corepin.css';

import Fade from 'react-reveal/Fade';

import P1 from '../../Assets/precisioncomp-transformed.png';

const Pc = () => {
  const [r1, setR1] = useState(true);

  const clkHnd1 = () => {
    setR1(true);
  };
  useEffect(()=>{
    window.scrollTo(0,0)
},[])
  return (
    <section className='s1'>
      <Fade top>
              <div className='Productmains'>
                  <h1>Precision Component</h1>
                  <p>Precision components are meticulously engineered parts manufactured to exact specifications, ensuring high accuracy and reliability in various applications. They find extensive use in industries like aerospace, automotive, and electronics, where tight tolerances and impeccable quality are paramount. These components contribute to improved performance, efficiency, and durability of complex systems, making them indispensable in modern manufacturing processes.





</p>
               </div>
               </Fade>
               
             <div className='AccHold'>
             <Fade left>
            <div className='left'>
                <button className={r1 ? 'AccBtn1 AccBtn11' : 'AccBtn'} onClick={clkHnd1}>Precision Component </button>
                
            </div>
</Fade>
            <Fade right>
            <div className='right'>

                {r1 && <div className='right1'>
                    <div className='accContainIn'>
                        
                    <div className= 'SProduct1'> 
                          
                          <img src={P1} className='Product1'></img>

                    
                          <table>
                                 <tr>
                                  <th>Name</th>
                                  <th>Detail</th>
                     
                                </tr>
                    
                                   <tr>
                                     <td>Matrial</td>
                                     <td>Sytainless Steel</td>
                                    </tr>
                                          
                                          <tr>
                                          <td>Usages/ Applications</td>
                                          <td>Industrial </td>
                     
                                            </tr>
                           
                                             <tr>
                                          <td>Packing Type</td>
                                          <td>Box</td>
                     
                                           </tr>
                    
                                          <tr>
                                          <td>Is It Corrosion Resistant</td>
                                          <td>Corrosion Resistant</td>
                      
                                          </tr>
                                          
                                           <tr>
                                           <td>I Deal In</td>
                                           <td>	New Only</td>
                      
                                           </tr>

                                           <tr>
                                           <td>Country origin</td>
                                           <td>	India</td>
                      
                                           </tr>
                    
                             </table>

                  
             
                    </div>

                    <div className= 'SProduct11'>
                                
                                       <div className='PD'>
                                                 <h4>Product Decription</h4>
                                                <p>Backed by great industry experience, we are involved in Precision Component. This component is extensively used for securing and tightening objects together very firmly. The provided component is efficiently manufactured by our experienced team of professionals with the aid of modern technology and using the finest quality metal alloy. Further, we are presenting this component in numerous sizes.</p>
                                      </div>


                                      <div className='aji'>
                                        <div>
                                        <h4>Features</h4>
                                             <ul className='bro'>
                                              <li>Easy to fit</li>  
                                              <li>Anti-corrosive surface</li>
                                              <li>Smooth edges</li>
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

export default Pc