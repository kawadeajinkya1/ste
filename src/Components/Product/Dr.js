import { useState,useEffect } from 'react';
import React from 'react';

import  './Corepin.css';

import SProduct6 from '../../Assets/diamond.webp';
import Fade from 'react-reveal/Fade';

const Dr = () => {
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
                  <h1>Diamond Locating Pin</h1>
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
                              
                        <img src={SProduct6} className='Product1'></img>
    
                        
                              <table>
                                     <tr>
                                      <th>Name</th>
                                      <th>Detail</th>
                         
                                    </tr>
                        
                                       <tr>
                                         <td>Matrial</td>
                                         <td> Customer Requirement</td>
                                        </tr>
                                              
                                       
                               
                                                 <tr>
                                              <td>Size</td>
                                              <td>Customer Requirement</td>
                         
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
                                                    <p>Superior finish having this Diamond Locating Pin is reliable in nature and acceptable in industrial are to assist various needs. These pins are best in quality and accessible from us in various sizes. Light weighted this locating pin is properly examined by professionals on various parameters which are preset.</p>
                                          </div>
    
    
                                          <div className='aji'>
                                            <div>
                                            <h4>Features</h4>
                                             <ul className='bro'>
                                              <li>Light weight</li>  
                                              <li>Easy to use</li>
                                              <li>Anti corrosive</li>
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

export default Dr