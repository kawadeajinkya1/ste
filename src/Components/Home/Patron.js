import classes from './Patron.module.css';
import img1 from '../../Assets/bajaj.png';
import { Link } from 'react-router-dom';

const Patron = (props) => {
    return <div className={classes.contain}>
      
            <div className={classes.imgHold}>
                <img src={props.img} className={classes.img}/>
            </div>
        </div>
};

export default Patron;