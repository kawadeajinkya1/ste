import { useState,useEffect } from 'react';
import React from 'react';

import  './Corepin.css';
import Fade from 'react-reveal/Fade';

import C1 from '../../Assets/carbide-dead-centers-.webp';
import C2 from '../../Assets/carbide-half-dead-centers.webp';
import C3 from '../../Assets/hobbing-fixture-sleeves-.webp';

const Cdc = () => {
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
                  <h1>Carbide Dead Centers</h1>
                  <p>Carbide dead centers are precision tools used in machining to support workpieces. Made from durable carbide materials, these centers have high wear resistance, ensuring longevity. They are crucial in various operations like turning, grinding, and milling, providing accurate rotation and minimizing workpiece deflection for enhanced machining precision.</p>
               </div>
               </Fade>
             <div className='AccHold'>
              <Fade left>
            <div className='left'>
                <button className={r1 ? 'AccBtn1 AccBtn11' : 'AccBtn'} onClick={clkHnd1}>Carbide Dead Centers </button>
                <button className={r2 ? 'AccBtn1  AccBtn11' : 'AccBtn'} onClick={clkHnd2}>Carbide Hlaf Dead Centers </button>

               
            </div>

            </Fade>

            <Fade right>
            <div className='right'>

                {r1 && <div className='right1'>
                    <div className='accContainIn'>
                        
                    <div className= 'SProduct11'> 
                          
                          <img src={C1} className='Product1'></img>

                    
                          <table>
                                 <tr>
                                  <th>Name</th>
                                  <th>Detail</th>
                     
                                </tr>
                    
                                   <tr>
                                     <td>Matrial</td>
                                     <td>Carbide</td>
                                    </tr>
                                          
                                          <tr>
                                          <td>Size/Dimension</td>
                                          <td>customized</td>
                     
                                            </tr>
                           
                                             <tr>
                                          <td>Type</td>
                                          <td>MT1, MT2, MT3, MT4, MT5</td>
                     
                                           </tr>
                    
                                          <tr>
                                          <td>Usage/Application</td>
                                          <td>Industrial Grinding Machines</td>
                      
                                          </tr>
                                          
                                           <tr>
                                           <td>Country of Origin</td>
                                           <td>Made in India</td>
                      
                                           </tr>
                    
                             </table>

                  
             
                    </div>

                    <div className= 'SProduct11'>
                                       <div className='pd'>
                                                 <h4>Product Decription</h4>
                                                <p>Professionals work hard and in close coordination to provide best range of Carbide Dead Centers. This dead center is accurate in size and superior in finishing. This presented metallic product is easy to install in different machines. This center has excellent finishing and longer life.</p>
                                      </div>


                                      <div className='aji'>
                                        <div>
                                        <h4>Features</h4>
                                             <ul className='bro'>
                                              <li>Different sizest</li>  
                                              <li>Durable</li>
                                              <li>Easy to install</li>
                                             </ul>
                                   </div>
                                     </div>  
                    </div>

                    </div>
                    
                </div>}

                {r2 && <div className='right1'>
                    <div className='accContainIn'>

                    <div className= 'SProduct1'> 
                          
                          <img src={C2} className='Product1'></img>

                    
                          <table>
                                 <tr>
                                  <th>Name</th>
                                  <th>Detail</th>
                     
                                </tr>
                    
                                   <tr>
                                     <td>Matrial</td>
                                     <td>EN31 , D2 , HSS</td>
                                    </tr>
                                          
                                          <tr>
                                          <td> Shape</td>
                                          <td>various</td>
                     
                                            </tr>
                           
                                            <tr>
                                          <td>Type</td>
                                          <td>CONICAL</td>
                      
                                          </tr>

                                          <tr>
                                          <td>Usage/Application</td>
                                          <td>Industrial Grinding machines</td>
                      
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
                                                <p>We are keenly engaged in offering reliable Carbide Half Dead Centers. This presented half dead center is reliable and accessible from us in various specifications. Moreover to this, these presented carbide centers are light in weight and supplied to patrons after proper inspection.</p>
                                      </div>


                                      <div className='aji'>
                                        <div>
                                        <h4>Features</h4>
                                             <ul className='bro'>
                                              <li>Rust free</li>  
                                              <li>Reliable</li>
                                              <li>Pressure resistant</li>
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

export default Cdc