import React from 'react'

import classes from './Aboutp.module.css'

import img from './aboutimg.jpeg'
import Fade from 'react-reveal/Fade';
import img1 from './../../Assets/pd (4).png'
import img2 from './../../Assets/pd (3).png'
import img3 from './../../Assets/pd (2).png'
import img4 from './../../Assets/pd (1).png'


const Aboutp = () => {
  return (  
       
         <div> 
<br></br>
<Fade top>
<div className={classes.up}>
<div className={classes.upeer}> 
 </div>
 </div>
 </Fade>

<Fade bottom>
<div className={classes.fh}>

<div className={classes.down}>

<div className={classes.db}>
<h2>Our team’s goal is to build you a <span className={classes.nine}>Creative, Functional Trust Business</span>.</h2>
 </div>

<p className={classes.para1}> Sachin Tools Engineering were established in the year 1998 with  our 
mentor <b>Mr. Santosh Sharma </b> , as a leading manufacturer, supplier of a broad range of Core Pins, Tool Room Component, Precision Component, Adapter Valve Guide, Valve Seat Adapter, Clamp Rod, Hobbing Fixture Sleeves and Carbide Dead Centers etc.. and Service Provider of Carbide and HSS Cutters Resharpening and Grinding Works . 
</p>

<div className={classes.ana}>
<h3>Our #1 goal is<span className={classes.nine}> to make disciples for business.</span></h3>
</div>


    </div>

<div className={classes.right}>
  
  <div  className={classes.rj1}>
  <div className={classes.r1}>
    <img src={img1} className={classes.i1}  />
    <h6 className={classes.rjt}>MANUFACTURE</h6>
  </div>

  <div className={classes.r2}> 
  <img src={img2} className={classes.i1}  />
    <h6  className={classes.rjt}>EXPORTER</h6>
  </div>
  </div>

  <div  className={classes.rj2}>
  <div className={classes.r3}>
  <img src={img3} className={classes.i1}  />
  <h6  className={classes.rjt}>BEST MATERIAL&nbsp;</h6>
  </div>

  <div className={classes.r4}> 
  <img src={img4} className={classes.i1}  />
  <h6  className={classes.rjt}>PRODUCTION</h6>
  </div>
  </div>

    </div>

</div>
</Fade>
</div>

  )
};

export default Aboutp