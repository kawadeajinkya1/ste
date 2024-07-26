import classes from './Products.module.css';
import { Link } from 'react-router-dom';
import img1 from '../../Assets/corepnproduct.webp';


const Products=(props)=>{
    return <div className={classes.contain }>

 <div className={classes.hold}>

            <div className={classes.imgHold}>
            <center>
                <img src={props.img} className={classes.img}></img>
                </center>
            </div>
          
            <div className={classes.headhold}>
                <span className={classes.head}>{props.head}</span>
            </div>

            <div className={classes.middle}>
    <span className={classes.text}>{props.text}</span>
        </div>

     
        </div>


     
    </div>


};


export default Products;