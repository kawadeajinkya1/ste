import { useState,useEffect } from 'react';
import React from 'react';

/*
import  './Industrialc.css';
*/

import P1 from '../../Assets/rest.png';

const Industrialc = () => {

  const [r1, setR1] = useState(true);

  const clkHnd1 = () => {
    setR1(true);
  };

  useEffect(()=>{
    window.scrollTo(0,0)
},[])
  return (
    <section>
    <div className='Productmains'>
        <h1>Industrialc Cutter</h1>
     </div>
     
   <div className='AccHold'>
  <div className='left'>
      <button className={r1 ? 'AccBtn1 AccBtn11' : 'AccBtn'} onClick={clkHnd1}>Industrialc Cutter </button>
      
  </div>
  <div className='right'>

      {r1 && <div className='right1'>
          <div className='accContainIn'>
              
          <div className= 'P1'> 
                
                <img src={P1} className='Product1'></img>

          
                <table>
                       <tr>
                        <th>Name</th>
                        <th>Detail</th>
                             
                      </tr>
          
                         <tr>
                           <td>Usage/Application</td>
                           <td>	industrial</td>
                          </tr>
                                
                                <tr>
                                <td>Color</td>
                                <td>Black</td>
           
                                  </tr>
                 
                                   <tr>
                                <td>Material</td>
                                <td>metal</td>
           
                                 </tr>
          
                                <tr>
                                <td>Type</td>
                                <td>Broaching</td>
            
                                </tr>
                                
                                 <tr>
                                 <td>Country of Origin</td>
                                 <td>Made in India</td>
            
                                 </tr>

                                 <tr>
                                 <td>location</td>
                                 <td>	pune</td>
            
                                 </tr>
          
                   </table>

        
   
          </div>

          <div>
                      <div className='lala'>
                             <div className='PD'>
                                       <h4>Product Decription</h4>
                                      <p>Thick in frame, offered Rest Pad is best in quality and prepared under guidance of industry professionals. Experts work hard and provide this pad in the market in various sizes. Ductile metal is used for the manufacturing of these pads to let users have reliability. This pad is perfect in size.</p>
                            </div>


                            <div className='aji'>
                              <h4>Features</h4>
                                   <ul className='bro'>
                                    <li>Easy to install</li>  
                                    <li>Thick frame</li>
                                    <li>Excellent finish</li>
                                   </ul>
                            </div>
                           </div>  
          </div>

          </div>
          
      </div>}

     
  </div>
</div>
</section>
  )
}

export default Industrialc