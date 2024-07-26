import { Link } from 'react-router-dom';
import React from 'react'

import classes from './Footer.module.css';

import logo from '../../Assets/stelogo.jpg';
import hrt from '../../Assets/heart.gif';
import mail from '../../Assets/gmail.png';
import insta from '../../Assets/instagram.png';
import linked from '../../Assets/linkedin.png';
import fb from "../../Assets/facebook.png";
import phone from '../../Assets/smartphone.png';
import loc from '../../Assets/visit.png';
import gmail from "../../Assets/new.png";

export const Footer = () => {
  return (
    <div className={classes.container}>
        <div className={classes.top}>
            <div className={classes.row1}>
                <div className={classes.logo}><img src={logo} alt='Sachin tools'></img></div>
                <div className={classes.address}><p> S.NO.38/1,KHEDEKAR INDUSTRIAL,ESTATE, BEHIND PARI CO, NARHEGAON, PUNE -411041</p></div>
                <div className={classes.icon}>
                   <a href="https://www.instagram.com/sachintoolsengg/"> <img src={insta} alt='sachin tools'/> </a>
                   <a href="https://www.facebook.com/sachintoolsengineering"> <img src={fb} alt='sachin tools'/> </a>
                    <a href="https://www.linkedin.com/in/santosh-sharma-b97b8b257/"> <img src={linked} alt='sachin tools'/> </a>
                </div>
            </div>
            <div className={classes.row2}>
                <h3 className={classes.kd}>Quick Links</h3>
                <p><Link to='/' className={classes.lnk}>Home</Link></p>
                <p><Link to='/about' className={classes.lnk}>About</Link></p>
                <p><Link to='/Grading' className={classes.lnk}>Machinery</Link></p>
                <p><Link to='/Contact' className={classes.lnk}>Contact</Link></p>
            </div>

{/*
            <div className={classes.row2}>
                <h3 className={classes.kd}>Products</h3>
                <div  className={classes.lnkfz}>
                <div className={classes.lnkf}>
                <p><Link to='/' className={classes.lnk}>Core Pins</Link></p>
                <p><Link to='/about' className={classes.lnk}>Diamond & Round Pins</Link></p>
                <p><Link to='/Grading' className={classes.lnk}>Tool Room Componnts</Link></p>
                <p><Link to='/Contact' className={classes.lnk}>Carbide Dead Centers</Link></p>
                </div>
                <div className={classes.lnkf}>
                <p><Link to='/' className={classes.lnk}>Valve Seat Adapter</Link></p>
                <p><Link to='/about' className={classes.lnk}>Hobbin Fixture Sleevsheet</Link></p>
                <p><Link to='/Grading' className={classes.lnk}>Precision Componnts</Link></p>
                <p><Link to='/Contact' className={classes.lnk}>Rest Pads</Link></p>
                </div>
                </div> 
            </div>
  */}
         
            
            <div className={classes.row3}>
                <h3 className={classes.kd}>Connect Us</h3>
                <p><a className={classes.lnk} href='mailto:sachintoolsengg@gmail.com'>sachintoolsengg@gmail.com </a>
                <br/> <a className={classes.lnk} href='mailto:sachintoolsengg@yahoo.co.in'>sachintoolsengg@yahoo.co.in</a></p>
                <p><a className={classes.lnk} href='tel:9850089065'>+91 9850089065</a>
                <br/>
                <a className={classes.lnk} href='tel:9850089067'>+91 9850089067</a> </p>
            </div>
            <div className={classes.row4}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.8394889046153!2d73.8213782738957!3d18.445595571462686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295fe8218d6dd%3A0x906152e9c20fc0a8!2sKhedekar%20Industrial%20Estate!5e0!3m2!1sen!2sin!4v1695729526345!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div className={classes.bottom}>
            <p>Copyright © 2023 Sachin Tools Engineering | Made with <img className={classes.heart} src={hrt} alt='Sachin tools'></img> by Cortica Web Solutions Pvt.Ltd</p>
        </div>
    </div>
    
);
};

