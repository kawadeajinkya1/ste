import { useState,useEffect} from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

/*
import './Cahrc.css';
*/
import CH1 from '../../Assets/carbidecutters.webp';
import CH2 from '../../Assets/hss-cutters-resharpening.webp';

export const Cahrc = () => {
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
    <section>
            <div className='Productmains'>
                  <h1>CARBIDE AND HSS CUTTERS RESHARPENING</h1>
               </div> 
    <div className='AccHold'>
   <div className='left'>
       <button className={r1 ? 'AccBtn1 AccBtn11' : 'AccBtn'} onClick={clkHnd1}>Carbide Cutters Resharpening</button>
       <button className={r2 ? 'AccBtn1' : 'AccBtn'} onClick={clkHnd2}>HSS Clutters Resharpening</button>
       
   </div>
   <div className='right'>

       {r1 && <div className='right1'>
           <div className='accContainIn'>
               
           <div className= 'CH1'> 
                 
                 <img src={CH1} className='Product1'></img>

           
                 <table>
                        <tr>
                         <th>Name</th>
                         <th>Detail</th>
            
                       </tr>
           
                          <tr>
                            <td>Application/Usage</td>
                            <td>Industrial</td>
                           </tr>
                                 
                                 <tr>
                                 <td>Usage/Application</td>
                                 <td>Industrial</td>
            
                                   </tr>
                  
                                    <tr>
                                 <td>Material of Tool</td>
                                 <td>Solid Carbide</td>
            
                                  </tr>
           
                                 <tr>
                                 <td>location</td>
                                 <td>pune</td>
             
                                 </tr>
                                 
                                  <tr>
                                  <td>color</td>
                                  <td>silver</td>
                                   
                                  </tr> 
                                  
                                  <tr>
                                  <td>type</td>
                                  <td>new</td>
             
             
                                  </tr>
           
                    </table>

         
    
           </div>

           <div>
                       <div className='lala'>
                              <div className='PD'>
                                        <h4>Product Decription</h4>
                                       <p>Professionals work in close coordination and provide Carbide Cutters Resharpening service in much convenient way. Best for industrial sector, this cutter based service is accessible from us at genuine charges and in minimal time.</p>
                             </div>
                             <div><button className="Enquire"><Link className="Enquirebtn" to='/Contact'>Enquire Now</Link></button></div>

                             
                            </div>  
           </div>

           </div>
           
       </div>}

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
                            <td>Matrial</td>
                            <td>Stainless Steel</td>
                           </tr>
                                 
                                 <tr>
                                 <td> Shape</td>
                                 <td>various</td>
            
                                   </tr>
                  
                                   <tr>
                                 <td>Usage/Application</td>
                                 <td>industrial</td>
             
                                 </tr>

                                 <tr>
                                 <td>Color</td>
                                 <td>silver</td>
             
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
                                       <p>Professionals keep friendly behavior with patrons to offer reliable HSS Cutters Resharpening. Best and highly efficient tools are used by professionals to finish the work in effective way. Moreover to this, we apply genuine charge for this cutter service.</p>
                             </div>
                             <div><button className="Enquire"><Link className="Enquirebtn" to='/Contact'>Enquire Now</Link></button></div>
                             </div> 
                              
           </div>
           
              
           </div>
           
       </div>}

       

      

       
   </div>
</div>


   
</section>
  )
}
export default Cahrc