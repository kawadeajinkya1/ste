import { useState,useEffect } from 'react';
import React from 'react';

import  './Corepin.css';
import Fade from 'react-reveal/Fade';
import P1 from '../../Assets/carbidecutters.webp';

import img7 from '../../Assets/hobbing-transformed (1).png';

const Hfa = () => {
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
                  <h1>Hobbing Fixture Sleevest</h1>
                  <p>Hobbing fixture sleeves are cylindrical components used in hobbing machines to secure and guide cutting tools. They provide precise alignment and support during the gear cutting process. These sleeves ensure accurate and efficient hobbing, contributing to the production of gears, splines, and other intricate components in manufacturing.</p>
              
               </div>
               </Fade>

             <div className='AccHold'>
             <Fade left>
            <div className='left'>
                <button className={r1 ? 'AccBtn1 AccBtn11' : 'AccBtn'} onClick={clkHnd1}>Hobbing Fixture Sleevest</button>
                
            </div>
</Fade>
            <Fade right>
            <div className='right'>

                {r1 && <div className='right1'>
                <div className='accContainIn'>
                        
                        <div className= 'SProduct1'> 
                              
                              <img src={img7} className='Product1'></img>
    
                        
                              <table>
                                     <tr>
                                      <th>Name</th>
                                      <th>Detail</th>
                         
                                    </tr>
                        
                                       <tr>
                                         <td>Matrial</td>
                                         <td> 20 MnCr5 , En353</td>
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
                                                    <p>We are praised by industrial consumers due to offering best range of Hobbing Fixture Body. This fixture body is superior in finishing and reliable in nature. Moreover to this, these presented fixture bodies are satisfactory in working. Besides this, we apply genuine price for this body and ensure quick delivery.</p>
                                          </div>
    
    
                                          <div className='aji'>
                                            <div>
                                            <h4>Features</h4>
                                                 <ul className='bro'>
                                                  <li>Easy to use</li>  
                                                  <li>Weather proof</li>
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

export default Hfa