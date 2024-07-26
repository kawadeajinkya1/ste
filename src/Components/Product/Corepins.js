import { useState,useEffect } from 'react';
import React from 'react';
import   './Corepin.css';
import { Link } from 'react-router-dom';

import Fade from 'react-reveal/Fade';

import SProduct1 from '../../Assets/industry.webp';
import SProduct2 from '../../Assets/h13.webp';
import SProduct3 from '../../Assets/orvarsuprem.webp';
import SProduct4 from '../../Assets/corepin.webp';
import SProduct5 from '../../Assets/corepin2.webp';
import SProduct6 from '../../Assets/diamond.webp';






const Corepins = () => {
  
    const [r1, setR1] = useState(true);
    const [r2, setR2] = useState(false);
    const [r3, setR3] = useState(false);
    const [r4, setR4] = useState(false);
    const [r5, setR5] = useState(false);
    const [r6, setR6] = useState(false);


    const clkHnd1 = () => {
        setR1(true);
        setR2(false);
        setR3(false);
        setR4(false);
        setR5(false);
        setR6(false);
    };

    const clkHnd2 = () => {
        setR1(false);
        setR2(true);
        setR3(false);
        setR4(false);
        setR5(false);
        setR6(false);
    };

    const clkHnd3 = () => {
        setR1(false);
        setR2(false);
        setR3(true);
        setR4(false);
        setR5(false);
        setR6(false);
    };

/*
    const clkHnd4 = () => {
        setR1(false);
        setR2(false);
        setR3(false);
        setR4(true);
        setR5(false);
        setR6(false);
    };

    const clkHnd5 = () => {
        setR1(false);
        setR2(false);
        setR3(false);
        setR4(false);
        setR5(true);
        setR6(false);
    };
    const clkHnd6 = () => {
        setR1(false);
        setR2(false);
        setR3(false);
        setR4(false);
        setR5(false);
        setR6(true);
    };
    */
    useEffect(()=>{
      window.scrollTo(0,0)
  },[])

  return (
       <section className='s1'>
        <Fade top>
               <div className='Productmains'>
                  <h1>Core Pins</h1>
                  <p>Core pins are precision components used in molds and dies to create internal features in molded or casted objects. They come in various types, including straight, stepped, and ejector pins, enabling the production of complex parts with accuracy and consistency. Core pins play a vital role in shaping intricate designs, ensuring high-quality standards in industries like automotive, electronics, and consumer goods manufacturing.</p>
               </div>
               </Fade>
             <div className='AccHold'>

             <Fade left>
            <div className='left'>
                <button className={r1 ? 'AccBtn1 AccBtn11' : 'AccBtn'} onClick={clkHnd1}>Indusrial Core Pins </button>
                <button className={r2 ? 'AccBtn1 AccBtn11' : 'AccBtn'} onClick={clkHnd2}>H13 Core Pin</button>
                <button className={r3 ? 'AccBtn1 AccBtn11' : 'AccBtn'} onClick={clkHnd3}>Orvar Supreme Core Pin</button>
              { /* <button className={r4 ? 'AccBtn1' : 'AccBtn'} onClick={clkHnd4}>Core Pine</button>
                <button className={r5 ? 'AccBtn1' : 'AccBtn'} onClick={clkHnd5}>Core Pine HDS H13</button>
                <button className={r6 ? 'AccBtn1' : 'AccBtn'} onClick={clkHnd6}>Diamond Locating Pin</button>
  */}
            
                </div>
                </Fade>

                <Fade right>
            <div className='right'>

                {r1 && <div className='right1'>
                    <div className='accContainIn'>
                        
                    <div className= 'SProduct1'> 
                          
                          <img src={SProduct1} className='Product1'></img>

                    
                          <table>
                                 <tr>
                                  <th>Name</th>
                                  <th>Detail</th>
                     
                                </tr>
                    
                                   <tr>
                                     <td>Matrial</td>
                                     <td>20MnCr5, En353</td>
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
                                                <p>Our proficiency in this domain enables us offer a broad spectrum of Industrial Core Pins. These pins are manufactured under the direction of our highly skilled experts by utilizing top grade metal alloy with the help of innovative techniques. The offered pins are threaded fastener designed with an external male thread which is extensively utilized for fastening applications. Also, provided pins are available to the patrons in several specifications.</p>
                                      </div>


                                      <div className='aji'>
                                        <div >
                                        <h4>Features</h4>
                                             <ul className='bro'>
                                              <li>Easy to fit</li>  
                                              <li>Non corrosive</li>
                                              <li>Galvanized finish</li>
                                              
                                             </ul>
                                             </div>
                                      </div>
                                      
                                   
                                     
                    </div>

                    </div>
                    
                    
                </div>}

                {r2 && <div className='right1'>
                    <div className='accContainIn'>

                    <div className= 'SProduct1'> 
                          
                          <img src={SProduct2} className='Product1'></img>

                    
                          <table>
                                 <tr>
                                  <th>Name</th>
                                  <th>Detail</th>
                     
                                </tr>
                    
                                   <tr>
                                     <td>Matrial</td>
                                     <td>SS</td>
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
                                          <td>Color</td>
                                          <td>Silver</td>
                      
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
                                                <p>We are well known among consumers due to offering best H13 Core Pin. This presented core pin is extreme light in weight and favored by customers due to sharp edges. Moreover to this, these pins are damage free and meet needs of precious consumers. This core pin is rust free.</p>
                                      </div>


                                      <div className='aji'>
                                        <div>
                                        <h4>Features</h4>
                                             <ul className='bro'>
                                              <li>Different Size</li>  
                                              <li>Best finish</li>
                                              <li>Realiable</li>
                                             </ul>
                                             </div>
                                      </div>
                                      
                    </div>
   
                       
                    </div>
                </div>}

                {r3 && <div className='right1'>
                    <div className='accContainIn'>
                        
                    <div className= 'SProduct1'> 
                          
                          <img src={SProduct3} className='Product1'></img>

                    
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
                                                <p>We are well know among consumers due to offering  best Orvar Supreme Core Pin. This Presentef core pin is extrem light in weight and favored by customers due to sharp edges.Moreover to this,these pins are damage free and meet needs of precious consumers.this core rust free.</p>
                                      </div>


                                      <div className='aji'>
                                        <div>
                                        <h4>Features</h4>
                                             <ul className='bro'>
                                              <li>Different Size</li>  
                                              <li>Best finish</li>
                                              <li>Realiable</li>
                                             </ul>
                                             </div>
                                      </div>
                                      
                    </div>

                    </div>
                </div>}

                { /*

                {r4 && <div className='right3'>
                    <div className='accContainIn'>
                       
                    <div className= 'SProduct4'> 
                          
                          <img src={SProduct4} className='Product4'></img>

                    
                          <table>
                                 <tr>
                                  <th>Name</th>
                                  <th>Detail</th>
                     
                                </tr>
                    
                                   <tr>
                                     <td>Matrial</td>
                                     <td>Standrad and Orvar Supreme</td>
                                    </tr>
                                          
                                         
                           
                                             <tr>
                                          <td>Size</td>
                                          <td>All Size</td>
                     
                                           </tr>
                    
                                          <tr>
                                          <td>Country of Origin</td>
                                          <td>Made in INDIA</td>
                      
                                          </tr>
                                          
                                           <tr>
                                           <td>Location</td>
                                           <td>Pune</td>
                      
                                           </tr>
                    
                                           <tr>
                                          <td>Type</td>
                                          <td>New</td>
                     
                                            </tr>
                             </table>

                  
             
                    </div>

                    <div>
                                <div className='lala'>
                                       <div className='PD'>
                                                 <h4>Product Decription</h4>
                                                <p>We are well known among consumers due to offering best Core Pins. This presented core pin is extreme light in weight and favored by customers due to sharp edges. Moreover to this, these pins are damage free and meet needs of precious consumers. This core pin is rust free.</p>
                                      </div>


                                      <div className='aji'>
                                        <h4>Features</h4>
                                             <ul className='bro'>
                                              <li>Different Size</li>  
                                              <li>Best finish</li>
                                              <li>Realiable</li>
                                             </ul>
                                      </div>
                                     </div>  
                    </div>

                    </div>
                </div>}

                {r5 && <div className='right3'>
                    <div className='accContainIn'>
                        
                    <div className= 'SProduct5'> 
                          
                          <img src={SProduct5} className='Product5'></img>

                    
                          <table>
                                 <tr>
                                  <th>Name</th>
                                  <th>Detail</th>
                     
                                </tr>
                    
                                   <tr>
                                     <td>Matrial</td>
                                     <td>HDS H13</td>
                                    </tr>
                                          
                                          <tr>
                                          <td>Head Shape</td>
                                          <td>Round</td>
                     
                                            </tr>
                           
                                             
                    
                                          <tr>
                                          <td>Country of Origin</td>
                                          <td>Made in INDIA</td>
                      
                                          </tr>
                                          
                                           <tr>
                                           <td>Location</td>
                                           <td>Pune</td>
                      
                                           </tr>

                                           <tr>
                                          <td>Usage</td>
                                          <td>Industrial PDC DIES</td>
                     
                                           </tr>
                    
                             </table>

                  
             
                    </div>

                    <div>
                                <div className='lala'>
                                       <div className='PD'>
                                                 <h4>Product Decription</h4>
                                                <p>We are well-known and supplier in the domain, involved in offering a wide array of Core Pins. The offered pins are ideal for wood & metal working and carpentry. Under experts' surveillance, these pins are manufactured by utilizing premium grade metal alloy with the help of progressive techniques. Also, these pins are made available at industry leading prices..</p>
                                      </div>


                                      <div className='aji'>
                                        <h4>Features</h4>
                                             <ul className='bro'>
                                              <li>Optimum strength</li>  
                                              <li>Light weight</li>
                                              <li>Easy to install</li>
                                             </ul>
                                      </div>
                                     </div>  
                    </div>

                    </div>
                </div>}


                {r6 && <div className='right3'>
                    <div className='accContainIn'>
                        
                    <div className= 'SProduct6'> 
                          
                          <img src={SProduct6} className='Product6'></img>

                    
                          <table>
                                 <tr>
                                  <th>Name</th>
                                  <th>Detail</th>
                     
                                </tr>
                    
                                   <tr>
                                     <td>Matrial</td>
                                     <td>CUSTOMER REQUIREMENT</td>
                                    </tr>
                                          
                                          
                                             <tr>
                                          <td>Size</td>
                                          <td>CUSTOMER REQUIREMENT</td>
                     
                                           </tr>
                    
                                          <tr>
                                          <td>Country of Origin</td>
                                          <td>Made in INDIA</td>
                      
                                          </tr>
                                          
                                          
                             </table>

                  
             
                    </div>

                    <div>
                                <div className='lala'>
                                       <div className='PD'>
                                                 <h4>Product Decription</h4>
                                                <p>Superior finish having this Diamond Locating Pin is reliable in nature and acceptable in industrial are to assist various needs. These pins are best in quality and accessible from us in various sizes. Light weighted this locating pin is properly examined by professionals on various parameters which are preset..</p>
                                      </div>


                                      <div className='aji'>
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

*/}

            </div>

            </Fade>
        </div>

    
            
           



































        </section>
  )
}

export default Corepins;