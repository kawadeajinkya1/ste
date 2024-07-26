import React from 'react';
import { useState } from "react";
import "./Nb.css";
import logo1 from '../../Assets/nk.jpg';
import logo2 from '../../Assets/stelogo.jpg';
import  {Link}  from 'react-router-dom';


function Nb() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
     
     <div className='logo2'>
      <img src={logo2} className='img1'></img>
     </div>     


      <ul className={active}>
      <li className="list"><Link to='/' className="list">Home</Link></li>
      <li className="list"><Link to='/About' className="list">About Us</Link></li>
      <li>
         <div class="dropdown">
           <p class="list">Products</p>
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

      <div className='logo1'> 
      <img src={logo1} className='logoR'></img>
      </div>


      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Nb;