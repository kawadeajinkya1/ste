import React from 'react'
import './Nav.css';
import logo1 from '../../Assets/nk.jpg';
import logo2 from '../../Assets/stelogo.jpg';
import  {Link}  from 'react-router-dom';

const Nav = () => {
  return (
         <section className='main'>
                   
                    <div className='main1'>

                         <div className='logo2'>
                           <img src={logo2} className='img1'></img>
                          </div>     
                                
                                 <div className='nav-link'>
                                   
                                    <ul>
                                      <li className="list"><Link to='/' className="list">Home</Link></li>
                                      <li className="list"><Link to='/About' className="list">About Us</Link></li>


                                         <li >
                                            <div class="dropdown">
                                               <p class="dropdownContent">Products</p>
                                                  <div class="dropdown-content">
                                                     <Link to='/corepin'> Core Pins</Link>
                                                     <Link to='/Dr'>Diamond Pins And Round Pins</Link>
                                                     <Link to='/Ttc'>Tool Room Components</Link>
                                                     <Link to='/Cdc'>Carbide Dead Center</Link>
                                                     <Link to='/vsa'>Valve Seat Adapter</Link>
                                                     <Link to='/Hfa'>Hobbing Fixture Sleevest</Link>
                                                     <Link to='/Pc'>Precision Component</Link>
                                                     <Link to='/Restpad'>Rest Pad</Link>
                                                 
                                                   </div>
                                             </div>

                                          </li>


                                          <li className="list"><Link to='/Grading' className="list">Machinery</Link></li>
                                           <li className="list"><Link to='/Contact' className="list">Contact Us</Link></li>

                    
                    
                                    </ul>
                                 </div>

                                       <div className='logo1'> 
                                          <img src={logo1} className='logoR'></img>
                                       </div>

                      </div>

           </section>
  )
}

export default Nav;
