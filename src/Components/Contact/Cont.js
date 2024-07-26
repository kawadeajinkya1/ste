import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


import classes from './Contact.module.css';
import contact from '../../Assets/contact.jpg';
import visit from '../../Assets/visit.png';
import phone from '../../Assets/phone.png';
import mail from '../../Assets/mail.png';








const Cont = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5nlyw6e', 'template_87vuotr', form.current, 'bsz7LIwTvX6ZYGIM3')
      .then((result) => {

        alert("Message Sent Successfully !!!")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className={classes.Cmain}> 
      
      <div className={classes.top}>
        <div>
        <img src={contact} className={classes.image}></img>
        </div>
        <div className={classes.flex}>
        <div className={classes.para1}>
          <h1>Contact Us</h1>
          <p>Need an Expert?<br/>
          You are more than welcome to leave your <br></br>contact info and we will be in touch shortly</p>
          </div>
          <div className={classes.left}>
          <form ref={form} onSubmit={sendEmail} className={classes.bg}>
              <label> Frist Name</label><br></br>
              <input type='text' name="name" className={classes.bg1}/><br></br><br></br>
              <label> Last Name</label><br></br>
              <input type='text' name="Lname" className={classes.bg1}></input><br></br><br></br>
              <label> Email address</label><br></br>
              <input type='text'name="email" className={classes.bg1}></input><br></br><br></br>
              <label> Mobile Number</label><br></br>
              <input type='text'name="phn" className={classes.bg1}></input><br></br><br></br>
              <label>Message</label><br></br>
              <textarea cols='45' rows='10' name="message" className={classes.bg1}>

              </textarea><br></br>
              <div>
                <button type="submit" value="Send" className={classes.btn}>SEND</button>
              </div>


            </form>
          </div>
         </div>
      </div>
      <div className={classes.add}>
        <div className={classes.frist}>
          <div className={classes.A1}>
          <img src={visit} className={classes.vicon}></img>
          <h3>Visit Us</h3>
          <p className={classes.visit}>S. NO. 38/1, KHEDEKAR INDUSTRIAL<br></br> ESTATE, BEHIND PARI CO.,<br></br> NARHEGAON, PUNE -411041</p>
          </div>
        </div>
        <div className={classes.second}>
          <div className={classes.A2}>
          <img src={phone} className={classes.picon}></img>
          <h3>Call Us</h3>
          <p><a href='tel:9850089065'>+919850089065</a></p>
          <p><a href='tel:9850089067'>+919850089067</a></p>
     
          </div>

        </div>


        <div className={classes.third}>
          <div className={classes.A3}>
          <img src={mail}className={ classes.micon}></img>
          <h3>Message Us</h3>
          <p><a href='mailto:sachintoolsengg@gmail.com'>sachintoolsengg@gmail.com</a></p>
          <p><a href='mailto:sachintoolsengg@yahoo.co.in'>sachintoolsengg@yahoo.co.in</a></p>
          </div>

         
        </div>
      </div>

      <br></br>
      <div className={classes.bottom}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.8394889046417!2d73.8213782743179!3d18.445595571461883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295fe8218d6dd%3A0x906152e9c20fc0a8!2z4KSW4KWH4KSh4KWH4KSV4KSwIOCkh-CkguCkoeCkuOCljeCkn-CljeCksOCkv-Ckr-CksiDgpI_gpLjgpY3gpJ_gpYfgpJ8!5e0!3m2!1smr!2sin!4v1693822117978!5m2!1smr!2sin" className={classes.map}></iframe>

      </div>

    </div>
  )
  
}

export default Cont;