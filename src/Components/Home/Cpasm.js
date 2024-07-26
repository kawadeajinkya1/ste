import classes from './Cpasm.module.css';
import { FaCheck} from 'react-icons/fa';
import Fade from 'react-reveal/Fade';


import img1 from '../../Assets/customs (1).png';
import img2 from '../../Assets/distribution.png';
import img3 from '../../Assets/wallet.png';
import img4 from '../../Assets/cus.png';
import img5 from '../../Assets/delivery.png';
import img6 from '../../Assets/money.png';


const Cpasm=()=>{
    return(

<div className={classes.main}>

<div className={classes.hold}><br></br><br></br>
        <h1 className={classes.head}>Our Assurance</h1>
        <br></br>
        <center>     
            <div className={classes.row}>
            <Fade left>
            <div>
            <img src={img4} className={classes.img}/>
            <h4 className={classes.heading}>Customize Packing</h4>   
            <h6 className={classes.heading1}>Available &nbsp;  <FaCheck className={classes.ic} /></h6> 
            </div>
            </Fade>

            <Fade top>
            <div>
            <img src={img6} className={classes.img}/>
            <h4 className={classes.heading}>Payment Accepted</h4>   
            <h5 className={classes.heading1}>Cash | DD | Credit Card | Cheque &nbsp;   <FaCheck className={classes.ic} /></h5> 
            </div>
            </Fade>
        
            <Fade right>
            <div>
            <img src={img5} className={classes.img}/>
            <h4 className={classes.heading}>Shipment Mode</h4>   
            <h5 className={classes.heading1}>By Road &nbsp;   <FaCheck className={classes.ic} /></h5>  
            </div>
            </Fade>
            
</div>
</center>


</div>

</div>

    )
};


export default Cpasm;