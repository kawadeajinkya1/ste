import React from 'react'
import classes from './Wwr.module.css';





import b from '../../Assets/tools1.jpeg';

import tech from '../../Assets/quality.png';
import set from '../../Assets/setting.png';
import cert from '../../Assets/artificial-intelligence.png';
import support from '../../Assets/customer-support.png';
import pack from '../../Assets/pack.png';
import hold from '../../Assets/hold.png';

const Wwr = () => {
  return (
    
    <div className={classes.para1}>
        <h1 className={classes.Aa}>Why Choose Us !</h1>
       <div className={ classes.main}>
       
       <div className={ classes.hold}>
          
         
            <div>
          
          
         
          <div className={classes.card}>
            
          <div className={classes.c1}>
                <img src={cert} className={classes.am}></img>
                <h3  className={classes.h3}>High Technology</h3>
                
                <p>Process and customer centric driven with transparent results for last 25+ years.</p>
            </div>
            <div className={classes.c1}>
              
                <img src={tech} className={classes.am}></img>
                <h3 className={classes.h3}>Certification</h3>
                <p>Green Channel Manufactureing, Baught Out, Longest Association.</p>
                
            </div>
            <div className={classes.c1}>
                <img src={set} className={classes.am}></img>
                <h3 className={classes.h3}>Awarded For</h3>
                <p>Quality, Experience, Reliability.</p>
            </div>
            <div className={classes.c1}>
                <img src={support} className={classes.am}></img>
                <h3 className={classes.h3}>24/7 Support</h3>
                <p>Customized customer solutions based on understanding.</p>
            </div>
          </div>
       </div>
       </div>
       <div className={classes.big}>
       <div className={classes.left}>
       <div className={classes.A}>
            <span>Our Company</span>
          </div>
          <div><h2 className={classes.paraL}>Its commitment to service is built on a culture of <span className={classes.ceo}>Trust, 
                                     Responsibility and Accountability</span>.</h2></div>

                <div>
                 <p className={classes.paraS}><span className={classes.ceo}>Sachin Tools Engineering, founded in 1998</span>                                                                                                                                                                              , is a prominent manufacturer and provider of a diverse range of products such as Core Pins, Precision Components, and more.</p>
                 </div>
                 <div>
                 <p className={classes.paraS}>We've earned a distinct market position under <span className={classes.ceo}>Mr. Santosh Sharma's leadership </span>, thanks to strong management and industry knowledge, and company's ultimate goal of providing quality services.</p>
                 </div>
                 <center>
                 <div className={classes.two}>
                 
                 <div className={classes.dg}>
                    <img src={pack} className={classes.B}></img>
                    <h4>Secure Packing</h4>
                    
                 </div>
                 <div className={classes.dg}>
                    <img src={hold} className={classes.B}></img>
                    <h4>Delivery unlimited</h4>
                    
                 </div>
                 
                 </div>
                 </center>
                 </div>
                 <div className={classes.flex}>
                 <center>  <img src={b} className={classes.A2}></img> </center> 
                 </div>
                 </div>
          </div>
          </div>        
  )
}
export default Wwr;