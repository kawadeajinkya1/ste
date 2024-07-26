import { Link } from 'react-router-dom';
import classes from './Poster.module.css';


const Poster=()=>{
    return(
    <div className={classes.herobg}>
     <p className={classes.p1}>Welcome to</p>
     <h1 className={classes.p2}>Sachin Tools Engineering</h1>
     <p className={classes.p3}>Elevating Standards through Innovative Tools ..!</p>
     <button className={classes.btn}><Link to='/Contact' className={classes.btnlink}>Contact Us</Link></button>


    </div>
    );
};


export default Poster;