import React from 'react'
import classes from './Ab.module.css'
import Lg1 from '../../Assets/ask.png'

import Fade from 'react-reveal/Fade';

import Lg4 from '../../Assets/bulding.png'
import Lg5 from '../../Assets/question.png'


const Ab = () => {
     
  return (
    <section>
      <section className={classes.toxicmain}>
          <Fade left>
            <div className={classes.toxic}>
              <br></br>
             <center> <img src={Lg4} className={classes.logo1}></img>   
              <h3 className={classes.title}>WHAT WE DO</h3>
             <p>&emsp;&emsp;Client's satisfaction is one of the most important concept of our business planning. We not only emphasised on meeting their needs but endeavor hard to offer items that exceed their quality expectations. We strive to maintain highest level of customer's satisfaction by offering world class core pins and tool room component. We are known in the market for our high quality products. Dedicated to enduring customer loyalty.</p>
             </center>
             </div>
             </Fade>
             <Fade right>
          <div className={classes.toxic}>
          <br></br>
          <center>
          <img src={Lg5} className={classes.logo1}></img>   
            <h3  className={classes.title}>OUR INFRASTRUCTURE</h3>
             <p>&emsp;&emsp;Our company has established up to date infrastructural set-up, where all facilities related to our business domain have been installed by us. It has various departments like production, quality control and others, which help us in performing our all business operations in systematic and best possible manner and systematic. Our company also ensures the quality of the products before final dispatch of the items at the customer end.</p>
             </center>
             </div>
             </Fade>
      </section>


              
                 

    </section>
  )
}

export default Ab;