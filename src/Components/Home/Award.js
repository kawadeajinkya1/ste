import React, { Component } from "react";
import './Award.css';

import  {Link}  from 'react-router-dom';

import img1 from '../../Assets/award1.jpeg';
import img2 from '../../Assets/award2.jpeg';

import Fade from 'react-reveal/Fade';

const Award=()=>{
return (
    <div className='hold'>
        <h3 className='head'>Our Awards</h3>
     
            <div className='row'>
<Fade left>
            <div className='ra'>
                <img src={img1} className='im1'></img>
            </div>
            </Fade>
            <Fade right>
            <div className='rb'>
            <img src={img2} className='im2'></img>
            </div>
            </Fade>

         </div>

         </div>

)
};

export default Award;