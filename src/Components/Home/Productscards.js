import React, { Component } from "react";
import classes from './Productscards.module.css';
import Products from './Products';
import  {Link}  from 'react-router-dom';

import img1 from '../../Assets/corepnproduct.webp';
import img2 from '../../Assets/trc-GwSjNOuA8-transformed.png';
import img3 from '../../Assets/grindingworks-transformed.png';
import img4 from '../../Assets/carbidedead-transformed.png';
import img5 from '../../Assets/hsscutter-zeNIj-3wqC-transformed.png';
import img6 from '../../Assets/valveseatadaptedr-transformed.png';
import img7 from '../../Assets/hobbing-transformed (1).png';
import img8 from '../../Assets/precisioncomp-transformed.png';
import img9 from '../../Assets/rest.png';
import img10 from '../../Assets/industrialcutter-A1V0qoA-z-transformed.png';

import SProduct6 from '../../Assets/diamond.webp';

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const Productscards=()=>{
return (
    <div className={classes.hold}>
  
        <h3 className={classes.head}>Our Products</h3>
        <Fade left>
            <div className={classes.row}>
          
            <div>
            <Link className={classes.lnkp} to='/corepin'> <Products img={img1}  head='CORE PINS'  text='READ MORE'></Products> </Link>
            </div>
            <div>
            <Link className={classes.lnkp} to='/Dr'>  <Products img={SProduct6}  head='DIAMOND PINS & ROUND PINS' text='READ MORE'></Products></Link>
            </div>
            <div>
            <Link className={classes.lnkp} to='/Ttc'>  <Products img={img2} head='TOOL ROOM COMPONENT'text='READ MORE' ></Products></Link>
            </div>
          {/*
            <div>
            <Link className={classes.lnkp} to='/Grading'>   <Products  head='GRINDING WORKS' text='READ MORE'></Products></Link>
            </div>
*/}
            <div>
            <Link className={classes.lnkp} to='/Cdc'>   <Products img={img4} head='CARBIDE DEAD CENTERS' text='READ MORE'></Products></Link>
            </div>
            {/*<div>
            <Link className={classes.lnkp} to='/Cahrc'>  <Products img={img5} head='CARBIDE AND HSS CUTTERS RESHARPENING' text='READ MORE'></Products></Link>
</div>*/}
              
            </div>
            </Fade>

            <Fade right>
            <div className={classes.row}>

            <div>
            <Link className={classes.lnkp} to='/vsa'>  <Products img={img6} head='VALVE SEAT ADAPTER' text='READ MORE' ></Products></Link>
            </div>
            <div>
            <Link className={classes.lnkp} to='/Hfa'>  <Products img={img7} head='HOBBING FIXTURE SLEEVES' text='READ MORE' ></Products></Link>
            </div>
            <div>
            <Link className={classes.lnkp} to='/Pc'>  <Products img={img8} head='PERCISION COMPONENT' text='READ MORE'></Products></Link>
            </div>
            <div>
            <Link className={classes.lnkp} to='/Restpad'>  <Products img={img9} head='REST PAD' text='READ MORE'></Products></Link>
            </div>
            {/*
            <div>
            <Link className={classes.lnkp} to='/Industrials'>  <Products img={img10} head='INDUSTRIAL CUTTERS' text='READ MORE' ></Products></Link>
</div> */}
 
            </div>
            </Fade>
          
    </div>
)
};

export default Productscards;