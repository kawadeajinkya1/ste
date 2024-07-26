import { useState,useEffect } from 'react';
import React from 'react';

import  './Corepin.css';
import Fade from 'react-reveal/Fade';

import G1 from '../../Assets/cylindrical-grinding-works.webp';
import G2 from '../../Assets/internal-grinding-works-.webp';
import G3 from '../../Assets/surface.webp';
import G4 from '../../Assets/surface.webp';

import G from '../../Assets/ni.jpg';

const Gradingw = () => {

  const [r1, setR1] = useState(true);

  const [r3, setR3] = useState(false);
  const [r4, setR4] = useState(false);
 

  const clkHnd1 = () => {
    setR1(true);

    setR3(false);
    setR4(false);
    
   
};



const clkHnd3 = () => {
    setR1(false);

    setR3(true);
    setR4(false);
    
   
};

const clkHnd4 = () => {
    setR1(false);

    setR3(false);
    setR4(true);
   
   
};

useEffect(()=>{
  window.scrollTo(0,0)
},[])
  return (
    <section className='s1'>
       <Fade top>
             <div className='Productmains'>
                  <h1>Grinding Works Machinary</h1>
                  <p>Grinding machinery is essential in various industries for precision shaping and finishing of materials. It utilizes abrasive wheels to remove excess material or achieve desired surface quality, enhancing the dimensional accuracy of workpieces. Common uses include metal fabrication, automotive manufacturing, and tool production, ensuring the creation of smooth, precise, and polished surfaces.</p>
               </div>
               </Fade>
    <div className='AccHold'>
    <Fade left>
   <div className='left'>
       <button className={r1 ? 'AccBtn1 AccBtn11' : 'AccBtn'} onClick={clkHnd1}>Cylindrical and Internal Grinding Works</button>
       <button className={r3 ? 'AccBtn1 AccBtn11' : 'AccBtn'} onClick={clkHnd3}>Surface Grinding Works</button>
       <button className={r4 ? 'AccBtn1 AccBtn11' : 'AccBtn'} onClick={clkHnd4}>Profile Grinding Works</button>
       
   </div>

   </Fade>

   <Fade right>
   <div className='right'>

       {r1 && <div className='right1'>
           <div className='accContainIn'>
               
           <div className= 'SProduct1'> 
                 
                 <img src={G} className='Product1'></img>

           
                 <table>
                        <tr>
                         <th>Name</th>
                         <th>Detail</th>
            
                       </tr>
           
                          <tr>
                            <td>Technology Available</td>
                            <td>Cylindrical Grinding Internal and External</td>
                           </tr>
                                 
                                 <tr>
                                 <td>Location/City</td>
                                 <td>Pune</td>
            
                                   </tr>
                  
                                    <tr>
                                 <td>Size</td>
                                 <td>Customized</td>
            
                                  </tr>
           
                                 <tr>
                                 <td>Grinding Machine Available</td>
                                 <td>Cylindrical Grinder</td>
             
                                 </tr>
                                 
                                  <tr>
                                  <td>Industries Served</td>
                                  <td>Automotive</td>
             
                                  </tr>

                                  <tr>
                                  <td>location</td>
                                  <td>pune</td>
             
                                  </tr>
           
           
                    </table>

         
    
           </div>

           <div>
                       
                              <div className='PD'>
                                        <h4>Product Decription</h4>
                                       <p>To assist industrial needs of precious consumers, we are offering Cylindrical Grinding Works. This grinding service is best in the market and accomplished by sharp skills having professionals. Additionally, we finish the work in lesser time.</p>
                             </div>


                            
                            </div>  
       

           </div>
           
       </div>}

    

       {r3 && <div className='right3'>
           <div className='accContainIn'>
               
           <div className= 'SProduct1'> 
                 
                 <img src={G} className='Product1'></img>

           
                 <table>
                        <tr>
                         <th>Name</th>
                         <th>Detail</th>
            
                       </tr>
           
                          <tr>
                            <td>Technology Available</td>
                            <td>Surface Grinding</td>
                           </tr>
                                 
                                 <tr>
                                 <td>Location/City</td>
                                 <td>Pune</td>
            
                                   </tr>
                  
                                    <tr>
                                 <td>Grinding Machine Available</td>
                                 <td>Surface Grinder</td>
            
                                  </tr>
           
                                 <tr>
                                 <td>Industries Served</td>
                                 <td>Automotive</td>
             
                                 </tr>
                                 
                                  <tr>
                                  <td>Location</td>
                                  <td>Pune</td>
             
                                  </tr>
           
                    </table>

         
    
           </div>

           <div>
                              <div className='PD'>
                                        <h4>Product Decription</h4>
                                       <p>To let patrons rely on our firm, we offer Surface Grinding Works. This presented grinding service is reliable and easy to obtain from us. Moreover to this, professionals do proper discussion with patrons to know their need in better way.</p>
                             </div>


                            
                           
           </div>

           </div>
       </div>}


       {r4 && <div className='right3'>
           <div className='accContainIn'>
              
           <div className= 'SProduct1'> 
                 
                 <img src={G} className='Product1'></img>

           
                 <table>
                        <tr>
                         <th>Name</th>
                         <th>Detail</th>
            
                       </tr>
           
                          <tr>
                            <td>Matrial</td>
                            <td>Mild Steel</td>
                           </tr>
                                 
                                 <tr>
                                 <td>Technology Available</td>
                                 <td> Profile Grinding</td>
            
                                   </tr>
                  
                                    <tr>
                                 <td>Location/City</td>
                                 <td>Pune</td>
            
                                  </tr>
           
                                 <tr>
                                 <td>Grinding Machine Available</td>
                                 <td>Surface Grinder</td>
             
                                 </tr>
                                 
                                  <tr>
                                  <td>Location</td>
                                  <td>Pune</td>
             
                                  </tr>
           
                    </table>

         
    
           </div>

           <div>
                      
                              <div className='PD'>
                                        <h4>Product Decription</h4>
                                       <p>Patrons admire our firm due to offering Profile Grinding Works. This presented grinding work is reliable and easy to obtain from us in convenient way. Moreover to this, these presented grinding services are finished by sharp skilled professionals of industry.</p>
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

export default Gradingw;